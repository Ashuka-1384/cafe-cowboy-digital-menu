import React, { useState, useEffect, useCallback } from "react";
import { categories, products } from "./data/menuData";
import usePreloadImages from "./hooks/usePreloadImages";
import Header from "./components/Header";
import CategoryNav from "./components/CategoryNav";
import CategorySection from "./components/CategorySection";
import Footer from "./components/Footer";

const App = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]?.id || "");
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);

  usePreloadImages(products, currentCategoryIndex, categories);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      window.requestAnimationFrame(() => {
        const offset = 120;
        let currentActive = categories[0]?.id;

        for (const cat of categories) {
          const section = document.getElementById(`category-${cat.id}`);
          if (section) {
            const rect = section.getBoundingClientRect();
            if (rect.top <= offset) {
              currentActive = cat.id;
            }
          }
        }

        if (currentActive !== activeCategory) {
          setActiveCategory(currentActive);
          const idx = categories.findIndex((c) => c.id === currentActive);
          setCurrentCategoryIndex(idx >= 0 ? idx : 0);
        }
        ticking = false;
      });
      ticking = true;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeCategory]);

  const handleCategoryClick = useCallback((categoryId) => {
    setActiveCategory(categoryId);
    const idx = categories.findIndex((c) => c.id === categoryId);
    setCurrentCategoryIndex(idx >= 0 ? idx : 0);
  }, []);

  return (
    <div className="app">
      <Header />
      <CategoryNav
        activeCategory={activeCategory}
        onCategoryClick={handleCategoryClick}
      />
      <main>
        {categories.map((category) => (
          <CategorySection key={category.id} category={category} />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default App;
