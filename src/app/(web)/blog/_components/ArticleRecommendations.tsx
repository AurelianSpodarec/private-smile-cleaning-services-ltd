import Article from "@/app/(web)/blog/_components/Article"
import { getRandomArticles } from "@/lib/articles"

async function ArticleRecommendations() {
  const articles = await getRandomArticles()

  return (
    <div>
      <h2 className="text-4xl font-bold font-heading mb-10">Other articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((article) => (
          <Article key={article.slug} article={article} />
        ))}
      </div>
    </div>
  )
}

export default ArticleRecommendations
