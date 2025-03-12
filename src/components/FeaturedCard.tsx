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
  // Fallback image for broken links
  const fallbackImage = "https://via.placeholder.com/800x400?text=Featured+Image";
  
  return (
    <div className={`p-4 rounded-lg ${backgroundColor} h-full flex flex-col`}>
      <h2 className={`text-base font-bold mb-2 ${textColor}`}>{title}</h2>
      
      {description && (
        <p className={`mb-2 text-xs ${textColor} opacity-90`}>{description}</p>
      )}
      
      <div className="mb-3 bg-gray-100 rounded-md overflow-hidden">
        <img 
          src={imageUrl}
          alt={title} 
          className="w-full h-40 object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null;
            target.src = fallbackImage;
          }}
        />
      </div>
      
      <Link 
        to={linkPath}
        className="block w-full text-center py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors"
      >
        {buttonText}
      </Link>
    </div>
  );
}