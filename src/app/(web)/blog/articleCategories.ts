const articleCategories = {
  all: "All",
  "tips-and-tricks": "Tips & Tricks",
  "eco-friendly": "Eco-Friendly",
  "home-maintenance": "Home Maintenance",
  "health-and-safety": "Health & Safety",
  "company-promotion": "Company Promotion",
  "customer-engagement": "Customer Engagement",
  faqs: "FAQs"
} as const;

export default articleCategories

export type IArticleCategoryKeys = keyof typeof articleCategories;
export type IArticleCategoryValues = typeof articleCategories[IArticleCategoryKeys];
