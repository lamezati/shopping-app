import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { mockProducts, categories } from '../types';

export function CategoryPage() {
  const { categoryId, subcategoryId } = useParams();
  
  const category = categories.find(c => c.id === categoryId);
  const subcategory = category?.subcategories.find(s => s.id === subcategoryId);
  
  const filteredProducts = mockProducts.filter(product => {
    if (subcategoryId) {
      return product.category === category?.name && product.subcategory === subcategory?.name;
    }
    return product.category === category?.name;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          {subcategory ? subcategory.name : category?.name}
        </h1>
        <p className="text-gray-600 mt-2">
          {subcategory ? subcategory.description : category?.description}
        </p>
      </div>

      {/* Subcategories grid if no subcategory is selected */}
      {!subcategoryId && category && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {category.subcategories.map(sub => (
            <Link
              key={sub.id}
              to={`/category/${categoryId}/${sub.id}`}
              className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
            >
              <h2 className="text-lg font-semibold text-gray-900">{sub.name}</h2>
              <p className="text-sm text-gray-600">{sub.description}</p>
            </Link>
          ))}
        </div>
      )}

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <h2 className="text-xl font-medium text-gray-700">No products found</h2>
          <p className="text-gray-500 mt-2">
            We couldn't find any products in this category.
          </p>
        </div>
      )}
    </div>
  );
}