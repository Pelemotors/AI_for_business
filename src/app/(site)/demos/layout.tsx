import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'הדגמות חיות – כך נראה תהליך אוטומציה עם GPT | AI לעסקים',
  description: 'צפו בדמו חי של יצירת טקסטים אוטומטיים עם GPT לסוגי עסקים שונים. התחילו לבנות תוכן משלכם בקלות.',
  keywords: 'דמו GPT, הדגמת AI, מחולל טקסטים, ChatGPT לעסק, יצירת תוכן אוטומטי, כלי AI בעברית',
  openGraph: {
    title: 'הדגמות חיות – כך נראה תהליך אוטומציה עם GPT',
    description: 'צפו בדמו חי של יצירת טקסטים אוטומטיים עם GPT. התחילו לבנות את שלכם',
    url: 'https://ai-for-business-one.vercel.app/demos',
    siteName: 'AI לעסקים קטנים',
    locale: 'he_IL',
    type: 'website',
    images: [{
      url: 'https://ai-for-business-one.vercel.app/images/og-demos.jpg',
      width: 1200,
      height: 630,
      alt: 'הדגמת מחולל טקסטים עם GPT לעסקים',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'הדגמות חיות – תהליך אוטומציה עם GPT',
    description: 'צפו בדמו חי של יצירת טקסטים אוטומטיים. התחילו לבנות את שלכם',
    images: ['https://ai-for-business-one.vercel.app/images/og-demos.jpg'],
  },
  alternates: {
    canonical: 'https://ai-for-business-one.vercel.app/demos',
  },
}

export default function DemosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

