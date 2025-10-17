// Structured Data (Schema.org) helpers for SEO

export interface Article {
  headline: string
  description: string
  author: string
  datePublished: string
  dateModified?: string
  image?: string
  url: string
}

export interface Product {
  name: string
  description: string
  price: string
  currency: string
  url: string
}

export interface LocalBusiness {
  name: string
  description: string
  url: string
  telephone?: string
  email?: string
  address?: {
    streetAddress?: string
    addressLocality?: string
    addressCountry?: string
  }
}

export function generateArticleSchema(article: Article) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.headline,
    description: article.description,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    image: article.image,
    url: article.url,
  }
}

export function generateProductSchema(product: Product) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: product.currency,
      url: product.url,
      availability: 'https://schema.org/InStock',
    },
  }
}

export function generateLocalBusinessSchema(business: LocalBusiness) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: business.name,
    description: business.description,
    url: business.url,
    telephone: business.telephone,
    email: business.email,
    address: business.address ? {
      '@type': 'PostalAddress',
      streetAddress: business.address.streetAddress,
      addressLocality: business.address.addressLocality,
      addressCountry: business.address.addressCountry,
    } : undefined,
  }
}

export function generateOrganizationSchema(org: { name: string; url: string; logo?: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: org.name,
    url: org.url,
    logo: org.logo,
  }
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

