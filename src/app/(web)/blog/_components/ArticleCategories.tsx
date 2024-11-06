'use client'

import Link from 'next/link';
import React, { useState } from 'react';
import articleCategories from '../articleCategories';

function ArticlesTabs() {
  const [activeTab, setActiveTab] = useState('All Articles');

  const activeClasses = 'border border-purple-700 bg-purple-900 hover:bg-purple-800 focus:ring focus:ring-purple-800 text-white';
  const inactiveClasses = 'border border-gray-200 bg-white hover:bg-gray-50 focus:ring focus:ring-orange-200';

  return (
    <div className="flex flex-wrap gap-2 mb-10">
      {Object.keys(articleCategories).map((key) => {
        const categoryKey = key 
        //as ArticleCategory; // Ensure the key is typed as ArticleCategory
        const categoryLabel = articleCategories[categoryKey];

        return (
          <Link
            key={categoryKey}
            onClick={(e) => {
              e.preventDefault();
              setActiveTab(categoryLabel); // Set active tab to the label
            }}
            className={`h-10 inline-flex items-center justify-center w-full sm:w-auto text-center py-3 px-5 rounded-full text-sm font-semibold transition duration-200 border focus:ring ${activeTab === categoryLabel ? activeClasses : inactiveClasses}`}
            href="#"
          >
            {categoryLabel} {/* Display the category label */}
          </Link>
        );
      })}
    </div>
  );
};

export default ArticlesTabs;
