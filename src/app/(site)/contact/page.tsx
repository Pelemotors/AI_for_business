'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MessageCircle } from 'lucide-react'
import Section from '@/components/Section'

const businessTypes = [
  'קוסמטיקאית',
  'פיצרייה',
  'מאמן כושר',
  'יועץ עסקי',
  'חנות בגדים',
  'מסעדה',
  'עורך דין',
  'רואה חשבון',
  'מעצב פנים',
  'אחר'
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    businessType: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const subject = 'פנייה מהאתר – AI לעסקים קטנים'
    const body = `שלום,

שם: ${formData.name}
טלפון: ${formData.phone}
סוג עסק: ${formData.businessType}

אני מעוניין/ת בשיחת אבחון חינם.

תודה!`
    
    const mailtoLink = `mailto:info@ai-small-business.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoLink
  }

  const handleWhatsApp = () => {
    const message = `שלום, ראיתי את האתר שלכם ומעניין אותי ליווי AI לעסק שלי.

שם: ${formData.name}
טלפון: ${formData.phone}
סוג עסק: ${formData.businessType}`
    
    const whatsappLink = `https://wa.me/972501234567?text=${encodeURIComponent(message)}`
    window.open(whatsappLink, '_blank')
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-electricBlue/5 to-deepPurple/5 section-padding">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-ink mb-6">
            צור קשר
          </h1>
          <p className="text-xl text-slate max-w-3xl mx-auto leading-relaxed">
            נבדוק יחד מה הכי נכון לעסק שלך—ללא התחייבות.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <Section title="בואו נתחיל" subtitle="מלאו את הפרטים ונחזור אליכם תוך 24 שעות">
        <div className="max-w-2xl mx-auto">
          <motion.div
            className="bg-white p-8 rounded-xl shadow-lg border border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-ink mb-2">
                  שם מלא *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electricBlue focus:border-transparent"
                  placeholder="השם המלא שלכם"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-ink mb-2">
                  טלפון *
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electricBlue focus:border-transparent"
                  placeholder="050-123-4567"
                />
              </div>

              <div>
                <label htmlFor="businessType" className="block text-sm font-medium text-ink mb-2">
                  סוג העסק *
                </label>
                <select
                  id="businessType"
                  required
                  value={formData.businessType}
                  onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electricBlue focus:border-transparent"
                >
                  <option value="">בחרו סוג עסק</option>
                  {businessTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  className="flex-1 btn-primary text-lg py-4"
                >
                  דברו איתי
                </button>
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="flex-1 bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-4 rounded-lg transition-colors duration-200 text-lg flex items-center justify-center"
                >
                  <MessageCircle className="h-5 w-5 ml-2" />
                  שלחו הודעה עכשיו
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </Section>

      {/* Contact Info Section */}
      <section className="bg-gray-50 section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              className="bg-white p-6 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Mail className="h-8 w-8 text-electricBlue mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-ink mb-2">מייל</h3>
              <p className="text-slate">info@ai-small-business.com</p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Phone className="h-8 w-8 text-electricBlue mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-ink mb-2">טלפון</h3>
              <p className="text-slate">050-123-4567</p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <MessageCircle className="h-8 w-8 text-electricBlue mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-ink mb-2">WhatsApp</h3>
              <p className="text-slate">זמין 24/7</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <Section title="שאלות נפוצות" subtitle="התשובות שחשוב לדעת לפני השיחה">
        <div className="max-w-4xl mx-auto space-y-6">
          <motion.div
            className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-ink mb-2">
              מה קורה בשיחת האבחון?
            </h3>
            <p className="text-slate">
              נבין יחד את העסק שלכם, הקהל, המטרות והאתגרים. נזהה איפה AI יכול לעזור הכי הרבה ונציע פתרון מותאם.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-ink mb-2">
              כמה זמן לוקח השיחה?
            </h3>
            <p className="text-slate">
              השיחה נמשכת 20-30 דקות. מספיק זמן להבין את הצרכים ולהציע פתרון ראשוני.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-ink mb-2">
              האם יש התחייבות?
            </h3>
            <p className="text-slate">
              לא. השיחה חינמית וללא התחייבות. רק אם נחליט יחד שזה מתאים, נמשיך לשלב הבא.
            </p>
          </motion.div>
        </div>
      </Section>
    </>
  )
}
