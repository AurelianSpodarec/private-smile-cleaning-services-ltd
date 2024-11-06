'use client'

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // For updating URL

import articleCategories from '../articleCategories';

function ArticlesTabs() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState(new URLSearchParams(window.location.search).get('category') || 'all'); // Initialize state for active category

  useEffect(() => {
    const handlePopState = () => {
      const category = new URLSearchParams(window.location.search).get('category') || 'all';
      setActiveCategory(category); // Update active category based on URL
    };

    window.addEventListener('popstate', handlePopState); // Listen for URL changes
    return () => window.removeEventListener('popstate', handlePopState); // Cleanup listener
  }, []);

  const activeClasses = 'border border-purple-700 bg-purple-900 hover:bg-purple-800 focus:ring focus:ring-purple-800 text-white';
  const inactiveClasses = 'border border-gray-200 bg-white hover:bg-gray-50 focus:ring focus:ring-orange-200';

  const handleCategoryChange = (categoryLabel) => {
    if (categoryLabel === 'all') {
      // If the "All" category is clicked, remove the query parameter entirely from the URL
      router.push(window.location.pathname); // Update the URL to remove '?category=all'
    } else {
      // For other categories, update the URL with the selected category
      router.push(`?category=${categoryLabel}`);
    }
    setActiveCategory(categoryLabel); // Update active category immediately
  };

  return (
    <div className="flex flex-wrap gap-2 mb-10">
      {Object.keys(articleCategories).map((key) => {
        const categoryLabel = articleCategories[key];

        return (
          <button
            key={key}
            onClick={(e) => {
              e.preventDefault();
              handleCategoryChange(key);
            }}
            className={`h-10 inline-flex items-center justify-center w-full sm:w-auto text-center py-3 px-5 rounded-full text-sm font-semibold transition duration-200 border focus:ring ${activeCategory === key ? activeClasses : inactiveClasses}`}
          >
            {categoryLabel}
          </button>
        );
      })}
    </div>
  );
}

export default ArticlesTabs;
