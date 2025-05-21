import React from 'react';
import { useParams } from 'react-router-dom';
import { getProductsByCategory } from '../data/products';
import { categories } from '../data/categories';
import ProductGrid from '../components/products/ProductGrid';

const CategoryPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const category = categories.find(cat => cat.slug === slug);
  const products = getProductsByCategory(slug || '');
  
  if (!category) {
    return (
      <div className="py-12 text-center">
        <h1 className="text-2xl font-bold text-slate-900">Category not found</h1>
      </div>
    );
  }
  
  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-slate-900">{category.name}</h1>
          <p className="mt-2 text-lg text-slate-600">{category.description}</p>
        </div>
      </div>
      
      <ProductGrid products={products} />
    </div>
  );
};

export default CategoryPage;