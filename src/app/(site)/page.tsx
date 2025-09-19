'use client'

import { motion } from 'framer-motion'
import { Clock, TrendingUp, Wallet } from 'lucide-react'
import Section from '@/components/Section'
import BenefitCard from '@/components/BenefitCard'
import BeforeAfter from '@/components/BeforeAfter'
import Steps from '@/components/Steps'
import CTAButton from '@/components/CTAButton'

const benefits = [
  {
    icon: Clock,
    title: 'חוסכים זמן',
    text: 'מיילים, פוסטים והצעות מחיר—נכתבים ב־GPT לפי העסק שלך.'
  },
  {
    icon: TrendingUp,
    title: 'יותר פניות',
    text: 'דף מכירה חד עם CTA ברור ווואטסאפ זמין בכל רגע.'
  },
  {
    icon: Wallet,
    title: 'ללא עלויות פלטפורמה',
    text: 'GitHub + Vercel = פריסה חינמית. שליטה מלאה בקוד.'
  }
]

const beforeAfter = {
  before: [
    { text: '6 שעות בשבוע על תפעול ידני' },
    { text: 'פוסטים לא עקביים' },
    { text: 'אין דף מכירה קוהרנטי' }
  ],
  after: [
    { text: '90 דק׳ סשן הקמה' },
    { text: 'לוח פוסטים + תסריטים מוכנים' },
    { text: 'דף מכירה חי + CTA לוואטסאפ' }
  ]
}

const steps = [
  {
    icon: Clock,
    title: 'אבחון',
    text: '20 דקות להבין את העסק, קהל, הצעת ערך ו־CTA.'
  },
  {
    icon: TrendingUp,
    title: 'פיילוט חי',
    text: 'מקימים דף/בוט/תוכן בלייב בעזרת GPT+Cursor ומעלים ל־Vercel.'
  },
  {
    icon: Wallet,
    title: 'מדידה ושיפור',
    text: 'בודקים פניות, מחדדים קופי, ומרחיבים לפי צורך.'
  }
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-electricBlue via-deepPurple to-ink text-white section-padding">
        <div className="container-max">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              AI לעסק קטן—אתר, תוכן ואוטומציות ביום אחד
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              עם GPT + Cursor + GitHub + Vercel: מקימים דף מכירה חי, מייצרים תכנים, ומחברים טופס לידים—בזמן שיחה אחת.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <CTAButton href="/contact" className="text-lg px-8 py-4">
                קבעו שיחת אבחון חינם
              </CTAButton>
              <CTAButton href="/demos" variant="secondary" className="text-lg px-8 py-4">
                ראו הדגמה: אתר חי ב־3 שעות
              </CTAButton>
            </div>
            <p className="text-sm text-blue-200 mt-4">
              בלי עלויות פלטפורמה מיותרות. קוד בבעלותך. פריסה חינמית.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <Section title="3 יתרונות" subtitle="מה שמשנה באמת">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              text={benefit.text}
              index={index}
            />
          ))}
        </div>
      </Section>

      {/* Before/After Section */}
      <Section title="לפני ואחרי" subtitle="השינוי שאתם רואים מיד">
        <BeforeAfter {...beforeAfter} />
      </Section>

      {/* How it Works Section */}
      <Section title="איך זה עובד" subtitle="3 צעדים פשוטים לתוצאה">
        <Steps steps={steps} />
        <div className="text-center mt-12">
          <CTAButton href="/contact" className="text-lg px-8 py-4">
            קבעו שיחת אבחון חינם
          </CTAButton>
        </div>
      </Section>
    </>
  )
}
