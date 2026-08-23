import { useEffect } from "react";

const usePreloadImages = (products, currentCategoryIndex, categories) => {
  useEffect(() => {
    const nextIndex = currentCategoryIndex + 1;
    if (nextIndex < categories.length) {
      const nextCategory = categories[nextIndex];
      const nextProducts = products.filter(
        (p) => p.categoryId === nextCategory.id,
      );
      nextProducts.slice(0, 4).forEach((product) => {
        const img = new Image();
        img.src = product.image;
      });
    }
  }, [currentCategoryIndex, products, categories]);
};

export default usePreloadImages;
