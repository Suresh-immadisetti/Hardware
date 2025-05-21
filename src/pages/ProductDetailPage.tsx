import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductById } from '../data/products';
import Button from '../components/ui/Button';
import { Star, ShoppingCart, Truck, RefreshCw, Shield } from 'lucide-react';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || '');
  
  if (!product) {
    return (
      <div className="py-12 text-center">
        <h1 className="text-2xl font-bold text-slate-900">Product not found</h1>
        <Link to="/products" className="mt-4 inline-block text-blue-900 hover:underline">
          Back to products
        </Link>
      </div>
    );
  }
  
  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-4">
          <Link to="/products" className="text-blue-900 hover:underline flex items-center">
            &larr; Back to Products
          </Link>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
            {/* Product Image */}
            <div className="bg-slate-100 rounded-lg overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-cover object-center"
              />
            </div>
            
            {/* Product Details */}
            <div>
              <h1 className="text-3xl font-bold text-slate-900">{product.name}</h1>
              
              <div className="mt-4 flex items-center">
                {product.rating && (
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    <span className="ml-1 text-slate-700">{product.rating} Rating</span>
                  </div>
                )}
                <span className="mx-2 text-slate-300">|</span>
                <span className={`px-2 py-1 rounded text-xs font-bold ${product.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>
              
              <div className="mt-4">
                <p className="text-3xl font-bold text-slate-900">${product.price.toFixed(2)}</p>
              </div>
              
              <div className="mt-4">
                <p className="text-slate-700">{product.description}</p>
              </div>
              
              <div className="mt-8">
                <Button variant="secondary" size="lg" className="w-full">
                  <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
                </Button>
              </div>
              
              <div className="mt-8 border-t border-slate-200 pt-6">
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-start">
                    <Truck className="h-5 w-5 text-blue-900 mr-2 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-slate-900">Free Shipping</h4>
                      <p className="text-sm text-slate-600">On orders over $100</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <RefreshCw className="h-5 w-5 text-blue-900 mr-2 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-slate-900">Easy Returns</h4>
                      <p className="text-sm text-slate-600">30-day return policy</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Shield className="h-5 w-5 text-blue-900 mr-2 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-slate-900">Satisfaction Guaranteed</h4>
                      <p className="text-sm text-slate-600">Quality products or your money back</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;