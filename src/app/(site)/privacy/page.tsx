import Section from '@/components/Section'
import Link from 'next/link'

export default function PrivacyPage() {
  const lastUpdated = '17 באוקטובר 2025'
  
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-electricBlue/5 to-deepPurple/5 section-padding">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-ink mb-6">
            מדיניות פרטיות ותנאי שימוש
          </h1>
          <p className="text-xl text-slate max-w-3xl mx-auto">
            אנחנו מחויבים להגן על הפרטיות שלכם. להלן מידע על איסוף ושימוש במידע באתר.
          </p>
          <p className="text-sm text-slate mt-4">
            עדכון אחרון: {lastUpdated}
          </p>
        </div>
      </section>

      {/* תוכן מדיניות */}
      <Section>
        <div className="max-w-4xl mx-auto prose prose-lg">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            
            <h2 className="text-2xl font-bold text-ink mb-4">1. מידע שאנו אוספים</h2>
            <p className="text-slate mb-4">
              כאשר אתם ממלאים טופס יצירת קשר באתר, אנו אוספים:
            </p>
            <ul className="list-disc list-inside text-slate mb-6 space-y-2">
              <li>שם מלא</li>
              <li>כתובת דואר אלקטרוני</li>
              <li>מספר טלפון (אופציונלי)</li>
              <li>תוכן הפנייה שלכם</li>
            </ul>

            <h2 className="text-2xl font-bold text-ink mb-4">2. שימוש במידע</h2>
            <p className="text-slate mb-4">
              אנו משתמשים במידע שאתם מספקים לנו כדי:
            </p>
            <ul className="list-disc list-inside text-slate mb-6 space-y-2">
              <li>לענות על פניותיכם</li>
              <li>לספק מידע על השירותים שלנו</li>
              <li>לשלוח עדכונים רלוונטיים (אם ביקשתם זאת)</li>
            </ul>
            <p className="text-slate mb-6">
              <strong>אנו לא נשתף את המידע שלכם עם צדדים שלישיים</strong> ללא הסכמתכם המפורשת.
            </p>

            <h2 className="text-2xl font-bold text-ink mb-4">3. Cookies ואנליטיקס</h2>
            <p className="text-slate mb-4">
              אנו משתמשים ב-Google Analytics כדי להבין כיצד משתמשים מבקרים באתר ולשפר את החוויה. 
              המידע הנאסף כולל:
            </p>
            <ul className="list-disc list-inside text-slate mb-6 space-y-2">
              <li>דפים שבוקרו</li>
              <li>זמן שהייה באתר</li>
              <li>מקור התנועה (Google, פייסבוק וכו')</li>
              <li>מידע טכני (סוג דפדפן, מכשיר)</li>
            </ul>
            <p className="text-slate mb-6">
              מידע זה הוא <strong>אנונימי</strong> ולא מזהה אתכם אישית.
            </p>

            <h2 className="text-2xl font-bold text-ink mb-4">4. אבטחת מידע</h2>
            <p className="text-slate mb-6">
              אנו נוקטים באמצעי אבטחה סבירים כדי להגן על המידע שלכם מפני גישה לא מורשית, 
              שינוי או חשיפה. האתר מוגן באמצעות הצפנת SSL (HTTPS).
            </p>

            <h2 className="text-2xl font-bold text-ink mb-4">5. הזכויות שלכם</h2>
            <p className="text-slate mb-4">
              אתם זכאים:
            </p>
            <ul className="list-disc list-inside text-slate mb-6 space-y-2">
              <li>לבקש לראות את המידע שיש לנו עליכם</li>
              <li>לבקש עדכון או מחיקה של מידע</li>
              <li>להסיר את עצמכם מרשימת התפוצה בכל עת</li>
            </ul>

            <h2 className="text-2xl font-bold text-ink mb-4">6. שינויים במדיניות</h2>
            <p className="text-slate mb-6">
              אנו עשויים לעדכן מדיניות זו מעת לעת. כל שינוי יפורסם בעמוד זה עם תאריך העדכון.
            </p>

            <h2 className="text-2xl font-bold text-ink mb-4">7. יצירת קשר</h2>
            <p className="text-slate mb-4">
              לשאלות או בקשות בנוגע למדיניות הפרטיות, אתם מוזמנים:
            </p>
            <ul className="list-disc list-inside text-slate mb-6 space-y-2">
              <li>לפנות דרך <Link href="/contact" className="text-electricBlue hover:underline">דף יצירת הקשר</Link></li>
              <li>לשלוח דוא"ל ל-galsamama@gmail.com</li>
              <li>ליצור קשר ב-WhatsApp: 050-4650155</li>
            </ul>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
              <p className="text-sm text-blue-900">
                <strong>שקיפות מלאה:</strong> אנו מתחייבים לשמור על הפרטיות שלכם ולהשתמש 
                במידע שלכם אך ורק למטרות שצוינו לעיל.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}

