'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface Testimonial {
  name: string
  business: string
  location: string
  quote: string
  result: string
}

const mainTestimonials: Testimonial[] = [
  {
    name: 'יעל',
    business: 'מעצבת תכשיטים',
    location: 'חיפה',
    quote: 'לפני הסדנה לא ידעתי מאיפה להתחיל – ניסיתי לפרסם לבד בפייסבוק אבל זה הרגיש חובבני. תוך פחות משבוע מהמפגש עלה לי דף מכירה חדש ומעוצב עם הזמנות ראשונות אונליין. החלק הכי חשוב? הבנתי סוף-סוף איך לנסח פוסטים שמדברים בשפה של הלקוחות שלי, בלי לבזבז שעות על כל מילה. היום אני מפרסמת פעמיים בשבוע – וזה מרגיש טבעי ופשוט.',
    result: 'יעל הגדילה את כמות ההזמנות החודשיות ב-40% תוך חודשיים בלבד'
  },
  {
    name: 'חיים',
    business: 'יועץ עסקי',
    location: 'נתניה',
    quote: 'אני מלווה בעלי עסקים שנים, אבל תמיד הרגשתי שהשיווק הדיגיטלי גוזל ממני זמן שלא היה לי. בזכות הסדנה גיליתי את הכוח של GPT לכתיבה שיווקית: יש לי טמפלטים קבועים לפוסטים ולמיילים, ואני רק מתאים אותם ללקוח. בנוסף, הקמתי אוטומציה שמעדכנת אותי בכל פעם שנכנס ליד חדש ושולחת לו מייל אישי תוך דקה. זה חוסך לי שעות עבודה ומעלה את שיעור הסגירה שלי.',
    result: 'חיים חוסך בממוצע 6 שעות עבודה בשבוע ומצליח לסגור 1 מכל 3 לידים חדשים'
  },
  {
    name: 'סיוון',
    business: 'בעלת סטודיו ליוגה',
    location: 'רמת גן',
    quote: 'הבעיה הכי גדולה שלי הייתה התקשורת עם תלמידים חדשים. אנשים כתבו לי בווטסאפ ובפייסבוק ואני הייתי טובעת בהודעות. במפגש למדתי איך להגדיר מענה אוטומטי ראשוני: כל מי שפונה מקבל מידע בסיסי על השיעורים והפניה לטופס הרשמה. התגובות הגיעו מהרגע הראשון – אנשים העריכו את השירות, ואני הפסקתי להילחץ מהעומס. עכשיו אני פנויה להתמקד בלימוד עצמו.',
    result: 'סיוון הצליחה למלא קבוצת שיעורים חדשה תוך חודש – בלי להוסיף שקל לפרסום'
  },
  {
    name: 'אבי',
    business: 'בעל חנות אופניים',
    location: 'קריות',
    quote: 'תמיד חשבתי שהשיווק בפייסבוק זה \'ניסוי וטעייה\' – מעלים מודעה ורואים מה יקרה. אחרי הסדנה חיברתי את המודעות שלי לגיליון נתונים, ו-AI מייצר לי דוח שבועי ברור: איזו מודעה מביאה את הלידים הכי איכותיים וכמה עולה לי כל ליד. ברגע שהתחלתי לפעול לפי הנתונים – הקמפיינים נהיו רווחיים באמת. היום אני יודע איפה להשקיע ואיפה לא.',
    result: 'אבי הגדיל את המכירות החודשיות ב-50% תוך שלושה חודשים, בלי להגדיל את תקציב הפרסום'
  }
]

