'use client'

import { motion } from 'framer-motion'
import { Globe, BookOpen, Laptop, TrendingUp, Users, Clock, Shield, Zap } from 'lucide-react'

export default function WhyPage() {
  const importanceAreas = [
    {
      icon: Globe,
      title: 'יתרון לעתיד',
      subtitle: 'מיומנויות AI כבסיס לעולם העבודה',
      color: 'primary',
      description: 'העתיד כבר כאן - מיומנויות AI הן הכרחיות להצלחה בכל תחום',
      benefits: [
        '85% מהמשרות החדשות ידרשו מיומנויות AI',
        'השכר הממוצע בתחום AI גבוה ב-40% מהממוצע',
        'חברות Fortune 500 כבר משתמשות ב-AI בכל תחום'
      ],
      stats: [
        { label: 'צמיחה צפויה', value: '300%', description: 'בביקוש למומחי AI' },
        { label: 'משרות חדשות', value: '2.3M', description: 'יצירות משרות AI עד 2025' }
      ]
    },
    {
      icon: BookOpen,
      title: 'ערך בלימודים',
      subtitle: 'סיכומים, אנגלית, מצגות',
      color: 'secondary',
      description: 'AI יכול לשפר משמעותית את הביצועים הלימודיים',
      benefits: [
        'סיכומים אוטומטיים של חומר לימוד',
        'תרגול אנגלית עם AI מתקדם',
        'יצירת מצגות מרשימות בזמן קצר',
        'פתרון בעיות מתמטיות מורכבות'
      ],
      stats: [
        { label: 'שיפור ציונים', value: '25%', description: 'בממוצע' },
        { label: 'חיסכון זמן', value: '60%', description: 'בהכנת שיעורי בית' }
      ]
    },
    {
      icon: Laptop,
      title: 'ערך אישי',
      subtitle: 'ביטחון טכנולוגי + תכנות בסיסי',
      color: 'accent',
      description: 'פיתוח ביטחון עצמי ויכולות חשיבה ביקורתית',
      benefits: [
        'ביטחון בשימוש בטכנולוגיה מתקדמת',
        'יכולת חשיבה ביקורתית ופתרון בעיות',
        'מיומנויות תכנות בסיסיות',
        'יצירתיות וחדשנות'
      ],
      stats: [
        { label: 'ביטחון עצמי', value: '90%', description: 'שיפור מדווח' },
        { label: 'יצירתיות', value: '75%', description: 'עלייה במיומנויות' }
      ]
    }
  ]

  const futureSkills = [
    { icon: TrendingUp, text: 'חשיבה ביקורתית' },
    { icon: Users, text: 'עבודה בצוות' },
    { icon: Clock, text: 'ניהול זמן' },
    { icon: Shield, text: 'ביטחון דיגיטלי' },
    { icon: Zap, text: 'יצירתיות' },
    { icon: Laptop, text: 'תכנות בסיסי' }
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
            למה החוג הזה חשוב?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            להורים ולנוער - השקעה בעתיד הטכנולוגי שלכם
          </motion.p>
        </div>
      </section>

      {/* Importance Areas */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {importanceAreas.map((area, index) => {
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
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                      {area.title}
                    </h2>
                    <h3 className={`text-xl font-semibold mb-4 ${
                      area.color === 'primary' ? 'text-primary-600' :
                      area.color === 'secondary' ? 'text-secondary-600' :
                      'text-accent-600'
                    }`}>
                      {area.subtitle}
                    </h3>
                    <p className="text-lg text-gray-700 mb-8">
                      {area.description}
                    </p>
                    
                    {/* Benefits */}
                    <div className="space-y-3 mb-8">
                      {area.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-start gap-3">
                          <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                            area.color === 'primary' ? 'bg-primary-100 text-primary-500' :
                            area.color === 'secondary' ? 'bg-secondary-100 text-secondary-500' :
                            'bg-accent-100 text-accent-500'
                          }`}>
                            <span className="text-sm font-bold">✓</span>
                          </div>
                          <p className="text-gray-700">{benefit}</p>
                        </div>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4">
                      {area.stats.map((stat, statIndex) => (
                        <div key={statIndex} className={`p-4 rounded-xl text-center ${
                          area.color === 'primary' ? 'bg-primary-50 border border-primary-200' :
                          area.color === 'secondary' ? 'bg-secondary-50 border border-secondary-200' :
                          'bg-accent-50 border border-accent-200'
                        }`}>
                          <div className={`text-2xl font-bold ${
                            area.color === 'primary' ? 'text-primary-600' :
                            area.color === 'secondary' ? 'text-secondary-600' :
                            'text-accent-600'
                          }`}>
                            {stat.value}
                          </div>
                          <div className="text-sm font-medium text-gray-900">
                            {stat.label}
                          </div>
                          <div className="text-xs text-gray-600">
                            {stat.description}
                          </div>
                        </div>
                      ))}
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

      {/* Future Skills */}
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
              מיומנויות העתיד
            </h2>
            <p className="text-xl text-gray-600">
              מה שתלמדו בקורס יעזור לכם בכל תחום בחיים
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {futureSkills.map((skill, index) => {
              const IconComponent = skill.icon
              return (
                <motion.div
                  key={skill.text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-primary-500" />
                  </div>
                  <p className="text-sm font-medium text-gray-700">
                    {skill.text}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              מוכנים להתחיל את המסע לעתיד?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              הצטרפו לקורס AI לנוער ותכינו את עצמכם לעולם הטכנולוגי
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-primary-600 font-bold py-4 px-8 rounded-full text-lg hover:bg-gray-100 transition-colors duration-300"
            >
              הרשמה לקורס
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
