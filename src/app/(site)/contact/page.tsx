'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MessageCircle, Send, Facebook, Instagram, Linkedin, Check } from 'lucide-react'
import emailjs from '@emailjs/browser'
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
    email: '',
    phone: '',
    message: '',
    businessType: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // EmailJS configuration - you'll need to replace these with your actual values
      const serviceId = 'service_your_service_id' // Replace with your EmailJS service ID
      const templateId = 'template_your_template_id' // Replace with your EmailJS template ID
      const publicKey = 'your_public_key' // Replace with your EmailJS public key
      
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        business_type: formData.businessType,
        message: formData.message,
        to_email: 'galsamama@gmail.com'
      }
      
      // Try to send email via EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey)
      
      setIsSubmitting(false)
      setShowSuccess(true)
    } catch (error) {
      console.error('Error sending email:', error)
      
      // Fallback to mailto if EmailJS fails
      const subject = 'פנייה מהאתר – AI לעסקים קטנים'
      const body = `שלום,

שם: ${formData.name}
מייל: ${formData.email}
טלפון: ${formData.phone}
סוג עסק: ${formData.businessType}
הודעה: ${formData.message}

תודה!`
      
      const mailtoLink = `mailto:galsamama@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      window.location.href = mailtoLink
      
      setIsSubmitting(false)
      setShowSuccess(true)
    }
  }

  const handleWhatsApp = () => {
    const message = `שלום, ראיתי את האתר שלכם ומעניין אותי ליווי AI לעסק שלי.

שם: ${formData.name}
מייל: ${formData.email}
טלפון: ${formData.phone}
סוג עסק: ${formData.businessType}`
    
    const whatsappLink = `https://wa.me/972504650155?text=${encodeURIComponent(message)}`
    window.open(whatsappLink, '_blank')
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-electricBlue/5 to-deepPurple/5 section-padding">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-ink mb-6">
            📞 בואו נדבר – נשמח לשמוע מכם!
          </h1>
          <p className="text-xl text-slate max-w-3xl mx-auto leading-relaxed">
            יש לכם שאלה על הסדנה, על בניית האתר או על CRM? מוזמנים לפנות בכל דרך שנוחה לכם – אנחנו כאן כדי לעזור.
          </p>
        </div>
      </section>

      {/* Contact Section - 2 Columns */}
      <section className="bg-gray-50 py-16">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Info */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
                <h3 className="text-2xl font-bold text-ink mb-6">פרטי התקשרות</h3>
                
                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-electricBlue/10 rounded-lg">
                      <Phone className="h-6 w-6 text-electricBlue" />
                    </div>
                    <div>
                      <p className="font-medium text-ink">טלפון</p>
                      <a href="tel:+972504650155" className="text-gray-600 hover:text-electricBlue transition-colors">
                        050-4650155
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-electricBlue/10 rounded-lg">
                      <Mail className="h-6 w-6 text-electricBlue" />
                    </div>
                    <div>
                      <p className="font-medium text-ink">דוא״ל</p>
                      <a href="mailto:galsamama@gmail.com" className="text-gray-600 hover:text-electricBlue transition-colors">
                        galsamama@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-green-100 rounded-lg">
                      <MessageCircle className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-ink">WhatsApp</p>
                      <button
                        onClick={handleWhatsApp}
                        className="text-gray-600 hover:text-green-600 transition-colors"
                      >
                        לחיצה על אייקון הירוק תפתח צ'אט מיידי
                      </button>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="font-medium text-ink mb-4">רשתות חברתיות</h4>
                  <div className="flex gap-3">
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors"
                    >
                      <Facebook className="h-6 w-6 text-blue-600" />
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-pink-100 rounded-lg hover:bg-pink-200 transition-colors"
                    >
                      <Instagram className="h-6 w-6 text-pink-600" />
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors"
                    >
                      <Linkedin className="h-6 w-6 text-blue-700" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
                <h3 className="text-2xl font-bold text-ink mb-6">שלחו הודעה</h3>
                
                {!showSuccess ? (
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
                        className="w-full h-12 px-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electricBlue focus:border-transparent"
                        placeholder="השם המלא שלכם"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-ink mb-2">
                        כתובת מייל *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full h-12 px-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electricBlue focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-ink mb-2">
                        מספר טלפון
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full h-12 px-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electricBlue focus:border-transparent"
                        placeholder="050-123-4567"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-ink mb-2">
                        הודעה חופשית
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electricBlue focus:border-transparent resize-none"
                        placeholder="ספרו לנו על העסק שלכם ומה מעניין אתכם..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-12 bg-electricBlue hover:bg-electricBlue/90 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                          שולח...
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5" />
                          📩 שלחו הודעה
                        </>
                      )}
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-8">
                    <div className="text-6xl mb-4">✅</div>
                    <h4 className="text-xl font-bold text-ink mb-2">תודה! נחזור אליכם בהקדם</h4>
                    <p className="text-gray-600 mb-4">
                      נחזור אליכם עד 24 שעות מרגע הפנייה (ובדרך כלל הרבה לפני).
                    </p>
                    <button
                      onClick={() => {
                        setShowSuccess(false)
                        setFormData({ name: '', email: '', phone: '', message: '', businessType: '' })
                      }}
                      className="text-electricBlue hover:text-electricBlue/80 font-medium"
                    >
                      שלחו הודעה נוספת
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </>
  )
}
