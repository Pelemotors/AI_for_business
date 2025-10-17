import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'בלוג AI לעסקים – מדריכים, טיפים וכלים | ChatGPT בעברית',
  description: 'מאמרים בעברית על שימוש ב-GPT וכלי AI נוספים לניהול ושיווק עסקים קטנים. מדריכים מעשיים ודוגמאות אמיתיות.',
  keywords: 'בלוג AI, מדריכי ChatGPT, טיפים AI, כלי AI לעסקים, GPT בעברית, אוטומציה עסקית, שיווק AI',
  openGraph: {
    title: 'בלוג AI לעסקים – מדריכים, טיפים וכלים',
    description: 'מאמרים בעברית על שימוש ב-GPT וכלי AI נוספים לניהול ושיווק עסקים קטנים',
    url: 'https://ai-for-business-one.vercel.app/blog',
    siteName: 'AI לעסקים קטנים',
    locale: 'he_IL',
    type: 'website',
    images: [{
      url: 'https://ai-for-business-one.vercel.app/images/og-blog.jpg',
      width: 1200,
      height: 630,
      alt: 'בלוג AI לעסקים - מאמרים ומדריכים בעברית',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'בלוג AI לעסקים – מדריכים וטיפים',
    description: 'מאמרים בעברית על שימוש ב-GPT וכלי AI לעסקים קטנים',
    images: ['https://ai-for-business-one.vercel.app/images/og-blog.jpg'],
  },
  alternates: {
    canonical: 'https://ai-for-business-one.vercel.app/blog',
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

