# AI לעסקים קטנים

אתר מכירות מקצועי לעסקים קטנים המעוניינים להטמיע AI בעסק שלהם.

## טכנולוגיות

- **Next.js 14** - React Framework עם App Router
- **TypeScript** - Type Safety
- **Tailwind CSS** - Styling
- **Framer Motion** - אנימציות
- **Lucide React** - אייקונים
- **Vercel Analytics** - אנליטיקות

## התקנה

1. התקנת dependencies:
```bash
npm install
```

2. הרצת הפרויקט בפיתוח:
```bash
npm run dev
```

3. בניית הפרויקט לפרודקשן:
```bash
npm run build
```

4. הרצת הפרויקט בפרודקשן:
```bash
npm start
```

## מבנה הפרויקט

```
src/
├── app/
│   └── (site)/
│       ├── layout.tsx          # Layout גלובלי
│       ├── page.tsx            # דף בית
│       ├── value/page.tsx      # מה AI עושה
│       ├── demos/page.tsx      # הדגמות
│       ├── plans/page.tsx      # חבילות
│       ├── cases/page.tsx      # סיפורי הצלחה
│       ├── contact/page.tsx    # צור קשר
│       └── privacy/page.tsx    # מדיניות פרטיות
├── components/
│   ├── Header.tsx              # כותרת עליונה
│   ├── Footer.tsx              # כותרת תחתונה
│   ├── CTAButton.tsx           # כפתור CTA
│   ├── Section.tsx             # רכיב סקשן
│   ├── BenefitCard.tsx         # כרטיס יתרון
│   ├── BeforeAfter.tsx         # לפני/אחרי
│   ├── Steps.tsx               # שלבים
│   ├── ValueCard.tsx           # כרטיס ערך
│   ├── DemoBlocks.tsx          # בלוקי הדגמה
│   ├── PricingTable.tsx        # טבלת תמחור
│   └── CaseCard.tsx            # כרטיס מקרה
└── lib/
    └── analytics.ts            # הגדרות אנליטיקות
```

## פיצ'רים

- **עיצוב רספונסיבי** - מותאם לכל המכשירים
- **אנימציות חלקות** - עם Framer Motion
- **SEO מותאם** - מטא-דאטה מלא לכל עמוד
- **אנליטיקות** - Vercel Analytics מובנה
- **נגישות** - תמיכה ב-RTL ועברית
- **ביצועים** - אופטימיזציה מלאה

## פריסה ל-Vercel

1. העלו את הקוד ל-GitHub
2. חברו את הריפו ל-Vercel
3. הפרויקט יועלה אוטומטית

## התאמה אישית

### צבעים
עדכנו את הצבעים ב-`tailwind.config.js`:
- `electricBlue: '#2563eb'`
- `deepPurple: '#7c3aed'`
- `ink: '#0f172a'`
- `slate: '#475569'`
- `mint: '#22c55e'`

### תוכן
עדכנו את הטקסטים בכל עמוד לפי הצרכים שלכם.

### קישורים
עדכנו את מספר הטלפון והמייל ב-`Footer.tsx` ו-`contact/page.tsx`.

## רישיון

MIT License