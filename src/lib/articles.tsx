import { IArticleCategoryKeys } from '@/app/(web)/blog/articleCategories'
import glob from 'fast-glob'

interface Article {
  title: string
  description: string
  author: string
  date: string
  thumbnail: string
  category: string
}

export interface ArticleWithSlug extends Article {
  slug: string
}

async function importArticle(
  articleFilename: string,
): Promise<ArticleWithSlug> {
  let { article } = (await import(`../app/(web)/blog/${articleFilename}`)) as {
    default: React.ComponentType
    article: Article
  }

  return {
    slug: articleFilename.replace(/(\/page)?\.mdx$/, ''),
    ...article,
  }
}

export async function getAllArticles(category?: IArticleCategoryKeys): Promise<ArticleWithSlug[]> {
  let articleFilenames = await glob('*/page.mdx', {
    cwd: './src/app/(web)/blog',
  })

  let articles = await Promise.all(articleFilenames.map(importArticle))

  // Sort articles by date (newest first)
  articles.sort((a, z) => +new Date(z.date) - +new Date(a.date))

  // If category is provided, filter by category key
  if (category) {
    articles = articles.filter(article => {
      // Ensure article.category is a string before calling toLowerCase
      return article.category && typeof article.category === 'string' &&
        article.category.toLowerCase() === category.toLowerCase()
    })
  }

  return articles
}


export async function getRandomArticles(count: number = 3) {
  let allArticles = await getAllArticles()

  let shuffledArticles = allArticles
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)

  return shuffledArticles.slice(0, count)
}
