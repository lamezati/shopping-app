import React from 'react';

interface FeaturedBannerProps {
  imageUrl: string;
  altText: string;
  height?: 'small' | 'medium' | 'large';
}

export function FeaturedBanner({ 
  imageUrl, 
  altText,
  height = 'medium'
}: FeaturedBannerProps) {
  const heightClass = {
    small: 'h-24 sm:h-32',
    medium: 'h-36 sm:h-44 md:h-48',
    large: 'h-48 sm:h-56 md:h-64'
  }[height];
  
  // Reliable fallback image for banners
  const fallbackImage = `https://via.placeholder.com/1500x400/e5e7eb/666666?text=${encodeURIComponent(altText || 'Featured Banner')}`;

  return (
    <div className={`w-full overflow-hidden rounded-lg mb-4 ${heightClass} bg-gray-100 shadow-sm`}>
      <img 
        src={imageUrl} 
        alt={altText} 
        className="w-full h-full object-cover"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.onerror = null;
          target.src = fallbackImage;
        }}
      />
    </div>
  );
}