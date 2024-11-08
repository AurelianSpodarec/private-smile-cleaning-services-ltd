import { IArticleCategoryKeys } from '@/app/(web)/blog/articleCategories';
import glob from 'fast-glob';

interface Article {
  title: string;
  description: string;
  author: string;
  date: string;
  thumbnail: string;
  category: IArticleCategoryKeys; // Should store the category key, not the name or slug
}

export interface ArticleWithSlug extends Article {
  slug: string;
}

async function importArticle(articleFilename: string): Promise<ArticleWithSlug> {
  const { article } = (await import(`../app/(web)/blog/${articleFilename}`)) as {
    default: React.ComponentType;
    article: Article;
  };

  return {
    slug: articleFilename.replace(/(\/page)?\.mdx$/, ''),
    ...article,
  };
}

export async function getAllArticles(category?: IArticleCategoryKeys): Promise<ArticleWithSlug[]> {
  const articleFilenames = await glob('*/page.mdx', {
    cwd: './src/app/(web)/blog',
  });

  let articles = await Promise.all(articleFilenames.map(importArticle));

  // Sort articles by date (newest first)
  articles.sort((a, z) => +new Date(z.date) - +new Date(a.date));

  // If category is provided, filter by category key (use the key for matching)
  if (category) {
    const decodedCategory = decodeURIComponent(category);
    articles = articles.filter(
      article => article.category.toLowerCase() === decodedCategory.toLowerCase()
    );
  }

  return articles;
}

export async function getRandomArticles(count: number = 3): Promise<ArticleWithSlug[]> {
  const allArticles = await getAllArticles();

  const shuffledArticles = allArticles
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  return shuffledArticles.slice(0, count);
}
