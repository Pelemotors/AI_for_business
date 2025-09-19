'use client'

import Section from '@/components/Section'
import CaseCard from '@/components/CaseCard'
import CTAButton from '@/components/CTAButton'

const successCases = [
  {
    title: 'קוסמטיקאית שכונתית',
    result: 'פחות מענה ידני, יותר תורים',
    description: 'לוח פוסטים אוטומטי + וואטסאפ-תסריטים לקביעת תור. הלקוחות יכולים לקבוע תור 24/7, והעסק חוסך 3 שעות ביום על מענה טלפונים.'
  },
  {
    title: 'פיצרייה',
    result: '+18% הזמנות שישי',
    description: 'דף הזמנה קצר + הודעות קופון חכמות. הלקוחות מקבלים הודעות אוטומטיות עם קופונים אישיים, והזמנות שישי עלו משמעותית.'
  },
  {
    title: 'מאמן כושר',
    result: '12 פניות חדשות/חודש',
    description: 'דף נחיתה + ניוזלטר שבועי אוטומטי. המאמן שולח טיפים שבועיים ומקבל פניות קבועות ממי שמעוניין בשירותים.'
  },
  {
    title: 'יועץ עסקי',
    result: '3 לקוחות חדשים בחודש',
    description: 'דף מכירה מקצועי + תסריטי מכירה לוואטסאפ. הלקוחות הפוטנציאליים מקבלים מידע מקצועי ומתקדמים בתהליך המכירה.'
  },
  {
    title: 'חנות בגדים',
    result: '25% יותר מכירות אונליין',
    description: 'קטלוג דיגיטלי + הודעות פרסומיות חכמות. הלקוחות מקבלים עדכונים על פריטים חדשים וקופונים אישיים.'
  },
  {
    title: 'מסעדה',
    result: '40% יותר הזמנות טייק אווי',
    description: 'דף הזמנה מהיר + בוט וואטסאפ לקבלת הזמנות. הלקוחות יכולים להזמין בקלות ולראות את התפריט המעודכן.'
  }
]

export default function CasesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-electricBlue/5 to-deepPurple/5 section-padding">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-ink mb-6">
            סיפורי הצלחה
          </h1>
          <p className="text-xl text-slate max-w-3xl mx-auto leading-relaxed">
            מדברים תוצאות. כמה דוגמאות אמיתיות:
          </p>
        </div>
      </section>

      {/* Success Cases Section */}
      <Section title="התוצאות מדברות" subtitle="מה השתנה בפועל">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {successCases.map((case_, index) => (
            <CaseCard
              key={index}
              title={case_.title}
              result={case_.result}
              description={case_.description}
              index={index}
            />
          ))}
        </div>
      </Section>

      {/* Stats Section */}
      <section className="bg-electricBlue text-white section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100">עסקים שהשתנו</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">85%</div>
              <div className="text-blue-100">חיסכון בזמן</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">3x</div>
              <div className="text-blue-100">יותר פניות</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-mint/10 section-padding">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold text-ink mb-4">
            רוצים להיות הבא בתור?
          </h2>
          <p className="text-xl text-slate mb-8 max-w-2xl mx-auto">
            בואו נבנה יחד את הסיפור שלכם
          </p>
          <CTAButton href="/contact" className="text-lg px-8 py-4">
            קבעו שיחת אבחון חינם
          </CTAButton>
        </div>
      </section>
    </>
  )
}
