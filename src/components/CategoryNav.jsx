import React, { useState, useEffect, useRef } from "react";
import { categories } from "../data/menuData";
import "../styles/CategoryNav.css";

const CategoryNav = ({ activeCategory, onCategoryClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef(null);
  const itemRefs = useRef({});

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const activeItem = itemRefs.current[activeCategory];
    if (activeItem && navRef.current) {
      const nav = navRef.current;
      const itemLeft = activeItem.offsetLeft;
      const itemWidth = activeItem.offsetWidth;
      const navWidth = nav.offsetWidth;
      const scrollPosition = itemLeft - navWidth / 2 + itemWidth / 2;

      nav.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  }, [activeCategory]);

  const handleClick = (categoryId) => {
    onCategoryClick(categoryId);
    const section = document.getElementById(`category-${categoryId}`);
    if (section) {
      const navHeight = 70;
      const sectionTop =
        section.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top: sectionTop, behavior: "smooth" });
    }
  };

  return (
    <div className={`category-nav-wrapper ${isScrolled ? "scrolled" : ""}`}>
      <nav className="category-nav" ref={navRef}>
        {categories.map((cat) => (
          <button
            key={cat.id}
            ref={(el) => (itemRefs.current[cat.id] = el)}
            className={`category-nav-item ${
              activeCategory === cat.id ? "active" : ""
            }`}
            onClick={() => handleClick(cat.id)}
            type="button"
          >
            <span className="category-nav-icon">{cat.icon}</span>
            <span className="category-nav-name">{cat.name}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default CategoryNav;
