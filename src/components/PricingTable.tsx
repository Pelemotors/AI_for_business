'use client'

import { motion } from 'framer-motion'
import { Check, Star } from 'lucide-react'
import CTAButton from '@/components/CTAButton'

interface PricingPlan {
  name: string
  price: string
  participants: string
  duration: string
  icon: string
  features: string[]
  result: string
  badge?: string
  bgColor: string
  borderColor: string
  textColor: string
  buttonColor: string
}

interface PricingTableProps {
  plans: PricingPlan[]
}

export default function PricingTable({ plans }: PricingTableProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {plans.map((plan, index) => (
        <motion.div
          key={index}
          className={`relative ${plan.bgColor} p-6 rounded-2xl shadow-md border-2 ${plan.borderColor} transition-all duration-300 hover:shadow-xl hover:scale-105`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ 
            scale: 1.03,
            boxShadow: plan.name === 'VIP' ? '0 0 30px rgba(241, 196, 15, 0.3)' : '0 10px 30px rgba(0,0,0,0.1)'
          }}
        >
          {plan.badge && (
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <div className={`${plan.bgColor === 'bg-white' ? 'bg-green-500' : 'bg-yellow-500'} text-white px-3 py-1 rounded-full text-xs font-medium`}>
                {plan.badge}
              </div>
            </div>
          )}

          {/* Icon */}
          <div className="text-center mb-4">
            <div className="text-4xl mb-2">{plan.icon}</div>
            <h3 className={`text-2xl font-bold mb-2 ${plan.textColor}`}>{plan.name}</h3>
            <div className={`text-4xl font-extrabold mb-2 ${plan.textColor}`}>{plan.price}</div>
            <p className={`text-sm ${plan.textColor === 'text-white' ? 'text-gray-300' : 'text-gray-600'}`}>
              {plan.participants} | {plan.duration}
            </p>
          </div>

          {/* Features */}
          <ul className="space-y-3 mb-6">
            {plan.features.map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-start">
                <Check className="h-4 w-4 text-green-500 ml-2 mt-1 flex-shrink-0" />
                <span className={`text-sm ${plan.textColor === 'text-white' ? 'text-gray-200' : 'text-gray-700'}`}>
                  {feature}
                </span>
              </li>
            ))}
          </ul>

          {/* Guaranteed Result */}
          <div className={`mb-6 p-3 rounded-lg ${plan.bgColor === 'bg-white' ? 'bg-blue-50' : plan.bgColor === 'bg-purple-100' ? 'bg-purple-200' : 'bg-gray-800'}`}>
            <p className={`text-sm font-semibold ${plan.textColor}`}>
              תוצאה מובטחת:
            </p>
            <p className={`text-xs mt-1 ${plan.textColor === 'text-white' ? 'text-gray-300' : 'text-gray-600'}`}>
              {plan.result}
            </p>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <CTAButton
              href="/contact"
              className={`w-full ${plan.buttonColor} text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105`}
            >
              להירשם עכשיו
            </CTAButton>
          </div>
        </motion.div>
      ))}
    </div>
  )
}