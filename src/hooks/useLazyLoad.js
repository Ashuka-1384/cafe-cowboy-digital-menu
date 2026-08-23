import { useState, useEffect, useRef } from "react";

const useLazyLoad = (threshold = 0.1, rootMargin = "300px") => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [threshold, rootMargin]);

  const onLoad = () => setIsLoaded(true);

  return { ref, isVisible, isLoaded, onLoad };
};

export default useLazyLoad;
