import React from "react";
import "../styles/Skeleton.css";

const SkeletonCard = () => {
  return (
    <div className="skeleton-card">
      <div className="skeleton-image" />
      <div className="skeleton-info">
        <div className="skeleton-line title" />
        <div className="skeleton-line price" />
        <div className="skeleton-line recipe" />
        <div className="skeleton-line recipe short" />
      </div>
    </div>
  );
};

export default SkeletonCard;
