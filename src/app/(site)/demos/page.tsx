'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Section from '@/components/Section'
import DemoBlocks from '@/components/DemoBlocks'
import CTAButton from '@/components/CTAButton'

const businessTypes = [
  'קוסמטיקאית',
  'פיצרייה',
  'מאמן כושר',
  'יועץ עסקי',
  'חנות בגדים',
  'מסעדה'
]

const styles = [
  'ידידותי ומקצועי',
  'חם ואישי',
  'מקצועי ומהימן',
  'יצירתי ומעניין',
  'פשוט וברור'
]

const samplePosts = [
  "🌟 פתיחה חדשה! בואו להכיר את השירותים החדשים שלנו. קביעת תור: 050-123-4567",
  "💡 טיפ יומי: איך לשמור על העור בחורף? התשובה בסטורי שלנו!",
  "🎉 סוף שבוע מיוחד! הנחה של 20% על כל הטיפולים. מוגבל בזמן!",
  "📸 לפני ואחרי מדהים! תראו את התוצאות של הלקוחה שלנו",
  "⏰ זוכרים? יש לנו תורים פנויים השבוע. בואו נקבע!"
]

export default function DemosPage() {
  const [selectedBusiness, setSelectedBusiness] = useState('')
  const [selectedStyle, setSelectedStyle] = useState('')
  const [keywords, setKeywords] = useState('')
  const [generatedPosts, setGeneratedPosts] = useState<string[]>([])

  const generatePosts = () => {
    if (!selectedBusiness || !selectedStyle) {
      alert('אנא בחרו סוג עסק וסגנון')
      return
    }
    setGeneratedPosts(samplePosts)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-electricBlue/5 to-deepPurple/5 section-padding">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-ink mb-6">
            הדגמות חיות
          </h1>
          <p className="text-xl text-slate max-w-3xl mx-auto leading-relaxed">
            כך נראה פיילוט חי שמקימים ביחד בשיחה אחת—ומעלים לאוויר.
          </p>
        </div>
      </section>

      {/* Demo Blocks Section */}
      <Section title="דמו: דף מכירה" subtitle="כך נראה דף מכירה חי שנוצר ב־3 שעות">
        <DemoBlocks />
      </Section>

      {/* Post Generator Demo */}
      <Section title="דמו: מחולל פוסטים" subtitle="כלי ליצירת תוכן מותאם לעסק שלכם">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-white p-8 rounded-xl shadow-lg border border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div>
                <label className="block text-sm font-medium text-ink mb-2">
                  סוג עסק
                </label>
                <select
                  value={selectedBusiness}
                  onChange={(e) => setSelectedBusiness(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electricBlue focus:border-transparent"
                >
                  <option value="">בחרו סוג עסק</option>
                  {businessTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-ink mb-2">
                  סגנון
                </label>
                <select
                  value={selectedStyle}
                  onChange={(e) => setSelectedStyle(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electricBlue focus:border-transparent"
                >
                  <option value="">בחרו סגנון</option>
                  {styles.map((style) => (
                    <option key={style} value={style}>{style}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-ink mb-2">
                  מילות מפתח
                </label>
                <input
                  type="text"
                  value={keywords}
                  onChange={(e) => setKeywords(e.target.value)}
                  placeholder="למשל: הנחה, תור, טיפ"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electricBlue focus:border-transparent"
                />
              </div>
            </div>

            <div className="text-center mb-8">
              <button
                onClick={generatePosts}
                className="btn-primary text-lg px-8 py-4"
              >
                צור דוגמאות
              </button>
            </div>

            {generatedPosts.length > 0 && (
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-xl font-semibold text-ink mb-4">
                  פוסטים שנוצרו עבור {selectedBusiness}:
                </h3>
                {generatedPosts.map((post, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg border-r-4 border-electricBlue">
                    <p className="text-slate">{post}</p>
                  </div>
                ))}
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <p className="text-sm text-blue-800">
                    💡 <strong>הערה:</strong> בסדנה/ליווי נחבר ל־GPT בפועל ונצור תוכן מותאם אישית לעסק שלכם.
                  </p>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </Section>

      {/* CTA Section */}
      <section className="bg-electricBlue text-white section-padding">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold mb-4">
            מוכנים לראות את זה קורה?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            בואו נבנה יחד פיילוט חי לעסק שלכם
          </p>
          <CTAButton href="/contact" variant="secondary" className="text-lg px-8 py-4">
            קבעו שיחת אבחון חינם
          </CTAButton>
        </div>
      </section>
    </>
  )
}
