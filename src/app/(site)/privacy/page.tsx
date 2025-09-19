import Section from '@/components/Section'

export default function PrivacyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-electricBlue/5 to-deepPurple/5 section-padding">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-ink mb-6">
            מדיניות פרטיות
          </h1>
          <p className="text-xl text-slate max-w-3xl mx-auto leading-relaxed">
            אנו מחויבים להגן על הפרטיות שלכם
          </p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <Section>
        <div className="max-w-4xl mx-auto prose prose-lg">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
            <h2 className="text-2xl font-bold text-ink mb-6">איסוף מידע</h2>
            <p className="text-slate mb-4">
              אנו אוספים מידע אישי שאתם מספקים לנו מרצונכם, כגון שם, כתובת מייל ומספר טלפון, 
              כאשר אתם ממלאים טופס צור קשר או מתקשרים איתנו.
            </p>

            <h2 className="text-2xl font-bold text-ink mb-6 mt-8">שימוש במידע</h2>
            <p className="text-slate mb-4">
              המידע שאנו אוספים משמש אותנו כדי:
            </p>
            <ul className="list-disc list-inside text-slate mb-4 space-y-2">
              <li>להשיב לשאלותיכם ולספק שירותים</li>
              <li>לשפר את השירותים שלנו</li>
              <li>לשלוח עדכונים רלוונטיים (רק אם הסכמתם)</li>
            </ul>

            <h2 className="text-2xl font-bold text-ink mb-6 mt-8">הגנה על המידע</h2>
            <p className="text-slate mb-4">
              אנו נוקטים באמצעי אבטחה מתאימים כדי להגן על המידע האישי שלכם מפני גישה לא מורשית, 
              שינוי, חשיפה או השמדה.
            </p>

            <h2 className="text-2xl font-bold text-ink mb-6 mt-8">שיתוף מידע</h2>
            <p className="text-slate mb-4">
              אנו לא מוכרים, משכירים או חולקים את המידע האישי שלכם עם צדדים שלישיים, 
              למעט במקרים הבאים:
            </p>
            <ul className="list-disc list-inside text-slate mb-4 space-y-2">
              <li>כאשר יש צורך משפטי</li>
              <li>כאשר אתם נותנים הסכמה מפורשת</li>
              <li>עם ספקי שירותים מהימנים שעובדים בשמנו</li>
            </ul>

            <h2 className="text-2xl font-bold text-ink mb-6 mt-8">זכויותיכם</h2>
            <p className="text-slate mb-4">
              יש לכם זכות לבקש גישה למידע האישי שלכם, לתקן אותו, למחוק אותו או להגביל את השימוש בו. 
              אם יש לכם שאלות או בקשות, אנא צרו איתנו קשר.
            </p>

            <h2 className="text-2xl font-bold text-ink mb-6 mt-8">שינויים במדיניות</h2>
            <p className="text-slate mb-4">
              אנו עשויים לעדכן מדיניות פרטיות זו מעת לעת. כל שינוי יפורסם בעמוד זה עם תאריך העדכון.
            </p>

            <h2 className="text-2xl font-bold text-ink mb-6 mt-8">צור קשר</h2>
            <p className="text-slate mb-4">
              אם יש לכם שאלות לגבי מדיניות פרטיות זו, אנא צרו איתנו קשר:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-slate">
                <strong>מייל:</strong> info@ai-small-business.com<br />
                <strong>טלפון:</strong> 050-123-4567
              </p>
            </div>

            <p className="text-sm text-gray-500 mt-8">
              עדכון אחרון: {new Date().toLocaleDateString('he-IL')}
            </p>
          </div>
        </div>
      </Section>
    </>
  )
}
