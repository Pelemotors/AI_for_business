'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { PenTool, Palette, Code, ArrowLeft } from 'lucide-react'

export default function HomePage() {
  const features = [
    {
      icon: PenTool,
      title: 'כתיבה יצירתית עם מילים',
      description: 'סיפורים, חידונים, מצגות - הכל עם AI',
      color: 'primary',
    },
    {
      icon: Palette,
      title: 'יצירה חזותית וקולית',
      description: 'קומיקס, מוזיקה, פוסטרים - בואו ניצור יחד',
      color: 'secondary',
    },
    {
      icon: Code,
      title: 'מיומנויות לחיים + תכנות',
      description: 'חשיבה ביקורתית, תכנון זמן, צעדים ראשונים בתכנות',
      color: 'accent',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-bg text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              העתיד כבר כאן
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl md:text-3xl font-semibold mb-8 text-yellow-300"
            >
              תלמדו להשתמש ב-AI עכשיו!
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              קורס חווייתי שמפתח יצירתיות, חשיבה ביקורתית ויכולות תכנות
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 px-8 rounded-full text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                שיעור ניסיון חינם 🎁
                <ArrowLeft className="mr-2" size={24} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              מה תלמדו בקורס?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              שלושה תחומים מרכזיים שיפתחו אתכם לעתיד
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className={`card text-center group cursor-pointer ${
                    feature.color === 'primary' ? 'hover:border-primary-500' :
                    feature.color === 'secondary' ? 'hover:border-secondary-500' :
                    'hover:border-accent-500'
                  } hover:border-2 transition-all duration-300`}
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 ${
                    feature.color === 'primary' ? 'bg-primary-100 text-primary-500 group-hover:bg-primary-500 group-hover:text-white' :
                    feature.color === 'secondary' ? 'bg-secondary-100 text-secondary-500 group-hover:bg-secondary-500 group-hover:text-white' :
                    'bg-accent-100 text-accent-500 group-hover:bg-accent-500 group-hover:text-white'
                  } transition-all duration-300`}>
                    <IconComponent size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              מוכנים להתחיל את המסע?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              הצטרפו לקורס AI לנוער ותגלו את הפוטנציאל שלכם
            </p>
            <Link
              href="/contact"
              className="btn-primary text-lg px-8 py-4"
            >
              הרשמה לקורס
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
