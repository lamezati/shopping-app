import React from 'react';
import { CategorySection } from '../components/CategorySection';
import { FeaturedCard } from '../components/FeaturedCard';
import { mockProducts } from '../types';
import { useState, useEffect } from 'react';

export function HomePage() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Filter products by category
  const electronicsProducts = mockProducts.filter(product => product.category === 'Electronics');
  const groceryProducts = mockProducts.filter(product => product.category === 'Grocery');
  const homeProducts = mockProducts.filter(product => product.category.includes('Home') || product.category.includes('Cleaning'));
  const beautyProducts = mockProducts.filter(product => product.category.includes('Beauty'));
  
  // Determine grid columns based on screen width
  const getColumns = (): 2 | 3 | 4 => {
    if (windowWidth < 640) return 2; // Mobile: 2 columns
    if (windowWidth < 1024) return 3; // Tablet: 3 columns
    return 4; // Desktop: 4 columns
  };
  
  return (
    <div className="max-w-[1500px] mx-auto px-4 py-6">
      {/* Hero Banner */}
      <div className="mb-8 rounded-lg overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&auto=format&fit=crop&q=80" 
          alt="Shop and compare prices" 
          className="w-full h-auto object-cover"
        />
      </div>
      
      {/* Featured Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <FeaturedCard
          title="Deals related to items you've saved"
          imageUrl="https://images.unsplash.com/photo-1601524909162-ae8725290836?w=800&auto=format&fit=crop&q=80"
          linkPath="/deals/saved"
        />
        
        <FeaturedCard
          title="Protect Your Mobile Device"
          imageUrl="https://images.unsplash.com/photo-1530319067432-f2a729c03db5?w=800&auto=format&fit=crop&q=80"
          linkPath="/category/mobile-accessories"
          buttonText="Shop phone cases"
        />
        
        <FeaturedCard
          title="Shop Today's Deals"
          imageUrl="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&auto=format&fit=crop&q=80"
          linkPath="/deals/today"
          backgroundColor="bg-gray-100"
        />
      </div>
      
      {/* Category Sections */}
      <CategorySection
        title="Deals on tech"
        products={electronicsProducts}
        linkPath="/category/electronics"
        columns={getColumns()}
      />
      
      <CategorySection
        title="Pet wellness must-haves"
        products={electronicsProducts.slice(2, 6)} // Using electronics products as placeholders
        linkPath="/category/pet-supplies"
        columns={getColumns()}
        theme="dark"
      />
      
      <CategorySection
        title="Shop Kitchen & Dining"
        products={homeProducts}
        linkPath="/category/home-kitchen"
        columns={getColumns()}
        imageUrl="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&auto=format&fit=crop&q=80"
      />
      
      <CategorySection
        title="Patio, Lawn & Garden"
        products={homeProducts.length ? homeProducts : electronicsProducts}
        linkPath="/category/garden"
        columns={getColumns()}
        theme="dark"
      />
    </div>
  );
}