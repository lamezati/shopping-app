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

  return (
    <div className={`w-full overflow-hidden rounded-lg mb-4 ${heightClass}`}>
      <img 
        src={imageUrl} 
        alt={altText} 
        className="w-full h-full object-cover"
      />
    </div>
  );
}