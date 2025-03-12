import React from 'react';
import { Link } from 'react-router-dom';

interface FeaturedCardProps {
  title: string;
  description?: string;
  imageUrl: string;
  linkPath: string;
  buttonText?: string;
  backgroundColor?: string;
  textColor?: string;
}

export function FeaturedCard({
  title,
  description,
  imageUrl,
  linkPath,
  buttonText = 'See all deals',
  backgroundColor = 'bg-white',
  textColor = 'text-gray-900'
}: FeaturedCardProps) {
  // Reliable fallback image specifically for featured cards
  const fallbackImage = `https://via.placeholder.com/800x400/e5e7eb/666666?text=${encodeURIComponent(title)}`;
  
  return (
    <div className={`p-4 rounded-lg shadow ${backgroundColor} h-full flex flex-col`}>
      <h2 className={`text-base font-bold mb-2 ${textColor}`}>{title}</h2>
      
      {description && (
        <p className={`mb-2 text-xs ${textColor} opacity-90`}>{description}</p>
      )}
      
      <div className="mb-3 bg-gray-50 p-1 rounded flex items-center justify-center h-40 overflow-hidden">
        <img 
          src={imageUrl}
          alt={title} 
          className="max-h-40 max-w-full object-cover transition-transform duration-300 hover:scale-105"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null;
            target.src = fallbackImage;
          }}
        />
      </div>
      
      <Link 
        to={linkPath}
        className="mt-auto block w-full text-center py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors"
      >
        {buttonText}
      </Link>
    </div>
  );
}