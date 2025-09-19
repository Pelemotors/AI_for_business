'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { PenTool, Palette, Code, BookOpen, Music, Globe, Brain, Clock, Laptop } from 'lucide-react'

export default function LearnPage() {
  const learningAreas = [
    {
      title: 'כתיבה יצירתית',
      icon: PenTool,
      color: 'primary',
      description: 'פיתוח מיומנויות כתיבה יצירתית עם כלי AI מתקדמים',
      features: [
        { icon: BookOpen, text: 'סיפורים עם AI - יצירת עלילות מרתקות' },
        { icon: Brain, text: 'חידונים אינטראקטיביים - למידה חווייתית' },
        { icon: Globe, text: 'מצגות דינמיות - הצגת רעיונות בצורה מרשימה' },
      ],
      examples: [
        'כתיבת סיפור מדע בדיוני עם ChatGPT',
        'יצירת חידון על היסטוריה עם AI',
        'הכנת מצגת על חלל עם כלי AI',
      ]
    },
    {
      title: 'יצירה חזותית וקולית',
      icon: Palette,
      color: 'secondary',
      description: 'הבעה יצירתית באמצעות כלים ויזואליים וקוליים',
      features: [
        { icon: Palette, text: 'קומיקס דיגיטליים - סיפורים ויזואליים' },
        { icon: Music, text: 'מוזיקה עם AI - יצירת מנגינות מקוריות' },
        { icon: Globe, text: 'פוסטרים עתידניים - עיצוב גרפי מתקדם' },
      ],
      examples: [
        'יצירת קומיקס על הרפתקאות בחלל',
        'הלחנת מנגינה עם כלי AI מוזיקלי',
        'עיצוב פוסטר לקורס AI לנוער',
      ]
    },
    {
      title: 'מיומנויות לחיים + תכנות',
      icon: Code,
      color: 'accent',
      description: 'פיתוח מיומנויות חשיבה ותכנות בסיסי',
      features: [
        { icon: Brain, text: 'חשיבה ביקורתית - ניתוח מידע וקבלת החלטות' },
        { icon: Clock, text: 'תכנון זמן - ארגון יעיל של משימות' },
        { icon: Laptop, text: 'תכנות בסיסי - אתר אישי וצ\'אטבוט' },
      ],
      examples: [
        'בניית אתר אישי עם HTML, CSS ו-JavaScript',
        'יצירת צ\'אטבוט פשוט עם Python',
        'פיתוח משחק פשוט עם Scratch',
      ]
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            מה תלמדו בקורס?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
          >
            שלושה תחומים מרכזיים שיפתחו אתכם לעתיד הטכנולוגי
          </motion.p>

          {/* GIF של תלמידים לומדים */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12"
          >
            <div className="relative max-w-3xl mx-auto">
              <Image
                src="/images/students-learning.gif"
                alt="תלמידים לומדים AI - כך נראה הקורס שלנו"
                width={600}
                height={300}
                className="rounded-xl shadow-lg border-2 border-primary-200"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-500/20 to-transparent rounded-xl"></div>
              <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full">
                <p className="text-xs font-medium text-gray-700">למידה מעשית וחווייתית</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Learning Areas */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {learningAreas.map((area, index) => {
              const IconComponent = area.icon
              return (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex flex-col md:flex items-center gap-12`}
                >
                  {/* תוכן */}
                  <div className="flex-1">
                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 ${
                      area.color === 'primary' ? 'bg-primary-100 text-primary-500' :
                      area.color === 'secondary' ? 'bg-secondary-100 text-secondary-500' :
                      'bg-accent-100 text-accent-500'
                    }`}>
                      <IconComponent size={40} />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      {area.title}
                    </h2>
                    <p className="text-xl text-gray-600 mb-8">
                      {area.description}
                    </p>
                    
                    {/* Features */}
                    <div className="space-y-4 mb-8">
                      {area.features.map((feature, featureIndex) => {
                        const FeatureIcon = feature.icon
                        return (
                          <div key={featureIndex} className="flex items-start gap-4">
                            <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                              area.color === 'primary' ? 'bg-primary-100 text-primary-500' :
                              area.color === 'secondary' ? 'bg-secondary-100 text-secondary-500' :
                              'bg-accent-100 text-accent-500'
                            }`}>
                              <FeatureIcon size={16} />
                            </div>
                            <p className="text-gray-700 font-medium">
                              {feature.text}
                            </p>
                          </div>
                        )
                      })}
                    </div>

                    {/* Examples */}
                    <div className={`p-6 rounded-xl ${
                      area.color === 'primary' ? 'bg-primary-50 border border-primary-200' :
                      area.color === 'secondary' ? 'bg-secondary-50 border border-secondary-200' :
                      'bg-accent-50 border border-accent-200'
                    }`}>
                      <h4 className="font-bold text-gray-900 mb-3">דוגמאות מעשיות:</h4>
                      <ul className="space-y-2">
                        {area.examples.map((example, exampleIndex) => (
                          <li key={exampleIndex} className="flex items-start gap-2">
                            <span className={`text-sm ${
                              area.color === 'primary' ? 'text-primary-500' :
                              area.color === 'secondary' ? 'text-secondary-500' :
                              'text-accent-500'
                            }`}>•</span>
                            <span className="text-gray-700">{example}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* תמונה placeholder */}
                  <div className="flex-1">
                    <div className={`aspect-square rounded-2xl ${
                      area.color === 'primary' ? 'bg-gradient-to-br from-primary-100 to-primary-200' :
                      area.color === 'secondary' ? 'bg-gradient-to-br from-secondary-100 to-secondary-200' :
                      'bg-gradient-to-br from-accent-100 to-accent-200'
                    } flex items-center justify-center`}>
                      <IconComponent size={120} className={
                        area.color === 'primary' ? 'text-primary-300' :
                        area.color === 'secondary' ? 'text-secondary-300' :
                        'text-accent-300'
                      } />
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              מוכנים להתחיל ללמוד?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              הצטרפו לקורס ותגלו את הפוטנציאל שלכם בעולם ה-AI
            </p>
            <a
              href="/contact"
              className="btn-primary text-lg px-8 py-4"
            >
              הרשמה לקורס
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
