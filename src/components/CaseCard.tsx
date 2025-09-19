import { motion } from 'framer-motion'
import { TrendingUp } from 'lucide-react'

interface CaseCardProps {
  title: string
  result: string
  description: string
  index: number
}

export default function CaseCard({ title, result, description, index }: CaseCardProps) {
  return (
    <motion.div
      className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center mb-4">
        <div className="bg-mint/10 p-3 rounded-lg">
          <TrendingUp className="h-6 w-6 text-mint" />
        </div>
        <h3 className="text-xl font-semibold text-ink mr-4">{title}</h3>
      </div>
      
      <div className="bg-mint/10 p-4 rounded-lg mb-4">
        <p className="text-mint font-semibold text-lg">{result}</p>
      </div>
      
      <p className="text-slate leading-relaxed">{description}</p>
    </motion.div>
  )
}
