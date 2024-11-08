'use client'

import { type ArticleWithSlug } from '@/lib/articles'

import Container from '@/components/_layout/Container'
import { Prose } from '@/components/Prose'

export function CareerLayout({ job, children }: { job: ArticleWithSlug, children: React.ReactNode }) {
  return (
    <Container className="my-16 lg:my-20" size="4xl">

      <article>
        <header className="flex flex-col">
          <h1 className="my-6 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            {job.title}
          </h1>
        </header>
        <Prose className="mx-auto max-w-none" data-mdx-content>
          {children}
        </Prose>
      </article>

    </Container>
  )
}
