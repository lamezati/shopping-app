import React from 'react';
import { useParams } from 'react-router-dom';
import { Star, StarHalf, ThumbsUp, ExternalLink } from 'lucide-react';
import { mockProducts } from '../types';

export function ProductDetail() {
  const { id } = useParams();
  const product = mockProducts.find(p => p.id === id);

  if (!product) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900">Product not found</h2>
      </div>
    );
  }

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="w-5 h-5 text-yellow-400" />);
    }

    return stars;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="aspect-square rounded-lg overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {product.additionalImages.map((img, idx) => (
              <div key={idx} className="aspect-square rounded-lg overflow-hidden">
                <img
                  src={img}
                  alt={`${product.name} view ${idx + 1}`}
                  className="w-full h-full object-cover hover:opacity-75 transition-opacity cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
          
          <div className="flex items-center mb-4">
            <div className="flex items-center">
              {renderStars(product.rating)}
            </div>
            <span className="ml-2 text-sm text-gray-600">
              {product.reviewCount.toLocaleString()} ratings
            </span>
          </div>

          <div className="border-b border-gray-200 pb-4">
            <p className="text-gray-700 text-lg">{product.description}</p>
          </div>

          <div className="py-4">
            <h2 className="text-xl font-semibold mb-3">Key Features</h2>
            <ul className="list-disc pl-5 space-y-2">
              {product.features.map((feature, idx) => (
                <li key={idx} className="text-gray-700">{feature}</li>
              ))}
            </ul>
          </div>

          {/* Retailers */}
          <div className="border-t border-gray-200 pt-4">
            <h2 className="text-xl font-semibold mb-4">Available from {product.retailers.length} sellers</h2>
            <div className="space-y-4">
              {product.retailers.map((retailer, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-lg ${
                    retailer.inStock ? 'bg-gray-50' : 'bg-gray-100'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-900">{retailer.name}</span>
                    <span className="text-2xl font-bold text-gray-900">
                      ${retailer.price.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">
                      {retailer.shippingCost === 0
                        ? 'Free shipping'
                        : `Shipping: $${retailer.shippingCost.toFixed(2)}`}
                    </span>
                    <span className="text-gray-600">{retailer.deliveryDate}</span>
                  </div>
                  {retailer.inStock && (
                    <a
                      href={retailer.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-yellow-400 hover:bg-yellow-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                    >
                      Buy Now <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
        <div className="space-y-6">
          {product.comments.length > 0 ? (
            product.comments.map((comment) => (
              <div key={comment.id} className="border-b border-gray-200 pb-6">
                <div className="flex items-center mb-2">
                  <span className="font-medium text-gray-900">{comment.userName}</span>
                  <span className="mx-2">•</span>
                  <div className="flex items-center">
                    {renderStars(comment.rating)}
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-2">{comment.title}</h3>
                <p className="text-gray-700 mb-3">{comment.content}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <span>{new Date(comment.date).toLocaleDateString()}</span>
                  <button className="ml-4 flex items-center text-gray-600 hover:text-gray-900">
                    <ThumbsUp className="w-4 h-4 mr-1" />
                    Helpful ({comment.helpful})
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">This product has no reviews yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}