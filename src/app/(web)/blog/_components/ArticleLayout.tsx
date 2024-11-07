import Image from 'next/image'
import { Prose } from '../../../../components/Prose'

import Container from '../../../../components/_layout/Container'
import Section from '../../../../components/_layout/Section'

import { type ArticleWithSlug } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'

import ArticleRecommendations from './ArticleRecommendations'

export function ArticleLayout({ article, children }: { article: ArticleWithSlug, children: React.ReactNode }) {
  return (
    <>
      <Container size="3xl">
        <article className="xl:relative py-12">

          <header className="flex flex-col">
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100 mb-6">
              {article.title}
            </h1>
            <div className="space-x-4">
              <span>
                By CleaningSmile
              </span>
              <time dateTime={article.date}>
                <span className="ml-3">{formatDate(article.date)}</span>
              </time>
              <span>
                {article.category}
              </span>
            </div>
          </header>

          <Image src={article.thumbnail} alt="Thumbnail" width={1500} height={500} className="lg:-mx-[30%] lg:max-w-[160%] max-h-[750px] object-cover rounded-lg my-14" />

          <Prose className="mt-8" data-mdx-content>
            {children}
          </Prose>

        </article>
      </Container>

      <Container>
        <Section>
          <ArticleRecommendations />
        </Section>
      </Container>
    </>
  )
}
