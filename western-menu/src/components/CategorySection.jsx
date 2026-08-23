import React from "react";
import { getProductsByCategory } from "../data/menuData";
import ProductCard from "./ProductCard";

const CategorySection = ({ category }) => {
  const products = getProductsByCategory(category.id);

  if (products.length === 0) return null;

  return (
    <section id={`category-${category.id}`} className="category-section">
      <div className="category-header">
        <div className="category-icon-large">{category.icon}</div>
        <h2 className="category-title">{category.name}</h2>
        <div className="category-divider">
          <div className="category-divider-line" />
          <div className="category-divider-center">
            <span className="category-divider-star">✦</span>
            <div className="category-divider-diamond" />
            <span className="category-divider-star">✦</span>
          </div>
          <div className="category-divider-line" />
        </div>
      </div>

      <div className="products-list">
        {products.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
