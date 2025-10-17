import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'מדיניות פרטיות ותנאי שימוש | AI לעסקים קטנים',
  description: 'כאן תמצאו מידע על השמירה על הנתונים שלכם והשימוש במידע באתר. מדיניות פרטיות שקופה ופשוטה.',
  keywords: 'מדיניות פרטיות, תנאי שימוש, הגנת מידע, AI לעסקים',
  robots: 'index, follow',
  openGraph: {
    title: 'מדיניות פרטיות ותנאי שימוש',
    description: 'כאן תמצאו מידע על השמירה על הנתונים שלכם והשימוש במידע באתר',
    url: 'https://ai-for-business-one.vercel.app/privacy',
    siteName: 'AI לעסקים קטנים',
    locale: 'he_IL',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'מדיניות פרטיות ותנאי שימוש',
    description: 'מידע על השמירה על הנתונים שלכם',
  },
  alternates: {
    canonical: 'https://ai-for-business-one.vercel.app/privacy',
  },
}

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

