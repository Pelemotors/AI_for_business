# AI לנוער - אתר קורס AI לנוער

אתר מקצועי ומודרני לקורס AI לנוער, עם עיצוב מושך ואנימציות מתקדמות.

## 🚀 התחלה מהירה

### דרישות מוקדמות
- Node.js 18+ 
- npm או yarn

### התקנה והפעלה

1. **התקנת חבילות**
```bash
npm install
```

2. **הפעלת השרת המקומי**
```bash
npm run dev
```

3. **פתיחת האתר**
פתחו את הדפדפן וגשו לכתובת: `http://localhost:3000`

## 📁 מבנה הפרויקט

```
src/
├── app/                    # App Router של Next.js
│   ├── layout.tsx         # Layout ראשי
│   ├── page.tsx           # דף בית
│   ├── globals.css        # עיצוב גלובלי
│   ├── about/             # עמוד "על המרצה"
│   ├── learn/             # עמוד "מה לומדים"
│   ├── why/               # עמוד "למה זה חשוב"
│   ├── works/             # עמוד "תוצרים"
│   └── contact/           # עמוד "צור קשר"
├── components/            # רכיבי UI
│   ├── Header.tsx         # תפריט עליון
│   └── Footer.tsx         # תפריט תחתון
└── lib/                   # פונקציות עזר (עתידי)
```

## 🎨 עיצוב וצבעים

### פלטת צבעים
- **כחול חשמלי**: `#3b82f6` - צבע ראשי
- **סגול**: `#9333ea` - צבע משני
- **ירוק ניאון**: `#22c55e` - צבע הדגשה
- **לבן**: `#ffffff` - רקע

### פונטים
- **Rubik** - פונט ראשי (עברית ואנגלית)
- **Heebo** - פונט משני (עברית)

## 🛠 טכנולוגיות

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **TailwindCSS** - Styling
- **Framer Motion** - אנימציות
- **Lucide React** - אייקונים
- **Supabase** - מסד נתונים (עתידי)

## 📱 תכונות

### ✅ הושלם
- [x] תשתית פרויקט מלאה
- [x] דף בית עם Hero Section
- [x] עמוד "מה לומדים"
- [x] עמוד "על המרצה"
- [x] עמוד "למה זה חשוב"
- [x] עמוד "תוצרים ותלמידים"
- [x] עמוד "צור קשר" עם טופס
- [x] Header ו-Footer רספונסיביים
- [x] אנימציות עם Framer Motion
- [x] עיצוב רספונסיבי מלא
- [x] תמיכה בעברית (RTL)

### 🔄 בתהליך
- [ ] חיבור מסד נתונים (Supabase)
- [ ] Google Analytics
- [ ] reCAPTCHA לטפסים
- [ ] SEO מתקדם

### 📋 תוכניות עתידיות
- [ ] בלוג להורים
- [ ] מערכת הרשמה מתקדמת
- [ ] דשבורד לניהול תלמידים
- [ ] מערכת תשלומים

## 🚀 Deployment

### Vercel (מומלץ)
1. העלו את הקוד ל-GitHub
2. חיברו את ה-repository ל-Vercel
3. הגדירו Environment Variables
4. האתר יעלה אוטומטית

### Environment Variables נדרשים
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
NEXT_PUBLIC_GA_MEASUREMENT_ID=your_ga_id
```

## 📞 תמיכה

לשאלות או בעיות:
- 📧 Email: info@ai-lanoar.co.il
- 📱 WhatsApp: 050-123-4567

## 📄 רישיון

כל הזכויות שמורות © 2024 AI לנוער
