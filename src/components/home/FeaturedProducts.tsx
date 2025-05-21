import React from 'react';
import { Link } from 'react-router-dom';
import { getFeaturedProducts } from '../../data/products';
import ProductCard from '../products/ProductCard';

const FeaturedProducts: React.FC = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Featured Products</h2>
          <p className="mt-2 text-lg text-slate-600">
            Our selection of high-quality hardware and tools
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/products"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-900 hover:bg-blue-800"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;