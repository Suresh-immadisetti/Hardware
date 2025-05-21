import React from 'react';
import { products } from '../data/products';
import ProductGrid from '../components/products/ProductGrid';

const ProductsPage: React.FC = () => {
  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-slate-900">All Products</h1>
          <p className="mt-2 text-lg text-slate-600">
            Browse our complete catalog of high-quality hardware products
          </p>
        </div>
      </div>
      
      <ProductGrid products={products} />
    </div>
  );
};

export default ProductsPage;