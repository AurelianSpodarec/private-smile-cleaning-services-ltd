import Link from 'next/link';
import { type ArticleWithSlug } from '@/lib/articles'

function Article({ article, className }: { article: ArticleWithSlug, className?: string }) {
  return (
    <article className={`w-full ${className}`}>
      <Link className="group" href={"/blog/" + article.slug}>
        <div className="group flex flex-col mb-5 overflow-hidden rounded-xl">
          <img className="w-full rounded-lg object-fit test-card h-[210px] object-cover" src={article.thumbnail} />
        </div>
        <p className="mb-4 font-heading font-medium text-xl text-gray-900 group-hover:underline">{article.title}</p>
        <h2 className="font-heading font-medium text-xs uppercase text-gray-500 tracking-px">{article.category}</h2>
      </Link>
    </article>
  )
}

export default Article;
