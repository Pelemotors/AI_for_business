'use client'

import { motion } from 'framer-motion'
import { Book, Rocket, Gauge, LucideIcon } from 'lucide-react'

interface Step {
  icon: LucideIcon
  title: string
  text: string
}

interface StepsProps {
  steps: Step[]
}

export default function Steps({ steps }: StepsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {steps.map((step, index) => (
        <motion.div
          key={index}
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <div className="bg-electricBlue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <step.icon className="h-8 w-8 text-electricBlue" />
          </div>
          <h3 className="text-xl font-semibold text-ink mb-3">{step.title}</h3>
          <p className="text-slate leading-relaxed">{step.text}</p>
        </motion.div>
      ))}
    </div>
  )
}