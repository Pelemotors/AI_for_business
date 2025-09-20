'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Plus, Minus, HelpCircle } from 'lucide-react'

const faqData = [
  {
    id: 1,
    question: "למי מתאימה הסדנה?",
    answer: "הסדנה מתאימה לכל בעל/ת עסק קטן, יזם או עצמאי שרוצה להקים אתר מקצועי, לנהל לקוחות עם CRM בסיסי, וללמוד לעבוד עם כלי AI ליצירת תוכן ושיווק – בלי ידע קודם בתכנות."
  },
  {
    id: 2,
    question: "האם צריך להביא ציוד מיוחד?",
    answer: "רצוי להגיע עם מחשב נייד וחשבון Gmail פעיל. אם אין – ניתן להדגים על מסך משותף, ובחלק מהמקרים לספק מחשב חלופי."
  },
  {
    id: 3,
    question: "יש לי קושי באנגלית – האם אצליח להשתתף?",
    answer: "כן. נלמד לעבוד עם פרומפטים בעברית, ותקבלו הדרכה איך לתרגם תוצאות או ניסוחים במקרה הצורך. אין צורך לדעת אנגלית שוטפת."
  },
  {
    id: 4,
    question: "האם אקבל תוצרים בסוף הסדנה?",
    answer: "בוודאי. כל משתתף יוצא עם אתר אינטרנט מקצועי באוויר, פוסטים שיווקיים מוכנים ותבניות עבודה. בנוסף – תלמדו לייצר תוצרים חדשים בעצמכם."
  },
  {
    id: 5,
    question: "מה קורה אחרי הסדנה?",
    answer: "תקבלו גישה להקלטות (לפי החבילה), תבניות שימוש חוזר וליווי אונליין בהתאם לחבילה שבחרתם. המטרה – שתמשיכו לעבוד עצמאית בלי תלות בנו."
  },
  {
    id: 6,
    question: "כמה זה שונה מקורס אונליין רגיל?",
    answer: "הסדנה שונה לגמרי: אנחנו **בונים יחד בזמן אמת** – אתר, תכנים וכלים לניהול. אתם לא רק מקבלים ידע תיאורטי, אלא יוצאים עם נכסים דיגיטליים ביד."
  },
  {
    id: 7,
    question: "מה אם אני לא מבין בטכנולוגיה?",
    answer: "אין בעיה. הכל מוסבר בגובה העיניים, עם דוגמאות פשוטות. בסוף הסדנה תדעו לנהל את האתר שלכם, להוסיף תוכן ולהשתמש בכלים שיישארו אצלכם לתמיד."
  },
  {
    id: 8,
    question: "האם האתר נשאר שלי?",
    answer: "כן! האתר נבנה על דומיין ואחסון שמוגדרים על שמכם. כל הזכויות והתכנים שייכים לכם במלואם."
  },
  {
    id: 9,
    question: "האם אפשר לשנות או להרחיב את האתר בעתיד?",
    answer: "בהחלט. תלמדו איך להוסיף עמודים, מוצרים ותוכן חדש. חבילות מתקדמות כוללות גם בסיס ל־CRM שתוכלו לפתח בהמשך לבד."
  },
  {
    id: 10,
    question: "מה ההבדל בין CRM בסיסי ל־CRM מורחב?",
    answer: "CRM בסיסי מאפשר לנהל לידים, לקוחות ומשימות פשוטות. CRM מורחב כולל גם ניהול מלאי, מערכת תורים, אזור חברים או כל מודול עסקי נוסף שתרצו."
  },
  {
    id: 11,
    question: "כמה זמן לוקח להעלות את האתר לאוויר?",
    answer: "במהלך הסדנה האתר נבנה ומופעל בזמן אמת. כבר בסיום המפגש יש לכם אתר חי שניתן לשתף עם לקוחות."
  },
  {
    id: 12,
    question: "האם אפשר לקבל הדרכה אישית במקום קבוצה?",
    answer: "כן. חבילת VIP היא אחד־על־אחד – 3 שעות ממוקדות עם בניית אתר, CRM ותוכן אישי, יחד עם ליווי אונליין ל־3 חודשים."
  }
]

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([1]) // השאלה הראשונה פתוחה כברירת מחדל
  const [searchQuery, setSearchQuery] = useState('')

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  const filteredFAQs = faqData.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const highlightText = (text: string, query: string) => {
    if (!query) return text
    
    const regex = new RegExp(`(${query})`, 'gi')
    const parts = text.split(regex)
    
    return parts.map((part, index) => 
      regex.test(part) ? (
        <mark key={index} className="bg-yellow-200 px-1 rounded">
          {part}
        </mark>
      ) : part
    )
  }

  return (
    <section className="bg-gray-50 py-16">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
            שאלות נפוצות
          </h2>
          <p className="text-lg text-slate max-w-2xl mx-auto">
            כל השאלות שחשוב לכם לדעת לפני שמתחילים את המסע הדיגיטלי שלכם
          </p>
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="חפשו שאלה..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electricBlue focus:border-transparent"
            />
          </div>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {filteredFAQs.length === 0 ? (
              <div className="text-center py-12">
                <HelpCircle className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">לא נמצאו שאלות מתאימות לחיפוש שלכם</p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-electricBlue hover:text-electricBlue/80 font-medium mt-2"
                >
                  נקה חיפוש
                </button>
              </div>
            ) : (
              filteredFAQs.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full px-6 py-4 text-right hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <HelpCircle className="h-5 w-5 text-electricBlue flex-shrink-0" />
                      <span className="text-lg font-bold text-ink">
                        {highlightText(faq.question, searchQuery)}
                      </span>
                    </div>
                    <div className="flex-shrink-0">
                      {openItems.includes(faq.id) ? (
                        <Minus className="h-5 w-5 text-gray-500" />
                      ) : (
                        <Plus className="h-5 w-5 text-gray-500" />
                      )}
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {openItems.includes(faq.id) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-4 border-t border-gray-100">
                          <div className="pt-4">
                            <p className="text-gray-700 leading-relaxed">
                              {highlightText(faq.answer, searchQuery)}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))
            )}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            עדיין יש שאלות? אנחנו כאן לעזור!
          </p>
          <motion.a
            href="/contact"
            className="inline-flex items-center gap-2 bg-electricBlue hover:bg-electricBlue/90 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            צרו קשר
          </motion.a>
        </div>
      </div>
    </section>
  )
}
