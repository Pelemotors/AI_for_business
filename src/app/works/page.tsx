'use client'

import { motion } from 'framer-motion'
import { Image, Code, Music, BookOpen, Star, Quote, ExternalLink } from 'lucide-react'

export default function WorksPage() {
  const studentWorks = [
    {
      title: 'קומיקס דיגיטלי',
      description: 'סיפור הרפתקאות בחלל עם דמויות AI',
      type: 'יצירה חזותית',
      icon: Image,
      color: 'primary',
      author: 'יונתן, כיתה ט',
      image: '/placeholder-comic.jpg'
    },
    {
      title: 'אתר אישי',
      description: 'אתר תדמית עם אנימציות ופונקציונליות',
      type: 'תכנות',
      icon: Code,
      color: 'secondary',
      author: 'מיכל, כיתה י',
      image: '/placeholder-website.jpg'
    },
    {
      title: 'מוזיקה עם AI',
      description: 'מנגינה מקורית שנוצרה עם כלי AI',
      type: 'יצירה קולית',
      icon: Music,
      color: 'accent',
      author: 'רועי, כיתה ח',
      image: '/placeholder-music.jpg'
    },
    {
      title: 'סיפור יצירתי',
      description: 'נובלה קצרה עם דמויות מורכבות',
      type: 'כתיבה יצירתית',
      icon: BookOpen,
      color: 'primary',
      author: 'שרה, כיתה יא',
      image: '/placeholder-story.jpg'
    },
    {
      title: 'אפליקציה פשוטה',
      description: 'משחק פשוט עם JavaScript',
      type: 'תכנות',
      icon: Code,
      color: 'secondary',
      author: 'דוד, כיתה ט',
      image: '/placeholder-app.jpg'
    },
    {
      title: 'פוסטר עתידני',
      description: 'עיצוב גרפי לקורס AI לנוער',
      type: 'עיצוב גרפי',
      icon: Image,
      color: 'accent',
      author: 'נועה, כיתה י',
      image: '/placeholder-poster.jpg'
    }
  ]

  const testimonials = [
    {
      text: "הבן שלי סיכם ספרות לבד עם GPT! הוא כל כך גאה בעצמו",
      author: "אמא של יונתן",
      rating: 5
    },
    {
      text: "הבת שלי בנתה אתר אישי – והיא בכיתה ט׳ בלבד!",
      author: "אבא של מיכל",
      rating: 5
    },
    {
      text: "הקורס פתח לילדים שלי עולם חדש של אפשרויות",
      author: "אמא של רועי ושרה",
      rating: 5
    },
    {
      text: "הם לומדים לחשוב בצורה יצירתית וחדשנית",
      author: "אבא של דוד ונועה",
      rating: 5
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
            תוצרים של תלמידים
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            דוגמאות לעבודות מדהימות שיצרו התלמידים שלנו
          </motion.p>
        </div>
      </section>

      {/* Student Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              יצירות מדהימות
            </h2>
            <p className="text-xl text-gray-600">
              מה התלמידים שלנו יוצרים בקורס
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {studentWorks.map((work, index) => {
              const IconComponent = work.icon
              return (
                <motion.div
                  key={work.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="card group cursor-pointer overflow-hidden"
                >
                  {/* תמונה */}
                  <div className={`aspect-video rounded-lg mb-4 ${
                    work.color === 'primary' ? 'bg-gradient-to-br from-primary-100 to-primary-200' :
                    work.color === 'secondary' ? 'bg-gradient-to-br from-secondary-100 to-secondary-200' :
                    'bg-gradient-to-br from-accent-100 to-accent-200'
                  } flex items-center justify-center relative overflow-hidden`}>
                    <IconComponent size={60} className={
                      work.color === 'primary' ? 'text-primary-400' :
                      work.color === 'secondary' ? 'text-secondary-400' :
                      'text-accent-400'
                    } />
                    <div className="absolute top-2 right-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        work.color === 'primary' ? 'bg-primary-500 text-white' :
                        work.color === 'secondary' ? 'bg-secondary-500 text-white' :
                        'bg-accent-500 text-white'
                      }`}>
                        {work.type}
                      </span>
                    </div>
                  </div>

                  {/* תוכן */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                      {work.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {work.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-500 font-medium">
                        {work.author}
                      </p>
                      <button className="text-primary-500 hover:text-primary-600 transition-colors">
                        <ExternalLink size={16} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
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
              מה אומרים ההורים?
            </h2>
            <p className="text-xl text-gray-600">
              המלצות מהורים מרוצים
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card relative"
              >
                <Quote className="absolute top-4 right-4 w-8 h-8 text-primary-200" />
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic text-lg leading-relaxed">
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

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              מספרים שמדברים
            </h2>
            <p className="text-xl opacity-90">
              התוצאות שלנו מדברות בעד עצמן
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '200+', label: 'תלמידים מרוצים' },
              { number: '95%', label: 'שיעור הצלחה' },
              { number: '50+', label: 'פרויקטים מושלמים' },
              { number: '4.9', label: 'דירוג ממוצע' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-lg opacity-90">
                  {stat.label}
                </div>
              </motion.div>
            ))}
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
              מוכנים ליצור בעצמכם?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              הצטרפו לקורס ותצרו פרויקטים מדהימים כמו התלמידים שלנו
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
