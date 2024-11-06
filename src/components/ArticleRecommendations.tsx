import Article from "@/app/(web)/blog/_components/Article"
import { getRandomArticles } from "@/lib/articles"

async function ArticleRecommendations() {
  const articles = await getRandomArticles()

  return (
    <div>
      <h2 className="text-4xl font-bold font-heading mb-10">Other articles</h2>
      <div className="flex flex-wrap">
        {articles.map((article) => (
          <Article key={article.slug} article={article} className=" md:w-1/3" />
        ))}
      </div>
    </div>
  )
}

export default ArticleRecommendations
