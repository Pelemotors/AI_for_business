import { motion } from 'framer-motion'
import { Check, Star } from 'lucide-react'
import CTAButton from '@/components/CTAButton'

interface PricingPlan {
  name: string
  description: string
  features: string[]
  ctaText: string
  ctaHref: string
  isPopular?: boolean
}

interface PricingTableProps {
  plans: PricingPlan[]
}

export default function PricingTable({ plans }: PricingTableProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {plans.map((plan, index) => (
        <motion.div
          key={index}
          className={`relative bg-white p-8 rounded-xl shadow-lg border-2 transition-all duration-300 hover:shadow-xl ${
            plan.isPopular ? 'border-electricBlue' : 'border-gray-200'
          }`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          {plan.isPopular && (
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-electricBlue text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
                <Star className="h-4 w-4 ml-1" />
                הכי פופולרי
              </div>
            </div>
          )}

          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-ink mb-2">{plan.name}</h3>
            <p className="text-slate">{plan.description}</p>
          </div>

          <ul className="space-y-4 mb-8">
            {plan.features.map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-start">
                <Check className="h-5 w-5 text-mint ml-3 mt-0.5 flex-shrink-0" />
                <span className="text-slate">{feature}</span>
              </li>
            ))}
          </ul>

          <div className="text-center">
            <CTAButton
              href={plan.ctaHref}
              className={`w-full ${plan.isPopular ? '' : 'variant="secondary"'}`}
            >
              {plan.ctaText}
            </CTAButton>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
