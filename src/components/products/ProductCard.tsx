import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../types';
import { Star } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group border border-slate-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-200">
      <Link to={`/product/${product.id}`} className="block relative">
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-slate-100">
          <img
            src={product.image}
            alt={product.name}
            className="h-48 w-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        {product.featured && (
          <span className="absolute top-2 right-2 bg-orange-500 text-white px-2 py-1 text-xs font-bold rounded">
            Featured
          </span>
        )}
      </Link>
      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-lg font-medium text-slate-900 group-hover:text-blue-900 transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1 text-sm text-slate-500 line-clamp-2">{product.description}</p>
        <div className="mt-2 flex items-center">
          {product.rating && (
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
              <span className="ml-1 text-sm text-slate-700">{product.rating}</span>
            </div>
          )}
        </div>
        <div className="mt-2 flex items-center justify-between">
          <p className="text-lg font-bold text-slate-900">${product.price.toFixed(2)}</p>
          <button className="px-3 py-1 bg-blue-900 text-white text-sm rounded hover:bg-blue-800 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;