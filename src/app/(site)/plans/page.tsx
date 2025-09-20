'use client'

import Section from '@/components/Section'
import PricingTable from '@/components/PricingTable'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

const handleWhatsApp = (message?: string) => {
  const defaultMessage = 'שלום! ראיתי את האתר שלכם ומעניין אותי ליווי AI לעסק שלי. אשמח לשמוע פרטים נוספים.'
  const finalMessage = message || defaultMessage
  const whatsappLink = `https://wa.me/972504650155?text=${encodeURIComponent(finalMessage)}`
  window.open(whatsappLink, '_blank')
}

const pricingPlans = [
  {
    name: 'חבילת בסיס',
    price: '₪499',
    participants: '👥 עד 15 משתתפים',
    duration: '🕒 3 שעות',
    icon: '🌐',
    features: [
      'בנייה של אתר אינטרנט עסקי מקצועי',
      'עמוד בית, עמוד שירותים/מוצרים',
      'טפסי יצירת קשר ותוכן שיווקי מותאם',
      'פוסט שיווקי מוכן לרשת חברתית',
      'ערכת חומרים ותבניות להמשך',
      'הדרכה פרקטית: איך להוסיף עמודים ותוכן בעצמכם'
    ],
    result: 'אתר חי באוויר + הידע להמשיך ולתחזק אותו עצמאית',
    bgColor: 'bg-white',
    borderColor: 'border-gray-200',
    textColor: 'text-gray-800',
    buttonColor: 'bg-blue-500 hover:bg-blue-600'
  },
  {
    name: 'חבילת מתקדמים',
    price: '₪799',
    participants: '👥 עד 12 משתתפים',
    duration: '🕒 4 שעות',
    icon: '🛠️',
    features: [
      'אתר אינטרנט מתקדם: עמודי משנה, גלריה, בלוג בסיסי',
      'מודול CRM בסיסי לניהול לידים ולקוחות',
      '3 פוסטים מוכנים לרשתות החברתיות',
      'מייל שיווקי אוטומטי ראשון ללקוחות חדשים',
      'גישה להקלטות ולחומרים למשך חודשיים',
      'הדרכה פרקטית: איך להרחיב את ה־CRM ולהתאים אותו'
    ],
    result: 'אתר מקצועי + CRM בסיסי אישי – שילוב שמעניק נוכחות דיגיטלית וניהול יעיל',
    badge: 'כולל CRM בסיסי',
    bgColor: 'bg-white',
    borderColor: 'border-green-500',
    textColor: 'text-gray-800',
    buttonColor: 'bg-green-500 hover:bg-green-600'
  },
  {
    name: 'חבילת פרימיום',
    price: '₪1,200',
    participants: '👥 עד 10 משתתפים',
    duration: '🕒 5 שעות',
    icon: '🚀',
    features: [
      'אתר אינטרנט מלא ומורחב: בלוג פעיל, עמודי נחיתה',
      'מודול CRM מורחב + מודול נוסף לבחירה',
      'חבילת תוכן חודשית: 5 פוסטים מעוצבים + 2 מיילים',
      'הדרכה לניהול ותכנון תהליכים עסקיים',
      'ליווי אישי בצ\'אט/וואטסאפ למשך חודש',
      'אוטומציות מתקדמות וחיבורי מערכות'
    ],
    result: 'מערכת דיגיטלית מלאה – אתר, CRM וכלי תוכן – יחד עם היכולת לנהל תהליכים עסקיים חכמים',
    badge: 'הכי משתלם',
    bgColor: 'bg-purple-100',
    borderColor: 'border-purple-300',
    textColor: 'text-gray-800',
    buttonColor: 'bg-purple-500 hover:bg-purple-600'
  },
  {
    name: 'ליווי אישי VIP',
    price: '₪2,500',
    participants: '👤 אחד-על-אחד',
    duration: '🕒 3 שעות',
    icon: '👑',
    features: [
      'אפיון אסטרטגי מלא של העסק',
      'בניית אתר אינטרנט מותאם אישית ברמה גבוהה',
      'מודול CRM מותאם אישית + מודול נוסף לפי הצורך',
      'חבילת תוכן אישית – פוסטים, מיילים ודפי נחיתה',
      'ליווי אונליין (צ\'אט/וואטסאפ) למשך 3 חודשים',
      'למידה יד ביד: איך לעבוד עם האתר וה־CRM'
    ],
    result: 'אתר מקצועי + CRM מותאם אישית + כלים שיווקיים – הכל נבנה ביחד איתך, כך שתהיה עצמאי לחלוטין',
    bgColor: 'bg-gray-900',
    borderColor: 'border-yellow-500',
    textColor: 'text-white',
    buttonColor: 'bg-yellow-500 hover:bg-yellow-600'
  }
]

export default function PlansPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-electricBlue/5 to-deepPurple/5 section-padding">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-ink mb-6">
            בחרו את המסלול הדיגיטלי שיתאים לעסק שלכם
          </h1>
          <p className="text-xl text-slate max-w-4xl mx-auto leading-relaxed">
            בכל חבילה אתם מקבלים אתר מקצועי ותוצרים שיווקיים מוכנים, וגם לומדים לנהל וליצור בעצמכם – כדי שתמשיכו להתפתח עצמאית.
          </p>
        </div>
      </section>

      {/* Pricing Table Section */}
      <Section title="" subtitle="">
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
              תשלום מאובטח
            </h2>
            <p className="text-lg text-slate leading-relaxed">
              לכל חבילה ניתן להירשם דרך טופס ההרשמה, והתשלום מאובטח. אתם מקבלים את כל התוצרים והגישה לחומרים מיד עם ההרשמה.
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

      {/* Floating WhatsApp Button */}
      <motion.button
        onClick={() => handleWhatsApp('שלום! ראיתי את החבילות שלכם ומעניין אותי ליווי AI לעסק שלי - איזו חבילה תתאים לי?')}
        className="fixed bottom-6 left-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle className="h-6 w-6" />
        <span className="hidden group-hover:block bg-white text-green-600 px-3 py-1 rounded-lg text-sm font-medium whitespace-nowrap">
          שאלה על החבילות
        </span>
      </motion.button>
    </>
  )
}
