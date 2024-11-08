'use client'

import { formatDate } from '@/lib/formatDate'
import { type ArticleWithSlug } from '@/lib/articles'

import Container from '../../../../components/_layout/Container'
import { Prose } from '../../../../components/Prose'

export function LegalLayout({ article, children }: { article: ArticleWithSlug, children: React.ReactNode }) {
  return (
    <article>
      <Container className="mx-auto my-16 lg:my-32" size="3xl">

        <header className="text-center mb-20 space-y-2">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">{article.title}</h1>
          <p className="mt-4 text-base leading-7 text-slate-600">Last updated on {formatDate(article.date)}</p>
        </header>

        <Prose className="mx-auto max-w-none" data-mdx-content>
          {children}
        </Prose>

      </Container>
    </article>
  )
}
