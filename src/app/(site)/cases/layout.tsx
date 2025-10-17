import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'סיפורי הצלחה – עסקים שהצליחו עם AI | מקרי בוחן אמיתיים',
  description: 'קראו כיצד קוסמטיקאית, מאמן כושר ופיצרייה שינו את העסק שלהם בעזרת בינה מלאכותית. תוצאות אמיתיות ומדידות.',
  keywords: 'סיפורי הצלחה AI, מקרי בוחן AI, AI לעסקים קטנים, המלצות לקוחות, תוצאות AI, עסקים בינה מלאכותית',
  openGraph: {
    title: 'סיפורי הצלחה – עסקים שהצליחו עם AI',
    description: 'קראו כיצד קוסמטיקאית, מאמן כושר ופיצרייה שינו את העסק שלהם בעזרת בינה מלאכותית',
    url: 'https://ai-for-business-one.vercel.app/cases',
    siteName: 'AI לעסקים קטנים',
    locale: 'he_IL',
    type: 'website',
    images: [{
      url: 'https://ai-for-business-one.vercel.app/images/og-cases.jpg',
      width: 1200,
      height: 630,
      alt: 'סיפורי הצלחה - עסקים שהצליחו עם AI',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'סיפורי הצלחה – עסקים שהצליחו עם AI',
    description: 'קראו כיצד עסקים קטנים שינו את העסק שלהם בעזרת בינה מלאכותית',
    images: ['https://ai-for-business-one.vercel.app/images/og-cases.jpg'],
  },
  alternates: {
    canonical: 'https://ai-for-business-one.vercel.app/cases',
  },
}

export default function CasesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

