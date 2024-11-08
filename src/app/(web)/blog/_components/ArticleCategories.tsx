'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import articleCategories from '../articleCategories';

function TabButton(props) {
  const { categoryKey, categoryLabel, isActive, onClick } = props;
  const baseClasses = 'h-10 inline-flex items-center justify-center w-full sm:w-auto text-center py-3 px-5 rounded-full text-sm font-semibold transition duration-200 border focus:ring';
  const activeClasses = 'border border-purple-700 bg-purple-900 hover:bg-purple-800 focus:ring-purple-800 text-white';
  const inactiveClasses = 'border border-gray-200 bg-white hover:bg-gray-50 focus:ring-orange-200';

  return (
    <button
      key={categoryKey}
      onClick={function (e) {
        e.preventDefault();
        onClick(categoryKey);
      }}
      className={baseClasses + ' ' + (isActive ? activeClasses : inactiveClasses)}
    >
      {categoryLabel}
    </button>
  );
}

function ArticlesTabs() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState(function () {
    var initialCategory = new URLSearchParams(window.location.search).get('category');
    return initialCategory || 'all';
  });

  useEffect(function () {
    function handlePopState() {
      var category = new URLSearchParams(window.location.search).get('category') || 'all';
      setActiveCategory(category);
    }

    window.addEventListener('popstate', handlePopState);
    return function () {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  function handleCategoryChange(categoryKey) {
    if (categoryKey === 'all') {
      router.push(window.location.pathname);
    } else {
      router.push('?category=' + categoryKey);
    }
    setActiveCategory(categoryKey);
  }

  return (
    <div className="flex flex-wrap gap-2 mb-10">
      {Object.entries(articleCategories).map(([categoryKey, category]) => {
        return (
          <TabButton
            key={categoryKey}
            categoryKey={categoryKey}
            categoryLabel={category.name}
            isActive={activeCategory === categoryKey}
            onClick={handleCategoryChange}
          />
        );
      })}
    </div>
  );
}

export default ArticlesTabs;
