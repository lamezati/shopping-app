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
  compact?: boolean;
}

export function FeaturedCard({
  title,
  description,
  imageUrl,
  linkPath,
  buttonText = 'See all deals',
  backgroundColor = 'bg-white',
  textColor = 'text-gray-900',
  compact = true
}: FeaturedCardProps) {
  const padding = compact ? 'p-2 sm:p-3' : 'p-4';
  
  return (
    <div className={`${padding} rounded-lg ${backgroundColor} h-full flex flex-col`}>
      <h2 className={`text-sm font-bold mb-1 ${textColor}`}>{title}</h2>
      
      {description && (
        <p className={`mb-2 text-xs ${textColor} opacity-90`}>{description}</p>
      )}
      
      <div className="flex-grow flex items-center justify-center mb-2 overflow-hidden rounded-md h-24 sm:h-32">
        <img 
          src={imageUrl} 
          alt={title} 
          className="object-cover w-full h-full transition-transform hover:scale-105 duration-300"
        />
      </div>
      
      <Link 
        to={linkPath}
        className="block w-full text-center py-1 px-2 text-xs bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        {buttonText}
      </Link>
    </div>
  );
}