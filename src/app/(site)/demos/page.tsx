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
  'מסעדה',
  'חשמלאי',
  'נגר'
]

const textTypes = [
  'הודעת וואטסאפ',
  'טקסט לפרסום',
  'הודעה ללקוח',
  'תיאור שירות',
  'הודעת תודה'
]

const sampleTexts = {
  'הודעת וואטסאפ': [
    "שלום! 👋 שמחתי לראות את הפנייה שלכם. איך אני יכול לעזור לכם היום?",
    "היי! תודה על הפנייה. מתי נוח לכם לשוחח על השירות?",
    "שלום! ראיתי שאתם מעוניינים בשירות שלנו. בואו נקבע פגישה!"
  ],
  'טקסט לפרסום': [
    "🎉 הנחה מיוחדת השבוע! 20% הנחה על כל השירותים. מוגבל בזמן!",
    "💡 טיפ מקצועי: איך לחסוך זמן וכסף? התשובה אצלנו!",
    "⭐ לקוחות מרוצים = המלצות חמות. בואו להצטרף למשפחה!"
  ],
  'הודעה ללקוח': [
    "תודה על הבחירה בנו! נשמח לספק לכם שירות מקצועי ואיכותי.",
    "התור שלכם נקבע בהצלחה. נחזור אליכם יום לפני עם תזכורת.",
    "השירות הושלם בהצלחה! נשמח לשמוע את המשוב שלכם."
  ],
  'תיאור שירות': [
    "שירות מקצועי ואיכותי עם ניסיון של שנים. מתחייבים לתוצאות מעולות!",
    "צוות מומחים מקצועי עם ציוד מתקדם. שירות מהיר ואמין.",
    "מחירים הוגנים, שירות מעולה, תוצאות מובטחות. זה מה שאנחנו מציעים."
  ],
  'הודעת תודה': [
    "תודה רבה על האמון! נשמח לשרת אתכם שוב בעתיד.",
    "היה לנו כיף לעבוד איתכם! תודה על ההזדמנות.",
    "תודה על הבחירה בנו! המלצותיכם חשובות לנו מאוד."
  ]
}

export default function DemosPage() {
  const [selectedBusiness, setSelectedBusiness] = useState('')
  const [selectedTextType, setSelectedTextType] = useState('')
  const [customInput, setCustomInput] = useState('')
  const [generatedTexts, setGeneratedTexts] = useState<string[]>([])

  const generateTexts = () => {
    if (!selectedBusiness || !selectedTextType) {
      alert('אנא בחרו סוג עסק וסוג טקסט')
      return
    }
    
    const texts = sampleTexts[selectedTextType as keyof typeof sampleTexts] || []
    setGeneratedTexts(texts)
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

      {/* Text Generator Demo */}
      <Section title="דמו: מחולל טקסטים לעסק" subtitle="כלי ליצירת טקסטים מותאמים לעסק שלכם">
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
                  סוג טקסט
                </label>
                <select
                  value={selectedTextType}
                  onChange={(e) => setSelectedTextType(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electricBlue focus:border-transparent"
                >
                  <option value="">בחרו סוג טקסט</option>
                  {textTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-ink mb-2">
                  הוספה אישית (אופציונלי)
                </label>
                <input
                  type="text"
                  value={customInput}
                  onChange={(e) => setCustomInput(e.target.value)}
                  placeholder="למשל: הנחה 20%, תור חירום"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electricBlue focus:border-transparent"
                />
              </div>
            </div>

            <div className="text-center mb-8">
              <button
                onClick={generateTexts}
                className="btn-primary text-lg px-8 py-4"
              >
                צור דוגמאות
              </button>
            </div>

            {generatedTexts.length > 0 && (
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-xl font-semibold text-ink mb-4">
                  טקסטים שנוצרו עבור {selectedBusiness} - {selectedTextType}:
                </h3>
                {generatedTexts.map((text, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg border-r-4 border-electricBlue">
                    <p className="text-slate">{text}</p>
                    <button 
                      onClick={() => navigator.clipboard.writeText(text)}
                      className="mt-2 text-sm text-electricBlue hover:text-deepPurple"
                    >
                      📋 העתק למועדפים
                    </button>
                  </div>
                ))}
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <p className="text-sm text-blue-800">
                    💡 <strong>הערה:</strong> בסדנה/ליווי נחבר ל־GPT בפועל ונצור טקסטים מותאמים אישית לעסק שלכם עם פרטים ספציפיים.
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