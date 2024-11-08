const articleCategories = {
  all: { name: 'All', slug: 'all' },
  'tips-and-tricks': { name: 'Tips & Tricks', slug: 'tips-and-tricks' },
  'eco-friendly': { name: 'Eco-Friendly', slug: 'eco-friendly' },
  'home-maintenance': { name: 'Home Maintenance', slug: 'home-maintenance' },
  'health-and-safety': { name: 'Health & Safety', slug: 'health-and-safety' },
  'company-promotion': { name: 'Company Promotion', slug: 'company-promotion' },
  'customer-engagement': { name: 'Customer Engagement', slug: 'customer-engagement' },
  faqs: { name: 'FAQs', slug: 'faqs' }
} as const;

export default articleCategories;

export type IArticleCategory = typeof articleCategories;
export type IArticleCategoryKeys = keyof IArticleCategory;
export type IArticleCategoryValues = IArticleCategory[IArticleCategoryKeys];
