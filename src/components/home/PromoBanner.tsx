import React from 'react';
import { Truck, ShieldCheck, Clock } from 'lucide-react';

const PromoBanner: React.FC = () => {
  return (
    <section className="bg-blue-900 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center justify-center">
            <Truck className="h-10 w-10 text-white" />
            <div className="ml-4">
              <h3 className="text-lg font-medium text-white">Free Shipping</h3>
              <p className="text-blue-100">On orders over $100</p>
            </div>
          </div>
          
          <div className="flex items-center justify-center">
            <ShieldCheck className="h-10 w-10 text-white" />
            <div className="ml-4">
              <h3 className="text-lg font-medium text-white">Quality Guarantee</h3>
              <p className="text-blue-100">100% satisfaction guaranteed</p>
            </div>
          </div>
          
          <div className="flex items-center justify-center">
            <Clock className="h-10 w-10 text-white" />
            <div className="ml-4">
              <h3 className="text-lg font-medium text-white">Fast Delivery</h3>
              <p className="text-blue-100">Same-day shipping on most orders</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;