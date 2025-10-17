import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'מה AI עושה לעסק שלך? יתרונות בינה מלאכותית | AI לעסקים קטנים',
  description: 'גלו כיצד AI משפר מכירות, שיווק דיגיטלי, שירות לקוחות ואוטומציה בעסקים קטנים. דוגמאות מעשיות וכלים בעברית.',
  keywords: 'AI לעסקים, בינה מלאכותית לעסק, שיווק דיגיטלי AI, אוטומציה עסקית, ChatGPT לעסק, שירות לקוחות AI',
  openGraph: {
    title: 'מה AI עושה לעסק שלך? יתרונות בינה מלאכותית',
    description: 'גלו כיצד AI משפר מכירות, שיווק דיגיטלי, שירות לקוחות ואוטומציה בעסקים קטנים',
    url: 'https://ai-for-business-one.vercel.app/value',
    siteName: 'AI לעסקים קטנים',
    locale: 'he_IL',
    type: 'website',
    images: [{
      url: 'https://ai-for-business-one.vercel.app/images/og-value.jpg',
      width: 1200,
      height: 630,
      alt: 'יתרונות AI לעסקים - שיווק, מכירות, שירות ותפעול',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'מה AI עושה לעסק שלך? יתרונות בינה מלאכותית',
    description: 'גלו כיצד AI משפר מכירות, שיווק דיגיטלי, שירות לקוחות ואוטומציה',
    images: ['https://ai-for-business-one.vercel.app/images/og-value.jpg'],
  },
  alternates: {
    canonical: 'https://ai-for-business-one.vercel.app/value',
  },
}

export default function ValueLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

