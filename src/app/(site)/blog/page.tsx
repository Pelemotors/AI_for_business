'use client'

import { motion } from 'framer-motion'
import Section from '@/components/Section'
import CTAButton from '@/components/CTAButton'
import { useState } from 'react'
import { Search, Copy, Check, ArrowRight, Mail, Download, Bell } from 'lucide-react'
import { articles } from '@/lib/articles'

const tips = [
  {
    id: 1,
    title: "פרומפט מומלץ לפוסטים שיווקיים",
    content: "כתוב פוסט שיווקי קצר ומושך למוצר/שירות [שם המוצר]. הפוסט צריך לכלול: בעיה שהלקוח חווה, פתרון שמציע המוצר, תועלת ברורה, קריאה לפעולה. כתוב בעברית, טון ידידותי ומקצועי.",
    category: "פרומפטים"
  },
  {
    id: 2,
    title: "איך ליצור תמונות AI מקצועיות",
    content: "השתמש בתיאורים מפורטים: 'תמונה מקצועית של [מוצר] על רקע לבן נקי, תאורה רכה, סגנון מינימליסטי, איכות גבוהה, ללא טקסט'. זה ייתן לך תמונות שנראות מקצועיות יותר.",
    category: "תוכן חזותי"
  },
  {
    id: 3,
    title: "טיפ לניהול לידים אוטומטי",
    content: "הגדר אוטומציה פשוטה: ליד חדש נכנס → נשלח מייל תודה → נוסף לטבלת מעקב → תזכורת לחזור אליו תוך 24 שעות. זה יחסוך לך שעות ויעלה את שיעור הסגירה.",
    category: "אוטומציה"
  },
  {
    id: 4,
    title: "איך לחקור מתחרים עם AI",
    content: "שאל את ChatGPT: 'מה הסגנון השיווקי של [שם מתחרה]? איך הם מציגים את המוצרים שלהם? מה ההבדל ביניהם לבין מתחרים אחרים?' זה יעזור לך להבין איך להבדיל את עצמך.",
    category: "מחקר שוק"
  },
  {
    id: 5,
    title: "פרומפט לכתיבת מיילים שיווקיים",
    content: "כתוב מייל שיווקי ללקוחות קיימים שמציג מוצר חדש [שם המוצר]. המייל צריך להיות אישי, להזכיר את ההיכרות הקודמת, להציג תועלת ברורה ולכלול קריאה לפעולה פשוטה.",
    category: "פרומפטים"
  },
  {
    id: 6,
    title: "איך למדוד הצלחה של קמפיינים",
    content: "עקוב אחר 3 מדדים עיקריים: עלות לליד, שיעור המרה ללקוח, זמן החזר השקעה. הגדר דוח שבועי אוטומטי עם AI שיציג לך את הנתונים בצורה פשוטה.",
    category: "אנליטיקה"
  }
]

const tools = [
  {
    name: "GPT",
    description: "לכתיבה שיווקית ותכנים מקצועיים",
    pros: ["כתיבה בעברית מצוינת", "הבנה עסקית טובה", "מהיר ויעיל"],
    cons: ["דורש ניסוח פרומפטים מדויק", "עלול להמציא פרטים"],
    useCase: "כתיבת פוסטים, מיילים, תיאורי מוצרים וקופי שיווקי",
    icon: "🤖"
  },
  {
    name: "Perplexity",
    description: "למחקר מתחרים מהיר",
    pros: ["מקורות אמינים", "מידע עדכני", "חיפוש ממוקד"],
    cons: ["מוגבל בעברית", "דורש שאלות ספציפיות"],
    useCase: "מחקר שוק, ניתוח מתחרים, בדיקת מגמות",
    icon: "🔍"
  },
  {
    name: "DALL·E",
    description: "ליצירת תמונות מרהיבות",
    pros: ["תמונות ייחודיות", "מהיר וזול", "איכות גבוהה"],
    cons: ["דורש תיאורים מפורטים", "לא תמיד מדויק לסגנון"],
    useCase: "תמונות למוצרים, פוסטים, באנרים ואתר",
    icon: "🎨"
  },
  {
    name: "Zapier / Make",
    description: "לחיבור בין מערכות והקמת אוטומציות",
    pros: ["חיבורים רבים", "אוטומציות חזקות", "קל לשימוש"],
    cons: ["עלויות חודשיות", "דורש הבנה טכנית בסיסית"],
    useCase: "אוטומציות עסקיות, ניהול לידים, חיבור מערכות",
    icon: "⚡"
  }
]

