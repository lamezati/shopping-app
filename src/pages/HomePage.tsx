import React from 'react';
import { CategorySection } from '../components/CategorySection';
import { FeaturedCard } from '../components/FeaturedCard';
import { ProductGrid } from '../components/ProductGrid';
import { FeaturedBanner } from '../components/FeaturedBanner';
import { mockProducts } from '../types';

export function HomePage() {
  // Filter products by category
  const electronicsProducts = mockProducts.filter(product => product.category === 'Electronics');
  const smartphoneProducts = electronicsProducts.filter(product => product.subcategory.includes('Smartphone'));
  const laptopProducts = electronicsProducts.filter(product => product.subcategory.includes('Computer'));
  
  return (
    <div className="max-w-[1500px] mx-auto p-4">
      {/* Hero Banner */}
      <FeaturedBanner 
        imageUrl="https://images.unsplash.com/photo-1614852207000-7e942605c7a4?w=1500&auto=format&fit=crop&q=80"
        altText="Shop deals across multiple stores"
        height="medium"
      />
      
      {/* Featured Cards Grid - 3 cards in a row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <FeaturedCard
          title="Deals related to items you've saved"
          imageUrl="https://images.unsplash.com/photo-1607082349566-187342175e2f?w=800&auto=format&fit=crop&q=80"
          linkPath="/deals/saved"
          buttonText="See all deals"
        />
        
        <FeaturedCard
          title="Protect Your Mobile Device"
          imageUrl="https://images.unsplash.com/photo-1533228876829-65c94e7b5025?w=800&auto=format&fit=crop&q=80"
          linkPath="/category/mobile-accessories"
          buttonText="Shop phone cases"
        />
        
        <FeaturedCard
          title="Shop Today's Deals"
          imageUrl="https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=800&auto=format&fit=crop&q=80"
          linkPath="/deals/today"
          buttonText="See all deals"
        />
      </div>
      
      {/* Deals on Tech */}
      <div className="mb-6">
        <ProductGrid
          title="Deals on tech"
          products={electronicsProducts.slice(0, 3)}
          linkPath="/category/electronics"
          viewAllText="See all"
          showViewAllButton={true}
        />
      </div>
      
      {/* Two-column layout for smaller product grids */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        <ProductGrid
          title="Smartphones"
          products={smartphoneProducts.length ? smartphoneProducts : electronicsProducts.slice(0, 3)}
          linkPath="/category/electronics/smartphones"
          maxItems={3}
          viewAllText="See all"
        />
        
        <ProductGrid
          title="Laptops & Computers"
          products={laptopProducts.length ? laptopProducts : electronicsProducts.slice(0, 3)}
          linkPath="/category/electronics/computers"
          maxItems={3}
          viewAllText="See all"
        />
      </div>
      
      {/* Category Sections - traditional grid layout with more products */}
      <div className="mb-6">
        <CategorySection
          title="Kitchen & Dining"
          products={mockProducts.filter(p => p.category.includes('Kitchen') || p.category.includes('Home'))}
          linkPath="/category/home-kitchen"
          columns={6}
        />
      </div>
      
      {/* Featured Banner - middle placement */}
      <div className="mb-6">
        <FeaturedBanner 
          imageUrl="https://images.unsplash.com/photo-1591370874773-6702e8f12fd8?w=1500&auto=format&fit=crop&q=80"
          altText="Explore summer deals"
          height="small"
        />
      </div>
      
      {/* More sections */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        <ProductGrid
          title="Pet Supplies"
          products={mockProducts.slice(3, 6)}
          linkPath="/category/pet-supplies"
          maxItems={1}
          viewAllText="Shop pet supplies"
        />
        
        <ProductGrid
          title="Beauty & Personal Care"
          products={mockProducts.filter(p => p.category.includes('Beauty'))}
          linkPath="/category/beauty"
          maxItems={1}
          viewAllText="Shop beauty items"
        />
        
        <ProductGrid
          title="Home & Garden"
          products={mockProducts.filter(p => p.category.includes('Home'))}
          linkPath="/category/home-garden"
          maxItems={1}
          viewAllText="Shop home items"
        />
      </div>
    </div>
  );
}