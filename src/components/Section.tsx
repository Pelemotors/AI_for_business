'use client'

import { motion } from 'framer-motion'

interface SectionProps {
  title?: string
  subtitle?: string
  children: React.ReactNode
  align?: 'center' | 'left'
  className?: string
}

export default function Section({ 
  title, 
  subtitle, 
  children, 
  align = 'center',
  className = ''
}: SectionProps) {
  return (
    <section className={`section-padding ${className}`}>
      <div className="container-max">
        {(title || subtitle) && (
          <motion.div 
            className={`mb-12 ${align === 'center' ? 'text-center' : 'text-right'}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-slate max-w-3xl mx-auto">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  )
}