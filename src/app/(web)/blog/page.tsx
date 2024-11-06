import { type Metadata } from 'next'

import { type ArticleWithSlug, getAllArticles } from '@/lib/articles'
import Article from './_components/Article'
import ArticlesTabs from './_components/ArticleCategories'
import Container from '@/components/_layout/Container'

export const metadata: Metadata = {
  title: 'Articles',
  description: 'All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order.',
}

export default async function ArticlesIndex() {
  let articles = await getAllArticles()

  return (
    <div className="py-24">
      <Container>


        {/* <header className="flex justify-center mb-4">
        <div>
          <div className="text-center">
          <h2 className="text-gray-200 font-semibold text-6xl">My insights</h2>
          <p className="text-gray-300 text-lg">Things I've experienced and figured out with others</p>
          </div>
          </div>
          </header> */}

        <a className="bg-white border border-gray-100 hover:border-orange-500 transition duration-200 py-4 rounded-3xl flex flex-wrap mb-20" href="#">
          <div className="w-full lg:w-1/2 px-4">
            <div className="flex flex-col justify-center items-start h-full py-8">
              <h2 className="text-2xl lg:text-3xl font-bold font-heading mb-4 max-w-sm">How to Learn Anything Faster and Master It</h2>
              <p className="text-gray-500 mb-10">Read on to find out what the technique is, what it’s used for, and how you can apply it to your studies here are some tips on ...</p>
              <div className="flex flex-wrap items-center gap-3">
                <p className="text-gray-500 text-sm">17 Jul 2023</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none"><circle cx="2" cy="2" r="2" fill="#B8B8B8"></circle></svg>
                <div className="py-1 px-3 rounded-md border border-gray-100 text-xs font-medium text-gray-700">Productivity</div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <div className="relative h-[364px]">
              <div className="absolute top-0 left-0 z-10">
                <svg className="rounded-tl-3xl" xmlns="http://www.w3.org/2000/svg" width="155" height="154" viewBox="0 0 155 154" fill="none">
                  <path d="M-34 79.9324V153.361C-34 153.714 -33.7141 154 -33.3615 154H17.62C17.9724 154 18.2585 153.714 18.2585 153.361V94.299C18.2585 55.5087 56.5087 17.2585 95.299 17.2585H154.361C154.714 17.2585 155 16.9724 155 16.62V-34.3615C155 -34.7139 154.714 -35 154.361 -35H80.9324C17.4572 -35 -34 16.4572 -34 79.9324Z" fill="#FF7100"></path>
                </svg>
              </div>
              <div className="absolute bottom-0 right-0 z-10">
                <svg className="rounded-br-3xl" xmlns="http://www.w3.org/2000/svg" width="154" height="158" viewBox="0 0 154 158" fill="none">
                  <path d="M189 74.0676V0.638514C189 0.286054 188.714 0 188.361 0H137.38C137.028 0 136.742 0.286054 136.742 0.638514V59.701C136.742 98.4913 98.4914 136.742 59.701 136.742H0.638514C0.286054 136.742 0 137.028 0 137.38V188.361C0 188.714 0.286054 189 0.638514 189H74.0676C137.543 189 189 137.543 189 74.0676Z" fill="#FF7100"></path>
                </svg>
              </div>
              <img className="absolute inset-0 w-full h-full object-cover rounded-3xl" src="solstice-assets/images/blog/picture-large.png" alt="" />
            </div>
          </div>
        </a>


        <h2 className="text-4xl font-bold font-heading mb-10">Latest articles</h2>
        <ArticlesTabs />
        <div className="flex flex-wrap">
          {articles.map((article) => (
            <Article key={article.slug} article={article} />
          ))}
        </div>

      </Container>
    </div>
  )
}
