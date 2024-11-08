import { type Metadata } from 'next'

import Container from '@/components/_layout/Container'
import { type ArticleWithSlug, getAllArticles } from '@/lib/articles'

import Article from './_components/Article'
import ArticlesTabs from './_components/ArticleCategories'

export const metadata: Metadata = {
  title: 'Articles',
  description: 'All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order.',
}

export default async function ArticlesIndex({ searchParams }) {
  const selectedCategory = searchParams.category || null;
  const articles = await getAllArticles(selectedCategory === 'All' ? undefined : selectedCategory);

  console.log(articles)
  return (
    <div className="py-24">
      <Container>
        <section>
          <h2 className="text-4xl font-bold font-heading mb-10">Latest articles</h2>
          <ArticlesTabs />
          <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
}
