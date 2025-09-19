import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface ValueCardProps {
  icon: LucideIcon
  title: string
  text: string
  example: string
  index: number
}

export default function ValueCard({ icon: Icon, title, text, example, index }: ValueCardProps) {
  return (
    <motion.div
      className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center mb-6">
        <div className="bg-electricBlue/10 p-4 rounded-lg">
          <Icon className="h-8 w-8 text-electricBlue" />
        </div>
        <h3 className="text-2xl font-semibold text-ink mr-4">{title}</h3>
      </div>
      
      <p className="text-slate leading-relaxed mb-6">{text}</p>
      
      <div className="bg-gray-50 p-4 rounded-lg border-r-4 border-electricBlue">
        <p className="text-sm text-slate font-medium mb-2">דוגמה:</p>
        <p className="text-slate italic">"{example}"</p>
      </div>
    </motion.div>
  )
}
