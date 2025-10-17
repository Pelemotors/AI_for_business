import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'צור קשר – ייעוץ ותמיכה בבינה מלאכותית | AI לעסקים',
  description: 'מלאו טופס, שלחו WhatsApp או התקשרו. אנחנו כאן לעזור בכל שאלה על AI לעסק שלכם. ייעוץ ראשוני ללא עלות.',
  keywords: 'צור קשר AI, ייעוץ AI לעסקים, תמיכה בינה מלאכותית, קבעו שיחה, ייעוץ ChatGPT',
  openGraph: {
    title: 'צור קשר – ייעוץ ותמיכה בבינה מלאכותית',
    description: 'מלאו טופס, שלחו WhatsApp או התקשרו. אנחנו כאן לעזור בכל שאלה',
    url: 'https://ai-for-business-one.vercel.app/contact',
    siteName: 'AI לעסקים קטנים',
    locale: 'he_IL',
    type: 'website',
    images: [{
      url: 'https://ai-for-business-one.vercel.app/images/og-contact.jpg',
      width: 1200,
      height: 630,
      alt: 'צור קשר - AI לעסקים קטנים',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'צור קשר – ייעוץ ותמיכה בבינה מלאכותית',
    description: 'מלאו טופס, שלחו WhatsApp או התקשרו. אנחנו כאן לעזור',
    images: ['https://ai-for-business-one.vercel.app/images/og-contact.jpg'],
  },
  alternates: {
    canonical: 'https://ai-for-business-one.vercel.app/contact',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

