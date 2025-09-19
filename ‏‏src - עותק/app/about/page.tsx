'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Award, Users, Heart, Star, CheckCircle } from 'lucide-react'

export default function AboutPage() {
  const achievements = [
    {
      icon: GraduationCap,
      title: 'השכלה אקדמית',
      description: 'תואר במדעי המחשב עם התמחות ב-AI',
      color: 'primary'
    },
    {
      icon: Award,
      title: 'ניסיון מקצועי',
      description: '5+ שנות ניסיון בפיתוח AI וחינוך',
      color: 'secondary'
    },
    {
      icon: Users,
      title: 'תלמידים מרוצים',
      description: 'מאות תלמידים שכבר למדו איתי',
      color: 'accent'
    }
  ]

  const testimonials = [
    {
      text: "המרצה מצוין! הוא מסביר הכל בצורה פשוטה ומעניינת",
      author: "שרה, אמא של יונתן"
    },
    {
      text: "הבן שלי כל כך נהנה מהקורס ומבין הכל בקלות",
      author: "דוד, אבא של רועי"
    },
    {
      text: "הקורס פתח לי עולם חדש של אפשרויות",
      author: "מיכל, תלמידה בת 15"
    }
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
            הכירו את המרצה
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            מי שמאמין שכל נער ונערה יכולים להצליח בעולם ה-AI
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* תמונה */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-4xl text-white font-bold">מרצה</span>
                    </div>
                    <p className="text-gray-600">תמונה תתווסף כאן</p>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
              </div>
            </motion.div>

            {/* טקסט */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-primary-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  שלום, אני המרצה שלכם!
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  אני חי את תחום ה-AI ומאמין שבני נוער צריכים להכיר את הכלים שיכינו אותם לעולם האמיתי – יצירתיות, תכנות וחשיבה ביקורתית.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  המטרה שלי היא לא רק ללמד אתכם להשתמש בכלי AI, אלא לפתח בכם את המיומנויות שיעזרו לכם להצליח בכל תחום שתבחרו בעתיד.
                </p>
                
                {/* תכונות אישיות */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {[
                    { icon: Heart, text: 'מאמין ביכולות שלכם' },
                    { icon: Star, text: 'מחויב להצלחתכם' },
                    { icon: CheckCircle, text: 'ניסיון עשיר בחינוך' },
                    { icon: Users, text: 'מבין את עולמכם' }
                  ].map((trait, index) => {
                    const IconComponent = trait.icon
                    return (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                          <IconComponent className="w-4 h-4 text-primary-500" />
                        </div>
                        <span className="text-gray-700 font-medium">{trait.text}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements */}
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
              הישגים והתמחויות
            </h2>
            <p className="text-xl text-gray-600">
              מה שמביא אותי לעמוד כאן היום
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon
              return (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="card text-center group hover:scale-105 transition-all duration-300"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 ${
                    achievement.color === 'primary' ? 'bg-primary-100 text-primary-500 group-hover:bg-primary-500 group-hover:text-white' :
                    achievement.color === 'secondary' ? 'bg-secondary-100 text-secondary-500 group-hover:bg-secondary-500 group-hover:text-white' :
                    'bg-accent-100 text-accent-500 group-hover:bg-accent-500 group-hover:text-white'
                  } transition-all duration-300`}>
                    <IconComponent size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600">
                    {achievement.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              מה אומרים עליי?
            </h2>
            <p className="text-xl text-gray-600">
              המלצות מהורים ותלמידים
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card text-center"
              >
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <p className="text-gray-600 font-medium">
                  - {testimonial.author}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
