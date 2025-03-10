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
  return (
    <div className={`p-4 rounded-lg ${backgroundColor} h-full flex flex-col`}>
      <h2 className={`text-xl font-bold mb-2 ${textColor}`}>{title}</h2>
      
      {description && (
        <p className={`mb-3 text-sm ${textColor} opacity-90`}>{description}</p>
      )}
      
      <div className="flex-grow flex items-center justify-center mb-4 overflow-hidden rounded-md">
        <img 
          src={imageUrl} 
          alt={title} 
          className="object-cover w-full h-full transition-transform hover:scale-105 duration-300"
        />
      </div>
      
      <Link 
        to={linkPath}
        className="block w-full text-center py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        {buttonText}
      </Link>
    </div>
  );
}