'use client'

import { motion } from 'framer-motion'
import { CheckCircle, XCircle } from 'lucide-react'

interface BeforeAfterItem {
  text: string
  isPositive?: boolean
}

interface BeforeAfterProps {
  before: BeforeAfterItem[]
  after: BeforeAfterItem[]
}

export default function BeforeAfter({ before, after }: BeforeAfterProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* לפני */}
      <motion.div
        className="bg-red-50 p-8 rounded-xl border border-red-200"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold text-red-600 mb-6 flex items-center">
          <XCircle className="h-6 w-6 ml-2" />
          לפני
        </h3>
        <ul className="space-y-4">
          {before.map((item, index) => (
            <li key={index} className="flex items-start">
              <XCircle className="h-5 w-5 text-red-500 ml-3 mt-0.5 flex-shrink-0" />
              <span className="text-slate">{item.text}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* אחרי */}
      <motion.div
        className="bg-green-50 p-8 rounded-xl border border-green-200"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold text-green-600 mb-6 flex items-center">
          <CheckCircle className="h-6 w-6 ml-2" />
          אחרי
        </h3>
        <ul className="space-y-4">
          {after.map((item, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 ml-3 mt-0.5 flex-shrink-0" />
              <span className="text-slate">{item.text}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  )
}