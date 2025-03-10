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
  const getColumns = (): 5 | 6 => {
    if (windowWidth < 640) return 5; // Mobile/Tablet: 5 columns
    return 6; // Desktop: 6 columns
  };
  
  return (
    <div className="max-w-[1500px] mx-auto px-2 py-3">
      {/* Hero Banner - smaller height */}
      <div className="mb-3 rounded-lg overflow-hidden h-32 sm:h-40 md:h-48">
        <img 
          src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&auto=format&fit=crop&q=80" 
          alt="Shop and compare prices" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Featured Categories Grid - more compact */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-3">
        <FeaturedCard
          title="Deals related to items you've saved"
          imageUrl="https://images.unsplash.com/photo-1601524909162-ae8725290836?w=800&auto=format&fit=crop&q=80"
          linkPath="/deals/saved"
          compact={true}
        />
        
        <FeaturedCard
          title="Protect Your Mobile Device"
          imageUrl="https://images.unsplash.com/photo-1530319067432-f2a729c03db5?w=800&auto=format&fit=crop&q=80"
          linkPath="/category/mobile-accessories"
          buttonText="Shop phone cases"
          compact={true}
        />
        
        <FeaturedCard
          title="Shop Today's Deals"
          imageUrl="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&auto=format&fit=crop&q=80"
          linkPath="/deals/today"
          backgroundColor="bg-gray-100"
          compact={true}
        />
      </div>
      
      {/* Category Sections - more compact with more columns */}
      <CategorySection
        title="Deals on tech"
        products={electronicsProducts}
        linkPath="/category/electronics"
        columns={getColumns()}
        compact={true}
      />
      
      <CategorySection
        title="Pet wellness must-haves"
        products={electronicsProducts.slice(2, 6)} // Using electronics products as placeholders
        linkPath="/category/pet-supplies"
        columns={getColumns()}
        theme="dark"
        compact={true}
      />
      
      <CategorySection
        title="Shop Kitchen & Dining"
        products={homeProducts.length ? homeProducts : electronicsProducts}
        linkPath="/category/home-kitchen"
        columns={getColumns()}
        imageUrl="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&auto=format&fit=crop&q=80"
        compact={true}
      />
      
      <CategorySection
        title="Patio, Lawn & Garden"
        products={homeProducts.length ? homeProducts : electronicsProducts}
        linkPath="/category/garden"
        columns={getColumns()}
        theme="dark"
        compact={true}
      />

      {/* Show more product categories in a compact view */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 my-3">
        <CategorySection
          title="Beauty & Personal Care"
          products={beautyProducts.length ? beautyProducts : electronicsProducts.slice(0, 6)}
          linkPath="/category/beauty"
          columns={3}
          compact={true}
        />
        
        <CategorySection
          title="Grocery & Gourmet"
          products={groceryProducts.length ? groceryProducts : electronicsProducts.slice(0, 6)}
          linkPath="/category/grocery"
          columns={3}
          compact={true}
        />
      </div>
    </div>
  );
}