const additionalTestimonials: Testimonial[] = [
  // חנויות פיזיות
  {
    name: 'רוני',
    business: 'חנות פרחים',
    location: 'רעננה',
    quote: 'לפני הסדנה עניתי ידנית לכל פנייה. עכשיו יש מענה אוטומטי ותבניות הזמנה. אני חוסכת שעה ביום וסוגרת פי 2 הזמנות.',
    result: '+100% הזמנות'
  },
  {
    name: 'יוסי',
    business: 'חנות אופניים',
    location: 'קריות',
    quote: 'הפרסום היה ניסוי וטעייה. היום יש לי דוחות AI שמראים בדיוק איזו מודעה עובדת. מכירות +50% בלי להגדיל תקציב.',
    result: '+50% מכירות'
  },
  {
    name: 'מיכל',
    business: 'חנות בגדים לנשים',
    location: 'תל אביב',
    quote: 'פוסטים היו גוזלים שעות. היום יש לי טמפלטים מוכנים לחודש קדימה. האינסטגרם מביא לקוחות חדשות מדי שבוע.',
    result: '+200% לקוחות חדשות'
  },
  {
    name: 'שלומי',
    business: 'פיצרייה',
    location: 'חדרה',
    quote: 'בניתי תמונות בפחות מדקה עם DALL·E. הפוסט הראשון קיבל פי 3 לייקים מהרגיל.',
    result: '+300% לייקים'
  },
  {
    name: 'תמר',
    business: 'חנות צעצועים',
    location: 'פתח תקווה',
    quote: 'יצרתי דף מכירה עם קטלוג פשוט. ביומיים הראשונים קיבלתי 12 הזמנות חדשות בווטסאפ.',
    result: '12 הזמנות ב-2 ימים'
  },
  {
    name: 'אבי',
    business: 'חנות ספרים',
    location: 'ירושלים',
    quote: 'פניות היו הולכות לאיבוד. היום כל הודעה נרשמת אוטומטית בגיליון. סוף-סוף סדר.',
    result: '100% מעקב פניות'
  },
  {
    name: 'קרן',
    business: 'מאפייה',
    location: 'גבעתיים',
    quote: 'במקום תמונות פלאפון מביכות – יצרתי תמונות מקצועיות למאפים. עכשיו יש לי לקוחות חדשים כל שבוע.',
    result: '+150% לקוחות חדשים'
  },
  {
    name: 'איתי',
    business: 'חנות מחשבים',
    location: 'נתניה',
    quote: 'עניתי 20 פעם על אותה שאלה. היום יש לי מענה אוטומטי שמפנה לאתר. חסכתי עשרות הודעות ביום.',
    result: '-80% הודעות חוזרות'
  },
  {
    name: 'סימה',
    business: 'חנות נעליים',
    location: 'חיפה',
    quote: 'העליתי מבצע עם מייל + פוסט מוכן מהסדנה. תוך יומיים נמכרו 35 זוגות.',
    result: '35 זוגות ב-2 ימים'
  },
  {
    name: 'דניאל',
    business: 'חנות מתנות',
    location: 'רחובות',
    quote: 'לא היה לי דף נחיתה. היום יש. בשבוע הראשון נמכרו 17 פריטים ישירות אונליין.',
    result: '17 פריטים בשבוע ראשון'
  },
  
  // נותני שירות
  {
    name: 'אלי',
    business: 'רואה חשבון',
    location: 'ראשון לציון',
    quote: 'הסברתי שוב ושוב על שירותי. יצרתי דף מכירה אחד ברור. לקוחות מגיעים עם פחות שאלות ויותר מוכנות לסגור.',
    result: '+40% שיעור הסגירה'
  },
  {
    name: 'ליאור',
    business: 'מאמן כושר אישי',
    location: 'תל אביב',
    quote: 'עבדתי רק מפה לאוזן. היום אני מפרסם פוסטים עם תמונות AI של מתאמנים. ביומיים הראשונים – 5 פניות חדשות.',
    result: '5 פניות ב-2 ימים'
  },
  {
    name: 'מירב',
    business: 'עורכת דין',
    location: 'חיפה',
    quote: 'כתיבת מאמרים מקצועיים גזלה לי ימים. עכשיו GPT מנסח ואני עורכת. מפרסמת פי 3 תוכן בזמן חצי.',
    result: '+300% תוכן, -50% זמן'
  },
  {
    name: 'חן',
    business: 'יועצת נדל״ן',
    location: 'נתניה',
    quote: 'לא ידעתי איך להציג נכסים. יצרתי דף נחיתה לכל דירה. קיבלתי פניות איכותיות יותר – אנשים באים לראות כשהם כבר חמים.',
    result: '+60% פניות איכותיות'
  },
  {
    name: 'נועם',
    business: 'סוכן ביטוח',
    location: 'רעננה',
    quote: 'הגדרתי אוטומציה: ליד נכנס → נשלח מייל ברוך הבא. יחס הסגירה שלי עלה ב-30%.',
    result: '+30% יחס הסגירה'
  },
  {
    name: 'אסף',
    business: 'יועץ עסקי',
    location: 'פתח תקווה',
    quote: 'בניתי תבניות פוסטים עם GPT. היום אני מעלה 3 פוסטים בשבוע בלי להשקיע יותר משעה.',
    result: '3 פוסטים בשעה'
  },
  {
    name: 'שירי',
    business: 'מורה פרטית לאנגלית',
    location: 'חולון',
    quote: 'יצרתי מערכת הזמנות פשוטה. תלמידים קובעים לבד, ואני לא מתעסקת עם טלפונים.',
    result: '-90% שיחות טלפון'
  },
  {
    name: 'דנה',
    business: 'נטורופתית',
    location: 'תל אביב',
    quote: 'למדתי להעלות מתכונים ברמה של בלוג מקצועי. זה מביא אליי לקוחות חדשים שלא הכירו אותי.',
    result: '+7 לקוחות חדשים'
  },
  {
    name: 'מתן',
    business: 'מאמן עסקי',
    location: 'ירושלים',
    quote: 'יש לי עכשיו ניוזלטר אוטומטי. כל שבוע יוצא מייל עם טיפים – והלקוחות נשארים מעורבים.',
    result: '+85% שיעור פתיחה'
  },
  {
    name: 'אורית',
    business: 'מדריכת כלבים',
    location: 'מודיעין',
    quote: 'במקום לענות על אותן שאלות – שלחתי דף מכירה עם תשובות. חסכתי שעות בטלפון.',
    result: '-5 שעות טלפון שבועי'
  },
  
  // בריאות ויופי
  {
    name: 'לירון',
    business: 'קוסמטיקאית',
    location: 'בת ים',
    quote: 'בזכות מחקר שוק עם AI ידעתי איזה טיפול להשיק. הקמפיין הביא פי 2 פניות.',
    result: '+200% פניות'
  },
  {
    name: 'דפנה',
    business: 'ספרית',
    location: 'חיפה',
    quote: 'פוסטים היו נראים חובבניים. עכשיו יש לי תמונות מקצועיות לתספורות. לקוחות אומרות שהן הגיעו מהפייסבוק.',
    result: '+120% פניות מפייסבוק'
  },
  {
    name: 'רותם',
    business: 'מאמנת פילאטיס',
    location: 'תל אביב',
    quote: 'אוטומציה פשוטה שולחת מייל תזכורת לכל תלמידה. שיעורי ההגעה עלו ב-20%.',
    result: '+20% הגעה לשיעורים'
  },
  {
    name: 'עדי',
    business: 'נטורופתית',
    location: 'כפר סבא',
    quote: 'כתבתי מאמרים עם GPT, וזה הפך אותי לסמכותית. קיבלתי 7 לקוחות חדשים דרך הבלוג.',
    result: '+7 לקוחות מהבלוג'
  },
  {
    name: 'טלי',
    business: 'קוסמטיקאית רפואית',
    location: 'רחובות',
    quote: 'דף נחיתה עם הצעת ערך ברורה הכפיל את מספר הפניות אליי.',
    result: '+100% פניות'
  },
  {
    name: 'איילת',
    business: 'סטודיו לאיפור',
    location: 'באר שבע',
    quote: 'בניתי קטלוג דיגיטלי תוך שעה. הלקוחות מתלהבות שיש להן איך לבחור לפני שהן מגיעות.',
    result: '+90% שביעות רצון'
  },
  {
    name: 'נינה',
    business: 'מטפלת הוליסטית',
    location: 'רעננה',
    quote: 'בזכות הסדנה יש לי סדרת פוסטים מוכנה מראש. אני מעלה תוכן פעם בשבוע בלי לחץ.',
    result: '+100% עקביות בפרסום'
  },
  {
    name: 'הדר',
    business: 'מאמנת אישית',
    location: 'תל אביב',
    quote: 'במקום להתעכב על ניסוחים – GPT כותב לי הצעות מחיר ברמה גבוהה. זה נראה מקצועי.',
    result: '+50% מהירות תגובה'
  },
  {
    name: 'אפרת',
    business: 'בעלת קליניקה לאסתטיקה',
    location: 'חיפה',
    quote: 'בזכות אוטומציה קטנה, כל ליד חדש מקבל מייל עם קטלוג טיפולים. יחס הסגירה שלי עלה משמעותית.',
    result: '+45% יחס הסגירה'
  },
  {
    name: 'יעל',
    business: 'מטפלת רגשית',
    location: 'רמת גן',
    quote: 'יצרתי מערכת הזמנות עם שאלון התאמה. הלקוחות מגיעים מוכנים יותר לטיפול.',
    result: '+70% מוכנות לטיפול'
  },
  
  // מקצועות יצירה
  {
    name: 'דני',
    business: 'צלם אירועים',
    location: 'רמת גן',
    quote: 'GPT עזר לי לנסח הצעות מחיר שיווקיות. אנשים עונים יותר מהר.',
    result: '+60% מהירות תגובה'
  },
  {
    name: 'עפרה',
    business: 'מעצבת פנים',
    location: 'תל אביב',
    quote: 'לא ידעתי איך להציג את עצמי אונליין. היום יש לי דף נחיתה מקצועי. קיבלתי כבר 3 פניות ראשונות.',
    result: '3 פניות ראשונות'
  },
  {
    name: 'מיה',
    business: 'אמנית קרמיקה',
    location: 'ירושלים',
    quote: 'פוסטים נראו חובבניים. עכשיו יש לי תמונות ברמה גבוהה – והעוקבים גדלו ב-40%.',
    result: '+40% עוקבים'
  },
  {
    name: 'גיא',
    business: 'מוזיקאי עצמאי',
    location: 'פתח תקווה',
    quote: 'בניתי דף מכירה להופעות פרטיות. תוך חודשיים סגרתי 4 אירועים חדשים.',
    result: '4 אירועים ב-2 חודשים'
  },
  {
    name: 'נועה',
    business: 'צלמת תדמית',
    location: 'תל אביב',
    quote: 'עם GPT יצרתי תיאורים לפורטפוליו שלי. זה נשמע מקצועי ומדויק.',
    result: '+80% פניות איכותיות'
  },
  {
    name: 'יוספה',
    business: 'מעצבת בגדי ים',
    location: 'נתניה',
    quote: 'העליתי קטלוג חדש עם תמונות שיצרתי ב-DALL·E. זה משך לקוחות שלא הכירו אותי קודם.',
    result: '+60% לקוחות חדשים'
  },
  {
    name: 'רועי',
    business: 'יוצר קומיקס',
    location: 'חיפה',
    quote: 'למדתי ליצור איורים עם AI כסקיצות. זה חוסך לי ימים של עבודה.',
    result: '-70% זמן יצירה'
  },
  {
    name: 'קרולינה',
    business: 'אמנית ציור',
    location: 'תל אביב',
    quote: 'הסדנה נתנה לי ביטחון לכתוב פוסטים על העבודות שלי. קיבלתי פניות לקורסים פרטיים.',
    result: '+5 פניות לקורסים'
  },
  {
    name: 'גלעד',
    business: 'מעצב גרפי פרילנסר',
    location: 'חולון',
    quote: 'הטמפלטים שהכנתי בסדנה חוסכים לי שעות מול לקוחות. אני שולח להם דוגמאות מהר יותר.',
    result: '+50% מהירות עבודה'
  },
  {
    name: 'שרה',
    business: 'צלמת חתונות',
    location: 'חדרה',
    quote: 'יצרתי דף נחיתה עם גלריה דינמית. זוגות יכולים לראות את הסגנון שלי לפני הפגישה.',
    result: '+90% שביעות רצון'
  },
  
  // עסקים אונליין
  {
    name: 'שרון',
    business: 'חנות איקומרס',
    location: 'תל אביב',
    quote: 'לפני הסדנה לא היה לי דף מכירה ברור. היום יש לי דף לכל מוצר מוביל. המכירות עלו ב-35%.',
    result: '+35% מכירות'
  },
  {
    name: 'תומר',
    business: 'מנטור דיגיטלי',
    location: 'חיפה',
    quote: 'הסדנה עזרה לי ליצור תוכן שבועי לבלוג. אני מושך יותר עוקבים ומייצר אמון.',
    result: '+150% עוקבים'
  },
  {
    name: 'אלה',
    business: 'מוכרת יד שנייה באיביי',
    location: 'ירושלים',
    quote: 'GPT עזר לי לתרגם תיאורי מוצרים לאנגלית מושכת. כמות המכירות הכפילה את עצמה.',
    result: '+200% מכירות'
  },
  {
    name: 'אילן',
    business: 'יועץ פיננסי אונליין',
    location: 'נתניה',
    quote: 'הוספתי אוטומציה פשוטה: ליד חדש מקבל מייל עם מדריך מתנה. זה הפך 20% מהם ללקוחות משלמים.',
    result: '+20% המרה ללקוחות'
  },
  {
    name: 'קרן',
    business: 'קורס אונליין לעיצוב',
    location: 'תל אביב',
    quote: 'כתבתי תוכנית קורס עם GPT. זה חסך לי שבועות. קיבלתי כבר 15 נרשמים ראשונים.',
    result: '15 נרשמים ראשונים'
  },
  {
    name: 'דורי',
    business: 'סוחר באמזון',
    location: 'אשקלון',
    quote: 'DALL·E יצר לי תמונות למוצרים. זה שיפר דירוגים והגדיל מכירות.',
    result: '+40% מכירות באמזון'
  },
  {
    name: 'עינב',
    business: 'קואצרית',
    location: 'רחובות',
    quote: 'עכשיו יש לי דף נחיתה עם קריאה ברורה לפעולה. פי 3 פניות לעומת האתר הישן שלי.',
    result: '+300% פניות'
  },
  {
    name: 'שמוליק',
    business: 'סוחר יד שנייה',
    location: 'תל אביב',
    quote: 'בניתי טמפלטים לפוסטים בפייסבוק. זה הפך את הקבוצה שלי לפעילה פי 2.',
    result: '+200% פעילות בקבוצה'
  },
  {
    name: 'אילה',
    business: 'מנטורית שיווק',
    location: 'חיפה',
    quote: 'בזכות האוטומציות אני שולחת ניוזלטר פעם בשבוע בלי להתאמץ. הלקוחות מעריכים את העקביות.',
    result: '+95% שיעור פתיחה'
  },
  {
    name: 'מאור',
    business: 'מורה פרטי למתמטיקה אונליין',
    location: 'באר שבע',
    quote: 'GPT עוזר לי להכין דפי הסבר לתלמידים. הם מרוצים – ואני מציע ערך מוסף אמיתי.',
    result: '+80% שביעות רצון תלמידים'
  }
]

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const getRandomInterval = () => {
      // Random interval between 4-8 seconds
      return Math.random() * 4000 + 4000
    }

    const scheduleNext = () => {
      const randomIndex = Math.floor(Math.random() * additionalTestimonials.length)
      setCurrentTestimonial(randomIndex)
      setTimeout(scheduleNext, getRandomInterval())
    }

    // Start the random rotation after initial delay
    const initialTimeout = setTimeout(scheduleNext, getRandomInterval())
    
    return () => {
      clearTimeout(initialTimeout)
    }
  }, [])

  return (
    <div className="py-16 bg-gray-50">
      <div className="container-max">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            אנשים אמיתיים, תוצאות אמיתיות – כך הסדנה שינתה להם את העסק
          </h2>
        </motion.div>

        {/* Main Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {mainTestimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="mr-3">
                  <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.business}</p>
                  <p className="text-xs text-gray-500">{testimonial.location}</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="bg-green-100 border-r-4 border-green-500 p-3 rounded">
                <p className="text-green-800 font-bold text-sm">
                  {testimonial.result}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Rotating Testimonials */}
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">המלצות נוספות</h3>
          </div>
          
          <motion.div
            key={currentTestimonial}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                {additionalTestimonials[currentTestimonial].name.charAt(0)}
              </div>
              <div className="mr-4 text-right">
                <h4 className="font-bold text-gray-900 text-lg">
                  {additionalTestimonials[currentTestimonial].name}
                </h4>
                <p className="text-gray-600">
                  {additionalTestimonials[currentTestimonial].business} • {additionalTestimonials[currentTestimonial].location}
                </p>
              </div>
            </div>
            
            <blockquote className="text-gray-700 text-lg mb-6 italic">
              "{additionalTestimonials[currentTestimonial].quote}"
            </blockquote>
            
            <div className="bg-blue-100 border-r-4 border-blue-500 p-4 rounded inline-block">
              <p className="text-blue-800 font-bold">
                {additionalTestimonials[currentTestimonial].result}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
