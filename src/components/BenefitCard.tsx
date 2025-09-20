'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface BenefitCardProps {
  icon: LucideIcon
  title: string
  text: string
  index: number
}

export default function BenefitCard({ icon: Icon, title, text, index }: BenefitCardProps) {
  return (
    <motion.div
      className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center mb-4">
        <div className="bg-electricBlue/10 p-3 rounded-lg">
          <Icon className="h-6 w-6 text-electricBlue" />
        </div>
        <h3 className="text-xl font-semibold text-ink mr-4">{title}</h3>
      </div>
      <p className="text-slate leading-relaxed">{text}</p>
    </motion.div>
  )
}