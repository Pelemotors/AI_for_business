'use client'

import { motion } from 'framer-motion'
import { Monitor, FileText, Key, Target, PenTool, BarChart3, Check, MessageCircle } from 'lucide-react'
import Section from '@/components/Section'
import BenefitCard from '@/components/BenefitCard'
import BeforeAfter from '@/components/BeforeAfter'
import Steps from '@/components/Steps'
import CTAButton from '@/components/CTAButton'
import Testimonials from '@/components/Testimonials'

const handleWhatsApp = (message?: string) => {
  const defaultMessage = 'שלום! ראיתי את האתר שלכם ומעניין אותי ליווי AI לעסק שלי. אשמח לשמוע פרטים נוספים.'
  const finalMessage = message || defaultMessage
  const whatsappLink = `https://wa.me/972504650155?text=${encodeURIComponent(finalMessage)}`
  window.open(whatsappLink, '_blank')
}

const benefits = [
  {
    icon: Monitor,
    title: 'לימוד מעשי בזמן אמת',
    text: 'לא עוד שיעורים תיאורטיים ומצגות משעממות – כאן עובדים ביחד, צעד אחרי צעד. במהלך המפגש נבנה דף מכירה, נייצר פוסטים מקצועיים ונראה איך האוטומציה פועלת בלייב. אתם מתרגלים – ואנחנו מדריכים.'
  },
  {
    icon: FileText,
    title: 'תוצרים מוכנים ביד',
    text: 'בסיום הסדנה אתם יוצאים עם תכלס: דף מכירה חי עם קריאה לפעולה, פוסט מוכן לפרסום ברשתות החברתיות, מייל שיווקי מעוצב לשליחה ללקוחות. הכול נשאר אצלכם, לשכפול ולשימוש חוזר מתי שתרצו.'
  },
  {
    icon: Key,
    title: 'עצמאות אמיתית לטווח ארוך',
    text: 'אנחנו לא משאירים אתכם תלויים באנשי מקצוע. נלמד לעבוד עם הכלים (GPT, DALL·E, Perplexity ועוד) ולנסח פרומפטים יעילים בעברית. כך תדעו להמשיך לייצר תכנים, לנהל קמפיינים ולבנות אוטומציות לבד.'
  }
]

const beforeAfter = {
  before: [
    { text: 'אין דף מכירה ברור וממוקד → לקוחות מתבלבלים ועוברים למתחרים' },
    { text: 'כתיבת פוסטים ומיילים לוקחת שעות → לפעמים זה נגמר בוויתור מוחלט על שיווק' },
    { text: 'תלות מלאה בספקים חיצוניים → כל שינוי קטן עולה זמן וכסף' },
    { text: 'חוסר ידע בכלי AI → תחושה שהטכנולוגיה "גדולה עליי"' }
  ],
  after: [
    { text: 'יש לכם דף מכירה חי עם קריאה לפעולה שמייצרת פניות אמיתיות' },
    { text: 'פוסטים ומיילים שיווקיים מוכנים ביד, ותבניות לשכפול בכל זמן' },
    { text: 'שליטה בכלי ה-AI המובילים → אתם יוצרים לבד, בלי תלות באף אחד' },
    { text: 'חיסכון בעלויות ויכולת לייצר תוכן בקצב שמתאים לכם' }
  ]
}

