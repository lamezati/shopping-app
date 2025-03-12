import React from 'react';
import { CategorySection } from '../components/CategorySection';
import { FeaturedCard } from '../components/FeaturedCard';
import { ProductGrid } from '../components/ProductGrid';
import { FeaturedBanner } from '../components/FeaturedBanner';
import { Product } from '../interfaces';
import { Link } from 'react-router-dom';

interface HomePageProps {
  products: Product[];
  searchQuery: string;
}

export function HomePage({ products, searchQuery }: HomePageProps) {
  // Filter products by category
  const electronicsProducts = products.filter(product => product.category === 'Electronics');
  const smartphoneProducts = electronicsProducts.filter(product => product.subcategory.includes('Smartphone'));
  const laptopProducts = electronicsProducts.filter(product => product.subcategory.includes('Computer'));
  const homeKitchenProducts = products.filter(product => product.category === 'Home & Kitchen');
  const cleaningProducts = products.filter(product => product.category === 'Cleaning & Household');
  
  // If search query is present, show search results instead of the normal homepage
  if (searchQuery.trim() !== '') {
    return (
      <div className="max-w-[1500px] mx-auto p-4">
        <h1 className="text-xl font-bold mb-4">Search Results for "{searchQuery}"</h1>
        
        {products.length === 0 ? (
          <div className="bg-white p-8 rounded-lg shadow text-center">
            <h2 className="text-lg font-medium mb-2">No results found</h2>
            <p className="text-gray-600">
              We couldn't find any products matching your search. Try using different keywords or browse our categories.
            </p>
          </div>
        ) : (
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium">Found {products.length} products</h2>
              <div className="text-sm text-gray-500">
                Comparing prices across multiple stores
              </div>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {products.map(product => (
                <Link key={product.id} to={`/product/${product.id}`} className="block group">
                  <div className="text-center bg-white p-3 rounded-lg shadow-sm transition-shadow hover:shadow-md">
                    <div className="mb-3 bg-gray-50 p-2 rounded flex items-center justify-center h-36">
                      <img 
                        src={product.image}
                        alt={product.name}
                        className="max-h-32 max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.onerror = null;
                          target.src = "https://via.placeholder.com/300x300?text=Product";
                        }}
                      />
                    </div>
                    <h3 className="text-sm font-medium line-clamp-2 min-h-[2.5rem] text-gray-800">
                      {product.name}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
  
  return (
    <div className="max-w-[1500px] mx-auto p-4">
      {/* Hero Banner */}
      <FeaturedBanner 
        imageUrl="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1500&auto=format&fit=crop&q=80"
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
          linkPath="/category/electronics/smartphones-accessories"
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
          products={smartphoneProducts.length ? smartphoneProducts.slice(0, 3) : electronicsProducts.slice(0, 3)}
          linkPath="/category/electronics/smartphones-accessories"
          maxItems={3}
          viewAllText="See all"
        />
        
        <ProductGrid
          title="Laptops & Computers"
          products={laptopProducts.length ? laptopProducts.slice(0, 3) : electronicsProducts.slice(3, 6)}
          linkPath="/category/electronics/computers-tablets"
          maxItems={3}
          viewAllText="See all"
        />
      </div>
      
      {/* Home & Kitchen Section */}
      <div className="mb-6">
        <CategorySection
          title="Kitchen & Dining"
          products={homeKitchenProducts.length ? homeKitchenProducts : electronicsProducts.slice(0, 10)}
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
      
      {/* More sections - three columns */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        <ProductGrid
          title="Cleaning Supplies"
          products={cleaningProducts.length ? cleaningProducts.slice(0, 1) : electronicsProducts.slice(0, 1)}
          linkPath="/category/cleaning-household"
          maxItems={1}
          viewAllText="Shop cleaning supplies"
        />
        
        <ProductGrid
          title="Home Entertainment"
          products={electronicsProducts.filter(p => p.subcategory.includes('Audio')).slice(0, 1)}
          linkPath="/category/electronics/audio-headphones"
          maxItems={1}
          viewAllText="Shop audio devices"
        />
        
        <ProductGrid
          title="Photography"
          products={electronicsProducts.filter(p => p.subcategory.includes('Camera')).slice(0, 1)}
          linkPath="/category/electronics/cameras-photography"
          maxItems={1}
          viewAllText="Shop cameras"
        />
      </div>
    </div>
  );
}