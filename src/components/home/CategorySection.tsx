import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../../data/categories';

const CategorySection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Shop By Category</h2>
          <p className="mt-2 text-lg text-slate-600">
            Browse our wide selection of hardware products
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.id} 
              to={`/category/${category.slug}`}
              className="group"
            >
              <div className="relative overflow-hidden bg-slate-100 rounded-lg shadow-md transition-transform duration-300 group-hover:shadow-lg group-hover:-translate-y-1 h-48">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/80 p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-bold text-white mb-1">{category.name}</h3>
                  <p className="text-white/90 text-sm">{category.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;