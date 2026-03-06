import React, { useState } from "react";

export default function AppImage({
  src,
  alt = "",
  className = "",
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`position-relative overflow-hidden ${className}`}>
      {!isLoaded && !hasError && (
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-gray-200 animate-pulse" />
      )}
      <img
        src={hasError ? "https://via.placeholder.com/400x300?text=Image+Not+Found" : src}
        alt={alt}
        className={`w-100 h-100 object-cover transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
      />
    </div>
  );
}
