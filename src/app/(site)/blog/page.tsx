'use client'

import { motion } from 'framer-motion'
import Section from '@/components/Section'
import CTAButton from '@/components/CTAButton'
import { useState } from 'react'
import { Search, Copy, Check, ArrowRight, Mail, Download, Bell } from 'lucide-react'

const articles = [
  {
    id: 1,
    title: "איך GPT יכול לשנות את הדרך שבה אתה עובד",
    excerpt: "קרה לך שאתה מרגיש שאתה עובד כל היום – אבל לא באמת מתקדם? שיש אלף משימות קטנות, רשימות, הודעות, מיילים, פוסטים, אבל שום דבר לא באמת זז קדימה?",
    content: `קרה לך שאתה מרגיש שאתה עובד כל היום – אבל לא באמת מתקדם?
שיש אלף משימות קטנות, רשימות, הודעות, מיילים, פוסטים, אבל שום דבר לא באמת זז קדימה?
זה לא שאתה לא עובד קשה.
אתה פשוט עובד על הכל – חוץ ממה שבאמת חשוב.

ופה נכנס GPT.

## 🧭 למה זה רלוונטי לעסק קטן

בעסק קטן אתה לא רק המנהל – אתה גם המזכיר, איש השיווק, השירות, הפיננסים והקריאייטיב.
אין לך צוות של חמישה אנשים – יש לך את עצמך, ואת הזמן שלך.
ולכן כל דקה ש־AI יכול לחסוך לך – שווה זהב.

GPT הוא לא עוד "גימיק טכנולוגי".
הוא כלי שמחזיר לך שליטה ביום שלך.

## ⚙️ אז מה בעצם GPT יודע לעשות בשבילך

**🗓️ לסדר סדר יום**
"סדר לי לו״ז ליום שלישי כולל שעתיים פגישות, זמן עבודה שקט וארוחת צהריים."

**🧾 להכין רשימות**
"תכתוב לי רשימת משימות לשבוע הקרוב לפי עדיפות."

**💬 לנסח הודעות**
"תנסח הודעה ללקוח שמתעכב בתשלום – בטון נחמד אבל אסרטיבי."

**📣 לכתוב פוסטים**
"תכתוב פוסט לפייסבוק על מבצע מיוחד, בסגנון קליל ומזמין."

**💡 להציע רעיונות**
"אני רוצה להגדיל את החשיפה לעסק – אילו פעולות שיווק אפשר לעשות השבוע?"

זה לא קסם – זה פשוט מישהו חכם שעובד איתך, 24/7, בלי קפה ובלי חופשות.

## 🧩 דוגמה אמיתית

נניח שאתה בעל חנות למתנות.
בדרך כלל אתה מבלה שעה וחצי ביום רק על ניסוחים – מיילים, תגובות, תיאורים באתר.

עם GPT אתה פשוט כותב:
"תכתוב לי תיאור קצר למוצר – כוס בעיצוב אישי, מתנה ליום הולדת, בסגנון חמים וישראלי."

תוך 10 שניות יש לך טקסט מושלם.
וזה לא רק טקסט – זה זמן שנחסך.

## 🪄 השינוי האמיתי – לא רק חיסכון בזמן

אחרי שבועיים של שימוש אתה מבין ש־GPT משנה את כללי המשחק:

- הוא עושה סדר במחשבות שלך
- הוא עוזר לך להגדיר יעדים ברורים
- הוא נותן לך ביטחון לקחת משימות שעד היום דחית

זה כמו להחזיק עוזר חכם – שזוכר הכל, מבין אותך, ולא שופט אותך.

## 💬 סיכום

GPT הוא לא תחליף לבני אדם.
הוא העוזר האישי שלך – כזה שמאפשר לך להתמקד במה שבאמת חשוב בעסק שלך: אנשים, לקוחות, יצירתיות.

**רוצה לדעת איך להשתמש בזה בפועל בעסק שלך?** [קפוץ למדריך המעשי: איך להשתמש ב־ChatGPT בעסק שלך](/blog).

---

**🤝 רוצים ליישם את זה בעסק שלכם?**  
[צרו קשר](/contact) ונראה לכם איך זה עובד בפועל | [ראו כלים נוספים בהדגמות](/demos)`,
    category: "GPT",
    readTime: "5 דקות",
    image: "🤖"
  },
  {
    id: 2,
    title: "מדריך מעשי: איך להשתמש ב-ChatGPT בעסק שלך",
    excerpt: "שמעת על GPT אבל עוד לא ממש השתמשת? או שניסית פעם-פעמיים וזה הרגיש כמו לדבר עם רובוט שלא מבין עברית?",
    content: `**אם עוד לא יצא לך להבין למה GPT בכלל שווה את הזמן שלך, כדאי להתחיל בכתבה הראשונה שלנו – [איך GPT יכול לשנות את הדרך שבה אתה עובד](/blog).**

שמעת על GPT אבל עוד לא ממש השתמשת?
או שניסית פעם-פעמיים וזה הרגיש כמו לדבר עם רובוט שלא מבין עברית?
אתה לא לבד.
רוב האנשים מנסים לכתוב לו שורה אחת — ומתאכזבים.

אבל ברגע שמבינים איך לדבר איתו נכון,
GPT הופך מעוד צעצוע אינטרנטי ל־עוזר אמיתי שמבין אותך בעברית.

## 🧭 איך בכלל ניגשים לזה

קודם כול, חשוב לדעת: GPT לא "יודע" מה אתה רוצה.
הוא צריך הקשר.
כלומר – אם תכתוב "תכתוב פוסט לעסק שלי" הוא לא יבין.
אבל אם תכתוב:

"אני בעל חנות מתנות בחיפה.
תכתוב לי פוסט לפייסבוק על מבצע ליום האישה, בסגנון חמים ומצחיק."

תקבל תוצאה מושלמת.
זה ההבדל בין "עוד תשובה" לבין תוכן שמתאים לך בדיוק.

## ⚙️ 5 דרכים פשוטות להשתמש ב־GPT בעסק שלך

### 🧾 1. ניסוחים חכמים להודעות ולמיילים
"תנסח מייל ללקוח שפנה אליי אתמול, בטון אישי ונעים."
"תכתוב הודעה ללקוח שלא סגר עסקה – סגנון רך, בלי לחץ."

### 📣 2. יצירת תוכן לפייסבוק / אינסטגרם
"תכתוב פוסט לפייסבוק שמספר על מוצר חדש שלי, בסגנון פשוט ומזמין."
"תכתוב רעיון לסדרת פוסטים על איך לבחור מתנה אישית."

### 💼 3. עוזר ניהול זמן
"סדר לי לו״ז יומי עם שעתיים למכירות, שעתיים לשיווק, ושעה אחת לסידורים."

### 💡 4. רעיונות לשיווק
"תציע לי 5 דרכים חכמות לפרסם עסק קטן בתקציב של עד 300 ש״ח."

### ✍️ 5. כתיבה שיווקית לאתר או לדף נחיתה
"תכתוב תיאור קצר לעסק שלי שמתמחה במתנות בעיצוב אישי, בסגנון אמין ומזמין."

## 💬 טיפ חשוב – תתייחס אליו כמו לבן אדם

GPT "חושב" כמו שיחה.
אם לא אהבת תשובה – פשוט תכתוב לו:
"לא מספיק קליל, תעשה את זה יותר מצחיק."
או "תכתוב את זה כאילו אני מדבר עם חבר."

הוא ילמד את הסגנון שלך.
הוא לא נעלב, והוא לא מתעייף.

## 🪄 רוצה נוסחת קסם?

כדי לקבל ממנו תשובות מדויקות, השתמש במבנה הזה:

**אתה** [תפקיד/מומחה]  
**ההקשר:** [מי אני ומה אני עושה]  
**המטרה:** [מה אני רוצה להשיג]  
**הנחיות:** [איך אני רוצה שתגיב]

**דוגמה:**
אתה יועץ שיווק לעסקים קטנים.
אני בעל עסק למתנות בחיפה.
אני רוצה לפרסם פוסט ליום הולדת 5 לחנות שלי.
תכתוב טקסט קצר, קליל ומרגש, בעברית טבעית.

תקבל תוצאה מדויקת, כאילו קופירייטר כתב לך את זה.

## 💬 סיכום

GPT זה לא קסם – זה פשוט שפה חדשה שצריך ללמוד לדבר בה.
וברגע שאתה מדבר אותה נכון,
יש לך עוזר שיווק, מזכיר, יועץ, וקופירייטר – באדם אחד (או בעצם, בבוט אחד 😉).

**עכשיו כשאתה כבר יודע לדבר עם GPT, תראה [אילו משימות אפשר לאוטומט בעזרת AI](/blog).**

---

**🤝 רוצים ליישם את זה בעסק שלכם?**  
[צרו קשר](/contact) ונראה לכם איך זה עובד בפועל | [ראו כלים נוספים בהדגמות](/demos)`,
    category: "ChatGPT",
    readTime: "6 דקות",
    image: "📝"
  },
  {
    id: 3,
    title: "7 משימות שעסק קטן יכול לאוטומט עם AI",
    excerpt: "בואו נודה על האמת — בעסק קטן אתה עושה הכול: עונה ללקוחות, מעלה פוסטים, כותב הצעות מחיר... אז הנה החדשות הטובות: חלק גדול מזה כבר לא חייב לעבור דרך הידיים שלך.",
    content: `**אם כבר התחלת לשחק עם GPT ורוצה לקחת את זה לשלב הבא, [תבדוק קודם את המדריך המעשי לשימוש ב־ChatGPT בעסק שלך](/blog).**

בואו נודה על האמת — בעסק קטן אתה עושה הכול: עונה ללקוחות, מעלה פוסטים, כותב הצעות מחיר, סוגר ספקים…
וכל זה כשאתה גם מנסה להריץ את העסק עצמו.

אז הנה החדשות הטובות: חלק גדול מהמשימות האלה כבר לא חייב לעבור דרך הידיים שלך.
AI יכול לעשות אותן בשבילך, לבד, ובדיוק כמו שאתה היית עושה – רק מהר יותר.

## ⚙️ אז מה זה אומר "לאוטומט"?

זה לא רובוט שמחליף אותך, אלא מערכת שעושה בשבילך פעולות קבועות – כמו לענות אוטומטית ללקוחות, לעדכן נתונים, או להכין טקסטים שחוזרים על עצמם.

## 💡 7 דברים שאתה יכול לאוטומט עם AI כבר היום

### 🧾 1. מענה ראשוני ללקוחות
כמה פעמים קיבלת את אותה שאלה? "מה המחיר?", "איפה אתם?", "יש אחריות?"
בעזרת GPT אפשר ליצור תשובות מוכנות – שנשמעות אנושיות, לא רובוטיות.

### 📣 2. כתיבת פוסטים קבועים לרשתות
תכתוב פעם אחת: "תיצור לוח תוכן לפייסבוק – שני פוסטים בשבוע"
והוא יחזיר רעיונות, ניסוחים ותמונות מוצעות.

### 🧮 3. ניהול רשימות ומשימות
"תסדר לי רשימת משימות לשבוע הקרוב לפי עדיפות."

### 💬 4. ניסוחים למיילים והודעות
"תכתוב מייל תודה ללקוח שסיים עסקה – בטון אישי ונעים."

### 💰 5. הצעות מחיר וניסוחים עסקיים
"תכתוב הצעת מחיר עבור חבילת שירותים – כולל פתיח והדגשת הערך."

### 📊 6. סיכום שיחות או פגישות
אחרי שיחה: "סכם את הנקודות העיקריות כולל הפעולות הבאות."

### 🔍 7. מחקר מהיר לפני החלטה
"תסכם לי יתרונות וחסרונות של מערכת הסליקה קארדקום לעומת טרנזילה."

## 🪄 תובנה אחת לסיום

AI לא נועד להחליף אותך – הוא נועד לשחרר אותך מהדברים שחוזרים על עצמם.

**רוצה לדעת באילו כלים אפשר להשתמש כדי לעשות את זה באמת?** [הנה רשימה של כלי AI מומלצים שיחסכו לך שעות עבודה](/blog).

---

**🤝 רוצים ליישם את זה בעסק שלכם?**  
[צרו קשר](/contact) ונראה לכם איך זה עובד בפועל | [ראו כלים נוספים בהדגמות](/demos)`,
    category: "אוטומציה",
    readTime: "7 דקות",
    image: "⚙️"
  },
  {
    id: 4,
    title: "כלי AI מומלצים שיחסכו לך שעות עבודה",
    excerpt: "אם אתה בעל עסק קטן, אתה בטח מכיר את התחושה: הרבה כובעים על הראש, מעט זמן, ורשימת משימות אינסופית. החדשות הטובות? יש כלים שיעזרו לך.",
    content: `**אם עוד לא קראת [את 7 המשימות שכל עסק קטן יכול לאוטומט בעזרת AI](/blog) – זה בדיוק המקום שבו תבין למה הכלים האלו שווים את הזמן שלך.**

אם אתה בעל עסק קטן, אתה בטח מכיר את התחושה הזו: הרבה כובעים על הראש, מעט זמן, ורשימת משימות שנראית אינסופית.

החדשות הטובות? AI לא נועד רק לחברות ענק. יש היום כלים חינמיים ופשוטים שכל בעל עסק יכול להשתמש בהם.

## 💬 1. ChatGPT – העוזר האישי שלך לכל דבר

GPT יכול לעזור לך לנסח הודעות, פוסטים, מיילים, תיאורי מוצרים ועוד. כל מה שצריך זה לכתוב לו מה ההקשר ומה אתה רוצה.

**דוגמה:** "תכתוב הודעה ללקוח שלא ענה לי שבוע, בטון עדין ולא לוחץ."

## ✍️ 2. Notion AI – לסדר את הראש שלך

Notion AI עוזר לך לכתוב, לארגן משימות, לרשום רעיונות ולבנות תהליכים. פשוט תכתוב בעברית והוא מסדר הכל.

## 🎨 3. Canva Magic Studio – עיצוב גרפי בלי מעצב

במקום לחכות למעצב – Canva יוצרת לך תמונות מקצועיות תוך דקות.

## 📣 4. HeyGen – סרטונים עם דמות מדברת

רוצה להעלות סרטון אבל לא בא לך להצטלם? HeyGen מאפשר לך לבחור דמות שמדברת עבורך בעברית.

## 🧮 5. Tally.so – טפסים חכמים ללקוחות

Tally מאפשר לך ליצור טפסים בקלות - למשל טופס יצירת קשר או שאלון לקוחות.

## 💡 6. Perplexity.ai – חיפוש חכם יותר מגוגל

Perplexity נותן לך תשובה אחת, מסוכמת וברורה, כולל מקורות אמינים.

## 📸 7. CapCut – עריכת סרטונים מהירה

אם אתה מעלה סרטונים לטיקטוק או רילס – CapCut הוא עורך וידאו פשוט וחינמי עם AI שמזהה רגעים טובים.

## 🪄 טיפ לסיום

אל תנסה ללמוד את כולם ביום אחד. בחר שני כלים שיכולים לעזור לך כבר השבוע, ותתרגל לעבוד איתם.

---

**🤝 רוצים שנעזור לכם לבחור מאיפה להתחיל?**  
[צרו קשר](/contact) ונראה לכם איך להשתמש בכלים האלה | [ראו הדגמות חיות](/demos)`,
    category: "כלי AI",
    readTime: "8 דקות",
    image: "🛠️"
  }
]

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
                      <span className="ml-2 text-gray-500 text-sm">{article.readTime}</span>
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
