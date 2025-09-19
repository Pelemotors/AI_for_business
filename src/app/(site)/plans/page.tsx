'use client'

import Section from '@/components/Section'
import PricingTable from '@/components/PricingTable'
import { motion } from 'framer-motion'

const pricingPlans = [
  {
    name: 'Starter – "התחל לרוץ"',
    description: 'סשן מרתון (3 ש׳) להקמת נכס ראשון',
    features: [
      'דף מכירה חי (Next.js + Vercel)',
      'טופס לידים (mailto/wa.me)',
      '10 פוסטים מוכנים',
      '5 תבניות מייל/וואטסאפ'
    ],
    ctaText: 'קבעו שיחת אבחון',
    ctaHref: '/contact'
  },
  {
    name: 'Pro – "הטמעה חכמה"',
    description: '4 שבועות - אתר קטן + תהליכי תוכן',
    features: [
      'הרחבת האתר + אנליטיקות',
      '2 דמואים ויזואליים (Reels קצרים)',
      'תסריטי מכירה ו־FAQ מותאמים',
      'ליווי שבועי + תמיכה'
    ],
    ctaText: 'דברו איתנו על התאמה',
    ctaHref: '/contact',
    isPopular: true
  },
  {
    name: 'Scale – "Tailor-Made"',
    description: 'פרויקט מותאם עם יעדים ו־KPIs',
    features: [
      'חיבורי CRM/אוטומציות',
      'דוחות ביצועים בסיסיים',
      'תכנון קמפיינים חודשיים',
      'ליווי מלא + אופטימיזציה'
    ],
    ctaText: 'בקשת הצעת מחיר',
    ctaHref: '/contact'
  }
]

export default function PlansPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-electricBlue/5 to-deepPurple/5 section-padding">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-ink mb-6">
            חבילות ומחירון
          </h1>
          <p className="text-xl text-slate max-w-3xl mx-auto leading-relaxed">
            בוחרים איפה אתם נמצאים—וממריאים.
          </p>
        </div>
      </section>

      {/* Pricing Table Section */}
      <Section title="בחרו את החבילה המתאימה" subtitle="כל חבילה מותאמת לשלב שלכם">
        <PricingTable plans={pricingPlans} />
      </Section>

      {/* Guarantee Section */}
      <motion.section
        className="bg-mint/10 section-padding"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container-max text-center">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-mint/20 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-ink mb-4">
              הבטחת תוצאה
            </h2>
            <p className="text-lg text-slate leading-relaxed">
              אם אחרי 30 יום לא חסכת לפחות 2 שעות עבודה בשבוע—נקדם אותך לשדרוג ללא עלות נוספת.
            </p>
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <Section title="שאלות נפוצות" subtitle="התשובות שחשוב לדעת">
        <div className="max-w-4xl mx-auto space-y-6">
          <motion.div
            className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-ink mb-2">
              כמה זמן לוקח לראות תוצאות?
            </h3>
            <p className="text-slate">
              בחבילת Starter תראו דף מכירה חי כבר בסוף הסשן הראשון. בחבילות Pro ו-Scale, תוצאות משמעותיות תוך 2-4 שבועות.
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
              מה אם אין לי ידע טכני?
            </h3>
            <p className="text-slate">
              זה בדיוק המטרה! אנחנו עושים הכל בשבילכם. אתם רק מספקים את המידע על העסק, ואנחנו בונים ומטמיעים.
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
              מה קורה עם הקוד והאתר?
            </h3>
            <p className="text-slate">
              הקוד בבעלותכם המלאה. הוא מאוחסן ב-GitHub שלכם ומועלה ל-Vercel בחינם. אתם שולטים בכל דבר.
            </p>
          </motion.div>
        </div>
      </Section>
    </>
  )
}