const steps = [
  {
    icon: Target,
    title: 'אבחון והגדרת מטרות (20 דקות)',
    text: 'נפתח את הסדנה בהיכרות עם העסק שלכם: נזהה את קהל היעד המדויק, ננסח הצעת ערך שתגרום ללקוחות לעצור ולהקשיב, נגדיר קריאה לפעולה (CTA) שתופיע בדף המכירה ותביא פניות איכותיות.'
  },
  {
    icon: PenTool,
    title: 'עבודה מעשית (50 דקות)',
    text: 'בניית דף מכירה – נשתמש ב-GPT ו-Vercel כדי לכתוב כותרות משכנעות, תיאור מוצר חד וברור, המלצות לקוחות ותמונות מעוצבות. כתיבת תכנים לרשתות ומיילים – ניצור פוסט מוכן לפרסום ומייל שיווקי קצר. אוטומציות בסיסיות – נחבר את דף המכירה לכלי אוטומציה.'
  },
  {
    icon: BarChart3,
    title: 'אסטרטגיה והמשך (20 דקות)',
    text: 'נסיים בהסתכלות קדימה: נלמד איך למדוד הצלחה ולזהות מה עובד, נבצע מחקר מתחרים בעזרת Perplexity כדי להבין את השוק, נבנה תוכנית פעולה חודשית – איך לכתוב קופי טוב יותר, ליצור תוכן מגוון ולשמור על עקביות.'
  }
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-400 via-cyan-500 to-teal-500 text-white min-h-screen flex items-center overflow-hidden">
        {/* Professional Abstract Background Graphics */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-white/15 rounded-full blur-xl"></div>
          <div className="absolute bottom-32 left-1/3 w-20 h-20 bg-white/18 rounded-full blur-lg"></div>
          <div className="absolute bottom-20 right-20 w-16 h-16 bg-white/22 rounded-full blur-md"></div>
        </div>
        
        {/* Subtle Data Flow Elements */}
        <div className="absolute inset-0 opacity-8">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </div>

        <div className="container-max relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 items-center">
            {/* Text Content - 60% (6 columns) */}
            <motion.div
              className="lg:col-span-6 text-right"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                סדנת AI לעסקים קטנים – העתיד מתחיל כאן
              </h1>
              
              <p className="text-2xl md:text-3xl mb-8 text-blue-50 leading-relaxed font-light">
                בעזרת כלים חכמים, נבנה ביחד דף מכירה חי, נייצר תכנים שיווקיים ונקים אוטומציות – הכול בתוך 90 דקות של הדרכה מעשית אחת.
              </p>
              
              <div className="bg-gradient-to-r from-yellow-400/20 to-orange-400/20 backdrop-blur-sm rounded-2xl p-8 mb-10 border border-yellow-300/30">
                <p className="text-xl font-semibold text-yellow-100 leading-relaxed">
                  לא תיאוריה, לא מצגות – אלא עבודה אמיתית. יוצאים מהסדנה עם תוצרים מוכנים ביד: דף מכירה, פוסטים שיווקיים ואוטומציות שיעבדו בשבילכם.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-end items-center mb-6">
                <CTAButton href="/contact" className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-bold text-xl px-12 py-5 rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105">
                  להירשם לסדנה הקרובה
                </CTAButton>
                <CTAButton href="/contact" variant="secondary" className="border-2 border-white/80 text-white hover:bg-white hover:text-blue-600 font-semibold text-xl px-10 py-5 rounded-full transition-all duration-300 transform hover:scale-105">
                  לתיאום שיחת ייעוץ חינם
                </CTAButton>
                <button
                  onClick={() => handleWhatsApp('שלום! ראיתי את האתר שלכם ומעניין אותי הסדנה - אשמח לשמוע פרטים נוספים')}
                  className="bg-green-500 hover:bg-green-600 text-white font-bold text-lg px-8 py-4 rounded-full shadow-xl hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp
                </button>
              </div>
              
              <p className="text-lg text-blue-100 text-right font-medium">
                הצטרפו למפגש הקרוב והתחילו לבנות את הנוכחות הדיגיטלית של העסק שלכם עוד היום.
              </p>
            </motion.div>

            {/* Empty space for 40% - Clean minimal design */}
            <motion.div
              className="lg:col-span-4 flex justify-center items-center"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {/* Simple geometric elements */}
              <div className="relative">
                <div className="w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                <div className="absolute top-8 left-8 w-16 h-16 bg-white/15 rounded-full blur-xl"></div>
                <div className="absolute bottom-8 right-8 w-12 h-12 bg-white/20 rounded-full blur-lg"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <Section title="למה דווקא הסדנה שלנו ולא עוד קורס אונליין?" subtitle="שורה תחתונה: במקום לבזבז כסף על פרילנסרים או להיתקע בלי תוצאות – אתם מקבלים שליטה מלאה, ידע וכלים שיעבדו בשבילכם.">
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
      <Section title="תראו את ההבדל – לפני ואחרי סדנת AI" subtitle="">
        <BeforeAfter {...beforeAfter} />
      </Section>

      {/* How it Works Section */}
      <Section title="תוכנית הסדנה – 90 דקות שמביאות תוצאות" subtitle="">
        <Steps steps={steps} />
        <div className="text-center mt-12">
          <CTAButton href="/contact" className="text-lg px-8 py-4">
            להירשם לסדנה הקרובה
          </CTAButton>
        </div>
      </Section>

      {/* Pricing Section */}
      <Section title="בחרו את המסלול הדיגיטלי שיתאים לעסק שלכם" subtitle="בכל חבילה אתם מקבלים אתר מקצועי ותוצרים שיווקיים מוכנים, וגם לומדים לנהל וליצור בעצמכם – כדי שתמשיכו להתפתח עצמאית">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* חבילת בסיס */}
          <motion.div
            className="relative bg-white p-6 rounded-2xl shadow-md border-2 border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="text-center mb-4">
              <div className="text-4xl mb-2">🌐</div>
              <h3 className="text-2xl font-bold mb-2 text-gray-800">חבילת בסיס</h3>
              <div className="text-4xl font-extrabold mb-2 text-gray-800">₪499</div>
              <p className="text-sm text-gray-600">👥 עד 15 משתתפים | 🕒 3 שעות</p>
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <Check className="h-4 w-4 text-green-500 ml-2 mt-1 flex-shrink-0" />
                <span className="text-sm text-gray-700">בנייה של אתר אינטרנט עסקי מקצועי</span>
              </li>
              <li className="flex items-start">
                <Check className="h-4 w-4 text-green-500 ml-2 mt-1 flex-shrink-0" />
                <span className="text-sm text-gray-700">פוסט שיווקי מוכן לרשת חברתית</span>
              </li>
              <li className="flex items-start">
                <Check className="h-4 w-4 text-green-500 ml-2 mt-1 flex-shrink-0" />
                <span className="text-sm text-gray-700">ערכת חומרים ותבניות להמשך</span>
              </li>
            </ul>
            <div className="mb-6 p-3 rounded-lg bg-blue-50">
              <p className="text-sm font-semibold text-gray-800">תוצאה מובטחת:</p>
              <p className="text-xs mt-1 text-gray-600">אתר חי באוויר + הידע להמשיך ולתחזק אותו עצמאית</p>
            </div>
            <CTAButton href="/contact" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105">
              להירשם עכשיו
            </CTAButton>
          </motion.div>

          {/* חבילת מתקדמים */}
          <motion.div
            className="relative bg-white p-6 rounded-2xl shadow-md border-2 border-green-500 transition-all duration-300 hover:shadow-xl hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                כולל CRM בסיסי
              </div>
            </div>
            <div className="text-center mb-4">
              <div className="text-4xl mb-2">🛠️</div>
              <h3 className="text-2xl font-bold mb-2 text-gray-800">חבילת מתקדמים</h3>
              <div className="text-4xl font-extrabold mb-2 text-gray-800">₪799</div>
              <p className="text-sm text-gray-600">👥 עד 12 משתתפים | 🕒 4 שעות</p>
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <Check className="h-4 w-4 text-green-500 ml-2 mt-1 flex-shrink-0" />
                <span className="text-sm text-gray-700">אתר אינטרנט מתקדם עם CRM בסיסי</span>
              </li>
              <li className="flex items-start">
                <Check className="h-4 w-4 text-green-500 ml-2 mt-1 flex-shrink-0" />
                <span className="text-sm text-gray-700">3 פוסטים מוכנים לרשתות החברתיות</span>
              </li>
              <li className="flex items-start">
                <Check className="h-4 w-4 text-green-500 ml-2 mt-1 flex-shrink-0" />
                <span className="text-sm text-gray-700">מייל שיווקי אוטומטי ראשון</span>
              </li>
            </ul>
            <div className="mb-6 p-3 rounded-lg bg-blue-50">
              <p className="text-sm font-semibold text-gray-800">תוצאה מובטחת:</p>
              <p className="text-xs mt-1 text-gray-600">אתר מקצועי + CRM בסיסי אישי – נוכחות דיגיטלית וניהול יעיל</p>
            </div>
            <CTAButton href="/contact" className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105">
              להירשם עכשיו
            </CTAButton>
          </motion.div>

          {/* חבילת פרימיום */}
          <motion.div
            className="relative bg-purple-100 p-6 rounded-2xl shadow-md border-2 border-purple-300 transition-all duration-300 hover:shadow-xl hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <div className="bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                הכי משתלם
              </div>
            </div>
            <div className="text-center mb-4">
              <div className="text-4xl mb-2">🚀</div>
              <h3 className="text-2xl font-bold mb-2 text-gray-800">חבילת פרימיום</h3>
              <div className="text-4xl font-extrabold mb-2 text-gray-800">₪1,200</div>
              <p className="text-sm text-gray-600">👥 עד 10 משתתפים | 🕒 5 שעות</p>
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <Check className="h-4 w-4 text-green-500 ml-2 mt-1 flex-shrink-0" />
                <span className="text-sm text-gray-700">אתר מלא ומורחב + CRM מורחב</span>
              </li>
              <li className="flex items-start">
                <Check className="h-4 w-4 text-green-500 ml-2 mt-1 flex-shrink-0" />
                <span className="text-sm text-gray-700">חבילת תוכן חודשית: 5 פוסטים + 2 מיילים</span>
              </li>
              <li className="flex items-start">
                <Check className="h-4 w-4 text-green-500 ml-2 mt-1 flex-shrink-0" />
                <span className="text-sm text-gray-700">ליווי אישי בצ'אט/וואטסאפ למשך חודש</span>
              </li>
            </ul>
            <div className="mb-6 p-3 rounded-lg bg-purple-200">
              <p className="text-sm font-semibold text-gray-800">תוצאה מובטחת:</p>
              <p className="text-xs mt-1 text-gray-600">מערכת דיגיטלית מלאה – אתר, CRM וכלי תוכן</p>
            </div>
            <CTAButton href="/contact" className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105">
              להירשם עכשיו
            </CTAButton>
          </motion.div>

          {/* VIP */}
          <motion.div
            className="relative bg-gray-900 p-6 rounded-2xl shadow-md border-2 border-yellow-500 transition-all duration-300 hover:shadow-xl hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.03,
              boxShadow: '0 0 30px rgba(241, 196, 15, 0.3)'
            }}
          >
            <div className="text-center mb-4">
              <div className="text-4xl mb-2">👑</div>
              <h3 className="text-2xl font-bold mb-2 text-white">ליווי אישי VIP</h3>
              <div className="text-4xl font-extrabold mb-2 text-white">₪2,500</div>
              <p className="text-sm text-gray-300">👤 אחד-על-אחד | 🕒 3 שעות</p>
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <Check className="h-4 w-4 text-green-500 ml-2 mt-1 flex-shrink-0" />
                <span className="text-sm text-gray-200">אפיון אסטרטגי מלא של העסק</span>
              </li>
              <li className="flex items-start">
                <Check className="h-4 w-4 text-green-500 ml-2 mt-1 flex-shrink-0" />
                <span className="text-sm text-gray-200">אתר מותאם אישית ברמה גבוהה</span>
              </li>
              <li className="flex items-start">
                <Check className="h-4 w-4 text-green-500 ml-2 mt-1 flex-shrink-0" />
                <span className="text-sm text-gray-200">ליווי אונליין למשך 3 חודשים</span>
              </li>
            </ul>
            <div className="mb-6 p-3 rounded-lg bg-gray-800">
              <p className="text-sm font-semibold text-white">תוצאה מובטחת:</p>
              <p className="text-xs mt-1 text-gray-300">אתר מקצועי + CRM מותאם אישית – הכל נבנה ביחד איתך</p>
            </div>
            <div className="space-y-3">
              <CTAButton href="/contact" className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105">
                להירשם עכשיו
              </CTAButton>
              <button
                onClick={() => handleWhatsApp('שלום! מעניין אותי חבילת VIP - אשמח לשמוע פרטים נוספים')}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-4 w-4" />
                שאלה ב-WhatsApp
              </button>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Floating WhatsApp Button */}
      <motion.button
        onClick={() => handleWhatsApp()}
        className="fixed bottom-6 left-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle className="h-6 w-6" />
        <span className="hidden group-hover:block bg-white text-green-600 px-3 py-1 rounded-lg text-sm font-medium whitespace-nowrap">
          שלחו הודעה ב-WhatsApp
        </span>
      </motion.button>
    </>
  )
}