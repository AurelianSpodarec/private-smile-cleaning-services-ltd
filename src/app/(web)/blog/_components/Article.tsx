// import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { type ArticleWithSlug, getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'
import Link from 'next/link'


function Article({ article }: { article: ArticleWithSlug }) {
  return (
    <article className=" bg-[#141415] rounded-lg p-4 border border-[#2a2a27]">
      <div className="">

        <div className="h-48 relative overflow-hidden mb-8">
          <img className="w-full h-full rounded-lg object-fit test-card" src={article.thumbnail} />
        </div>
        <div>
          <span className="text-primary">{article.category}</span>
          <Link href={"/blog/" + article.slug}>
            <h3 className="text-lg text-gray-100">{article.title}</h3>
          </Link>
          <p className="text-gray-300 text-sm">{article.excerpt}</p>
        </div>

      </div>
      {/* <Card className="md:col-span-3">
        <Card.Title href={`/articles/${article.slug}`}>
          {article.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="md:hidden"
          decorate
        >
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(article.date)}
      </Card.Eyebrow> */}
    </article>
  )
}

export default Article;
