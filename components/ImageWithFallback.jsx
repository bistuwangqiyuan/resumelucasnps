'use client';

import { useEffect, useState } from 'react';

export default function ImageWithFallback({ src, alt, className, fallbackSrc = '/images/placeholder.png', ...props }) {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setImgSrc(src);
    setIsLoading(true);
  }, [src]);

  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800 rounded-lg">
          <div className="loading-spinner w-8 h-8 border-4 border-cyan-500 border-t-transparent rounded-full"></div>
        </div>
      )}
      <img
        {...props}
        src={imgSrc}
        alt={alt}
        className={className}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setImgSrc(fallbackSrc);
          setIsLoading(false);
        }}
      />
    </div>
  );
}

