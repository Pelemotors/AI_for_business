'use client'

import { motion } from 'framer-motion'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Home } from 'lucide-react'
import CTAButton from '@/components/CTAButton'
import { getArticleById, getNextArticle, getPreviousArticle } from '@/lib/articles'

interface ArticlePageProps {
  params: {
    id: string
  }
}

// פונקציה להמרת markdown ל-HTML פשוט
function parseMarkdown(content: string) {
  const lines = content.split('\n')
  const elements: JSX.Element[] = []
  let key = 0

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim()
    
    if (line === '') {
      elements.push(<br key={key++} />)
      continue
    }

    // כותרות ##
    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={key++} className="text-2xl font-bold text-ink mt-8 mb-4">
          {line.replace('## ', '')}
        </h2>
      )
      continue
    }

    // כותרות ###
    if (line.startsWith('### ')) {
      elements.push(
        <h3 key={key++} className="text-xl font-bold text-ink mt-6 mb-3">
          {line.replace('### ', '')}
        </h3>
      )
      continue
    }

    // רשימות עם -
    if (line.startsWith('- ')) {
      const listItems = [line.replace('- ', '')]
      // אוסף פריטי רשימה נוספים
      while (i + 1 < lines.length && lines[i + 1].trim().startsWith('- ')) {
        i++
        listItems.push(lines[i].trim().replace('- ', ''))
      }
      
      elements.push(
        <ul key={key++} className="list-disc list-inside mb-4 space-y-2">
          {listItems.map((item, idx) => (
            <li key={idx} className="text-gray-700 leading-relaxed">
              {parseInlineMarkdown(item)}
            </li>
          ))}
        </ul>
      )
      continue
    }

    // טקסט רגיל
    if (line) {
      elements.push(
        <p key={key++} className="text-gray-700 leading-relaxed mb-4">
          {parseInlineMarkdown(line)}
        </p>
      )
    }
  }

  return elements
}

// פונקציה לטיפול ב-markdown בתוך שורות
function parseInlineMarkdown(text: string): JSX.Element[] {
  const elements: JSX.Element[] = []
  let key = 0
  
  // קישורים [טקסט](URL)
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g
  let lastIndex = 0
  let match

  while ((match = linkRegex.exec(text)) !== null) {
    // טקסט לפני הקישור
    if (match.index > lastIndex) {
      const beforeText = text.slice(lastIndex, match.index)
      elements.push(
        <span key={key++}>
          {parseBoldText(beforeText)}
        </span>
      )
    }

    // הקישור עצמו
    elements.push(
      <Link 
        key={key++} 
        href={match[2]} 
        className="text-electricBlue hover:text-electricBlue/80 underline"
      >
        {match[1]}
      </Link>
    )

    lastIndex = match.index + match[0].length
  }

  // טקסט אחרי הקישור האחרון
  if (lastIndex < text.length) {
    const afterText = text.slice(lastIndex)
    elements.push(
      <span key={key++}>
        {parseBoldText(afterText)}
      </span>
    )
  }

  return elements.length > 0 ? elements : [<span key={0}>{parseBoldText(text)}</span>]
}

// פונקציה לטיפול בטקסט מודגש **טקסט**
function parseBoldText(text: string): JSX.Element[] {
  const elements: JSX.Element[] = []
  let key = 0
  
  const boldRegex = /\*\*([^*]+)\*\*/g
  let lastIndex = 0
  let match

  while ((match = boldRegex.exec(text)) !== null) {
    // טקסט לפני המודגש
    if (match.index > lastIndex) {
      elements.push(
        <span key={key++}>
          {text.slice(lastIndex, match.index)}
        </span>
      )
    }

    // הטקסט המודגש
    elements.push(
      <strong key={key++} className="font-bold text-ink">
        {match[1]}
      </strong>
    )

    lastIndex = match.index + match[0].length
  }

  // טקסט אחרי המודגש האחרון
  if (lastIndex < text.length) {
    elements.push(
      <span key={key++}>
        {text.slice(lastIndex)}
      </span>
    )
  }

  return elements.length > 0 ? elements : [<span key={0}>{text}</span>]
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const articleId = parseInt(params.id)
  const article = getArticleById(articleId)
  
  if (!article) {
    notFound()
  }

  const nextArticle = getNextArticle(articleId)
  const previousArticle = getPreviousArticle(articleId)

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-electricBlue/5 to-deepPurple/5 section-padding">
        <div className="container-max">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-6 text-sm text-gray-600">
            <Link href="/" className="hover:text-electricBlue flex items-center gap-1">
              <Home className="h-4 w-4" />
              בית
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-electricBlue">
              בלוג
            </Link>
            <span>/</span>
            <span className="text-ink font-medium">{article.title}</span>
          </div>

          {/* Article Header */}
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="text-4xl">{article.image}</span>
              <span className="inline-block bg-electricBlue/10 text-electricBlue px-4 py-2 rounded-full text-sm font-medium">
                {article.category}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ink mb-6 leading-tight">
              {article.title}
            </h1>
            
            <p className="text-xl text-slate leading-relaxed">
              {article.excerpt}
            </p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="bg-white py-16">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <motion.article
              className="prose prose-lg max-w-none"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {parseMarkdown(article.content)}
            </motion.article>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-electricBlue/5 to-deepPurple/5 py-16">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold text-ink mb-6">
            מוכנים להתחיל?
          </h2>
          <p className="text-xl text-slate mb-8 max-w-2xl mx-auto">
            רוצים ליישם את מה שלמדתם במאמר? בואו נעזור לכם להתחיל
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/contact" variant="primary" className="text-lg px-8 py-4">
              צרו קשר
            </CTAButton>
            <CTAButton href="/demos" variant="secondary" className="text-lg px-8 py-4">
              ראו הדגמות
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="bg-white py-12 border-t border-gray-200">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
              {/* Previous Article */}
              <div className="flex-1">
                {previousArticle ? (
                  <Link 
                    href={`/blog/${previousArticle.id}`}
                    className="group flex items-center gap-3 p-4 rounded-lg border border-gray-200 hover:border-electricBlue hover:shadow-md transition-all duration-300"
                  >
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-electricBlue" />
                    <div>
                      <p className="text-sm text-gray-500 mb-1">מאמר קודם</p>
                      <p className="font-medium text-ink group-hover:text-electricBlue">
                        {previousArticle.title}
                      </p>
                    </div>
                  </Link>
                ) : (
                  <div className="p-4 rounded-lg border border-gray-100 bg-gray-50">
                    <p className="text-sm text-gray-400">זה המאמר הראשון</p>
                  </div>
                )}
              </div>

              {/* Back to Blog */}
              <div className="flex-shrink-0">
                <Link 
                  href="/blog"
                  className="flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" />
                  חזרה לבלוג
                </Link>
              </div>

              {/* Next Article */}
              <div className="flex-1">
                {nextArticle ? (
                  <Link 
                    href={`/blog/${nextArticle.id}`}
                    className="group flex items-center gap-3 p-4 rounded-lg border border-gray-200 hover:border-electricBlue hover:shadow-md transition-all duration-300"
                  >
                    <div className="text-right">
                      <p className="text-sm text-gray-500 mb-1">מאמר הבא</p>
                      <p className="font-medium text-ink group-hover:text-electricBlue">
                        {nextArticle.title}
                      </p>
                    </div>
                    <ArrowLeft className="h-5 w-5 text-gray-400 group-hover:text-electricBlue" />
                  </Link>
                ) : (
                  <div className="p-4 rounded-lg border border-gray-100 bg-gray-50">
                    <p className="text-sm text-gray-400">זה המאמר האחרון</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
