'use client'

import { TrendingUp, MessageSquare, Users, Settings } from 'lucide-react'
import Section from '@/components/Section'
import ValueCard from '@/components/ValueCard'
import CTAButton from '@/components/CTAButton'

const valueCards = [
  {
    icon: TrendingUp,
    title: 'שיווק דיגיטלי',
    text: 'לוח פוסטים חודשי, קופי לפייסבוק/אינסטגרם, רעיונות ל-Reels, ויז׳ואלים ב־AI.',
    example: 'צור 8 פוסטים לעסק ___, בטון ידידותי, כל פוסט 50–80 תווים + CTA לוואטסאפ.'
  },
  {
    icon: MessageSquare,
    title: 'מכירות',
    text: 'דף נחיתה עם הצעת ערך/יתרונות/חברתיות/CTA, תסריטי וואטסאפ ומיילים ללידים.',
    example: 'כתוב דף מכירה קצר למוצר ___: H1, 3 יתרונות, עדות, CTA.'
  },
  {
    icon: Users,
    title: 'שירות לקוחות',
    text: 'תשובות מהירות לשאלות חוזרות (FAQ), תסריטי וואטסאפ, ניתוב נכון לפתרון.',
    example: 'בנה 10 תשובות קצרות לשאלות נפוצות על ___.'
  },
  {
    icon: Settings,
    title: 'תפעול וניהול',
    text: 'הצעות מחיר, מיילי סיכום, נהלים (SOP) בשפה פשוטה.',
    example: 'סכם מייל לקוח ל־3 נקודות פעולה והצע תשובה מנומסת.'
  }
]

export default function ValuePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-electricBlue/5 to-deepPurple/5 section-padding">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-ink mb-6">
            מה AI עושה לעסק שלי?
          </h1>
          <p className="text-xl text-slate max-w-3xl mx-auto leading-relaxed">
            AI הופך משימות יומיומיות למהירות ויעילות—ללא ידע טכני. הנה ארבעה תחומים קריטיים:
          </p>
        </div>
      </section>

      {/* Value Cards Section */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {valueCards.map((card, index) => (
            <ValueCard
              key={index}
              icon={card.icon}
              title={card.title}
              text={card.text}
              example={card.example}
              index={index}
            />
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <section className="bg-electricBlue text-white section-padding">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold mb-4">
            מוכנים להתחיל?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            בקשו ערכת פרומפטים מותאמת לעסק שלכם
          </p>
          <CTAButton href="/contact" variant="secondary" className="text-lg px-8 py-4">
            קבעו שיחת אבחון חינם
          </CTAButton>
        </div>
      </section>
    </>
  )
}
