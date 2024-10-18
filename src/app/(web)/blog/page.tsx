import { type Metadata } from 'next'

import { type ArticleWithSlug, getAllArticles } from '@/lib/articles'
import Article from './_components/Article'

export const metadata: Metadata = {
  title: 'Articles',
  description: 'All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order.',
}

export default async function ArticlesIndex() {
  let articles = await getAllArticles()

  return (
    <div className="pt-24">

      <header className="flex justify-center mb-4">
        <div>

          <div className="text-center">
            <h2 className="text-gray-200 font-semibold text-6xl">My insights</h2>
            <p className="text-gray-300 text-lg">Things I've experienced and figured out with others</p>
          </div>

          {/* <input /> */}
        </div>
      </header>

      <div className="mx-auto max-w-7xl ">
        <div className="grid grid-cols-3 gap-6">
          {articles.map((article) => (
            <Article key={article.slug} article={article} />
          ))}
        </div>
      </div>
   
    </div>
  )
}
