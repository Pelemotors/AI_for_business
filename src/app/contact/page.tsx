'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Phone, Mail, MessageCircle, User, Calendar, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    childAge: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // כאן תהיה שליחה ל-Supabase או Google Sheets
      await new Promise(resolve => setTimeout(resolve, 2000)) // סימולציה
      setSubmitStatus('success')
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        childAge: '',
        message: ''
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactMethods = [
    {
      icon: Phone,
      title: 'טלפון',
      description: '050-465-0155',
      link: 'tel:+972504650155',
      color: 'primary'
    },
    {
      icon: Mail,
      title: 'מייל',
      description: 'galsamama@gmail.com',
      link: 'mailto:galsamama@gmail.com',
      color: 'secondary'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'שלחו הודעה',
      link: 'https://wa.me/972504650155?text=שלום, אני מתעניין בחוג AI לנוער',
      color: 'accent'
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
            הצטרפו לקורס!
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            מלאו את הטופס ונחזור אליכם בהקדם עם כל הפרטים
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* טופס הרשמה */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  טופס הרשמה
                </h2>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <p className="text-green-700 font-medium">
                      הטופס נשלח בהצלחה! נחזור אליכם בהקדם.
                    </p>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3"
                  >
                    <AlertCircle className="w-5 h-5 text-red-500" />
                    <p className="text-red-700 font-medium">
                      שגיאה בשליחת הטופס. אנא נסו שוב.
                    </p>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                      שם מלא *
                    </label>
                    <div className="relative">
                      <User className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-base"
                        placeholder="השם המלא שלכם"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      טלפון *
                    </label>
                    <div className="relative">
                      <Phone className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-base"
                        placeholder="050-123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      מייל (אופציונלי)
                    </label>
                    <div className="relative">
                      <Mail className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-base"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="childAge" className="block text-sm font-medium text-gray-700 mb-2">
                      גיל הילד *
                    </label>
                    <div className="relative">
                      <Calendar className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
                      <select
                        id="childAge"
                        name="childAge"
                        value={formData.childAge}
                        onChange={handleInputChange}
                        required
                        className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none"
                      >
                        <option value="">בחרו גיל</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      הערות נוספות
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                        placeholder="כל מידע נוסף שתרצו לשתף..."
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'שולח...' : 'שלח טופס הרשמה'}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* פרטי התקשרות */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  דרכי התקשרות
                </h2>
                <div className="space-y-6">
                  {contactMethods.map((method, index) => {
                    const IconComponent = method.icon
                    return (
                      <motion.a
                        key={method.title}
                        href={method.link}
                        target={method.title === 'WhatsApp' ? '_blank' : undefined}
                        rel={method.title === 'WhatsApp' ? 'noopener noreferrer' : undefined}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className={`block p-6 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                          method.color === 'primary' ? 'border-primary-200 hover:border-primary-500 bg-primary-50' :
                          method.color === 'secondary' ? 'border-secondary-200 hover:border-secondary-500 bg-secondary-50' :
                          'border-accent-200 hover:border-accent-500 bg-accent-50'
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                            method.color === 'primary' ? 'bg-primary-100 text-primary-500' :
                            method.color === 'secondary' ? 'bg-secondary-100 text-secondary-500' :
                            'bg-accent-100 text-accent-500'
                          }`}>
                            <IconComponent size={24} />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900">
                              {method.title}
                            </h3>
                            <p className="text-gray-600">
                              {method.description}
                            </p>
                          </div>
                        </div>
                      </motion.a>
                    )
                  })}
                </div>
              </div>

              {/* מידע נוסף */}
              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  מידע נוסף
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                    <span>שיעור ניסיון חינם</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                    <span>קבוצות קטנות - עד 15 תלמידים</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                    <span>חומרי לימוד מתקדמים</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                    <span>תמיכה אישית לכל תלמיד</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
