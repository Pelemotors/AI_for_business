import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'חבילות ליווי דיגיטלי – מסלולים לבעלי עסקים | AI לעסקים',
  description: 'בחרו מסלול מותאם: VIP, פרימיום או בסיס. ליווי אישי להטמעת AI בעסק שלכם עם כלים מעשיים ותוצאות מובטחות.',
  keywords: 'חבילות AI, ליווי עסקי AI, סדנת ChatGPT, ליווי דיגיטלי, מסלול VIP, פרימיום AI, בסיס AI',
  openGraph: {
    title: 'חבילות ליווי דיגיטלי – מסלולים לבעלי עסקים',
    description: 'בחרו מסלול מותאם: VIP, פרימיום או בסיס. ליווי אישי להטמעת AI בעסק שלכם',
    url: 'https://ai-for-business-one.vercel.app/plans',
    siteName: 'AI לעסקים קטנים',
    locale: 'he_IL',
    type: 'website',
    images: [{
      url: 'https://ai-for-business-one.vercel.app/images/og-plans.jpg',
      width: 1200,
      height: 630,
      alt: 'חבילות ליווי AI לעסקים - VIP, פרימיום, בסיס',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'חבילות ליווי דיגיטלי – מסלולים לבעלי עסקים',
    description: 'בחרו מסלול מותאם: VIP, פרימיום או בסיס. ליווי אישי להטמעת AI',
    images: ['https://ai-for-business-one.vercel.app/images/og-plans.jpg'],
  },
  alternates: {
    canonical: 'https://ai-for-business-one.vercel.app/plans',
  },
}

export default function PlansLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