export default function BlogPage() {
  const [activeTab, setActiveTab] = useState('articles')
  const [copiedTip, setCopiedTip] = useState<number | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterName, setNewsletterName] = useState('')
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false)

  const copyToClipboard = (text: string, tipId: number) => {
    navigator.clipboard.writeText(text)
    setCopiedTip(tipId)
    setTimeout(() => setCopiedTip(null), 2000)
  }

  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.content.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newsletterEmail && newsletterName) {
      setNewsletterSubmitted(true)
      // כאן תוכל להוסיף לוגיקה לשליחת המייל
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-electricBlue/5 to-deepPurple/5 section-padding">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-ink mb-6">
            בלוג ומאמרים
          </h1>
          <p className="text-xl text-slate max-w-4xl mx-auto leading-relaxed">
            מדריכים מעשיים, טיפים שימושיים והמלצות על כלי AI שיעזרו לכם להפוך את העסק שלכם למקצועי יותר
          </p>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-white py-8">
        <div className="container-max">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {[
              { id: 'articles', label: '📚 מאמרים', count: articles.length },
              { id: 'tips', label: '💡 טיפים', count: tips.length },
              { id: 'tools', label: '🛠️ כלים', count: tools.length },
              { id: 'newsletter', label: '📧 ניוזלטר', count: null }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-electricBlue text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tab.label}
                {tab.count && (
                  <span className="ml-2 px-2 py-1 bg-white/20 rounded-full text-sm">
                    {tab.count}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Tab */}
      {activeTab === 'articles' && (
        <Section title="מדור מאמרים" subtitle="מאמרים מעמיקים שמדברים בגובה העיניים על תפקיד ה-AI בניהול ושיווק עסקים קטנים">
          {/* Search */}
          <div className="mb-8">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="חפשו מאמר..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electricBlue focus:border-transparent"
              />
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredArticles.map((article, index) => (
              <motion.article
                key={article.id}
                className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{article.image}</span>
                    <div>
                      <span className="inline-block bg-electricBlue/10 text-electricBlue px-3 py-1 rounded-full text-sm font-medium">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-ink mb-3 leading-tight">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      מאמר {article.id} מתוך {articles.length}
                    </span>
                    <CTAButton href={`/blog/${article.id}`} className="text-electricBlue hover:text-electricBlue/80">
                      קראו עוד <ArrowRight className="h-4 w-4 ml-1" />
                    </CTAButton>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </Section>
      )}

      {/* Tips Tab */}
      {activeTab === 'tips' && (
        <Section title="טיפים שימושיים" subtitle="קטעים קצרים ופרקטיים, שכל אחד מהם נותן לכם כלי ביד">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tips.map((tip, index) => (
              <motion.div
                key={tip.id}
                className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="inline-block bg-mint/10 text-mint px-3 py-1 rounded-full text-sm font-medium">
                    {tip.category}
                  </span>
                  <button
                    onClick={() => copyToClipboard(tip.content, tip.id)}
                    className="p-2 text-gray-400 hover:text-electricBlue transition-colors"
                  >
                    {copiedTip === tip.id ? (
                      <Check className="h-4 w-4 text-green-500" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                </div>
                
                <h3 className="text-lg font-bold text-ink mb-3">
                  {tip.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {tip.content}
                </p>
                
                {copiedTip === tip.id && (
                  <p className="text-green-500 text-sm mt-2 font-medium">
                    ✅ הועתק ללוח!
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </Section>
      )}

      {/* Tools Tab */}
      {activeTab === 'tools' && (
        <Section title="המלצות על כלים" subtitle="סקירות פשוטות וברורות על הכלים שהכי שווים את הזמן שלכם">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-3xl">{tool.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-ink">{tool.name}</h3>
                    <p className="text-gray-600">{tool.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">✅ יתרונות:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {tool.pros.map((pro, i) => (
                        <li key={i}>• {pro}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-600 mb-2">⚠️ חסרונות:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {tool.cons.map((con, i) => (
                        <li key={i}>• {con}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-ink mb-2">🎯 מקרה מבחן:</h4>
                  <p className="text-sm text-gray-600">{tool.useCase}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>
      )}

      {/* Newsletter Tab */}
      {activeTab === 'newsletter' && (
        <Section title="הצטרפות לניוזלטר" subtitle="רוצים להישאר תמיד מעודכנים? הירשמו לניוזלטר שלנו">
          <div className="max-w-2xl mx-auto">
            <motion.div
              className="bg-white rounded-xl shadow-lg border border-gray-200 p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {!newsletterSubmitted ? (
                <form onSubmit={handleNewsletterSubmit}>
                  <div className="space-y-4 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        שם מלא
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={newsletterName}
                        onChange={(e) => setNewsletterName(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electricBlue focus:border-transparent"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        כתובת מייל
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={newsletterEmail}
                        onChange={(e) => setNewsletterEmail(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electricBlue focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="bg-mint/10 rounded-lg p-4 mb-6">
                    <h4 className="font-semibold text-ink mb-2">מה תקבלו בניוזלטר:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• טיפים בלעדיים שלא מתפרסמים באתר</li>
                      <li>• מדריכים פרקטיים וכלי עבודה להורדה</li>
                      <li>• עדכונים על סדנאות קרובות והטבות מיוחדות</li>
                    </ul>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-electricBlue hover:bg-electricBlue/90 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Mail className="h-5 w-5" />
                    הירשמו לניוזלטר
                  </button>
                  
                  <p className="text-xs text-gray-500 mt-4 text-center">
                    ההרשמה חינמית – ותמיד תוכלו להסיר את עצמכם בלחיצה אחת.
                  </p>
                </form>
              ) : (
                <div className="text-center">
                  <div className="text-6xl mb-4">🎉</div>
                  <h3 className="text-2xl font-bold text-ink mb-4">
                    תודה על ההרשמה!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    שלחנו לכם מייל אישור. בקרוב תקבלו טיפים בלעדיים וכלי עבודה שיעזרו לכם להפוך את העסק למקצועי יותר.
                  </p>
                  <button
                    onClick={() => setNewsletterSubmitted(false)}
                    className="text-electricBlue hover:text-electricBlue/80 font-medium"
                  >
                    הרשמה נוספת
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        </Section>
      )}
    </>
  )
}
