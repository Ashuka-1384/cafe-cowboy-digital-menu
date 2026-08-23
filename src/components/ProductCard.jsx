import React, { useState } from "react";
import useLazyLoad from "../hooks/useLazyLoad";
import SkeletonCard from "./SkeletonCard";
import "../styles/ProductCard.css";

const FALLBACK_IMAGE =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzFBMTUxMiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjQjg4NjBCIiBmb250LXNpemU9IjQwIj7imKY8L3RleHQ+PC9zdmc+";

const ProductCard = ({ product, index }) => {
  const [recipeExpanded, setRecipeExpanded] = useState(false);
  const { ref, isVisible, isLoaded, onLoad } = useLazyLoad(0.1, "300px");
  const hasLongRecipe = product.recipe && product.recipe.length > 70;

  return (
    <div ref={ref} className="product-card-wrapper">
      {!isVisible ? (
        <SkeletonCard />
      ) : (
        <article
          className="product-card"
          style={{ animationDelay: `${Math.min(index * 0.08, 0.4)}s` }}
        >
          <div className="product-card-corner tl" />
          <div className="product-card-corner tr" />
          <div className="product-card-corner bl" />
          <div className="product-card-corner br" />

          <div className="product-image-wrapper">
            {!isLoaded && <div className="product-image-placeholder" />}
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
              loading="lazy"
              onLoad={onLoad}
              onError={(e) => {
                e.target.src = FALLBACK_IMAGE;
                e.target.style.opacity = 1;
              }}
              style={{ opacity: isLoaded ? 1 : 0 }}
            />
          </div>

          <div className="product-info">
            <h3 className="product-name">{product.name}</h3>
            <div className="product-name-underline" />

            <div className="product-price">
              <span className="product-price-value">{product.price}</span>
              <span className="product-price-currency">هزار تومان</span>
            </div>

            <p className={`product-recipe ${recipeExpanded ? "expanded" : ""}`}>
              {product.recipe}
            </p>

            {hasLongRecipe && (
              <button
                type="button"
                className="recipe-toggle"
                onClick={() => setRecipeExpanded((prev) => !prev)}
              >
                {recipeExpanded ? "کمتر" : "ادامه"}
              </button>
            )}
          </div>
        </article>
      )}
    </div>
  );
};

export default ProductCard;
