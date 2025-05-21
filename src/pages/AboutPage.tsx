import React from 'react';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { PenTool as Tool, Package, Truck, Users } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">About HardwarePro</h1>
          <p className="max-w-3xl mx-auto text-lg text-slate-600">
            Your trusted partner for high-quality hardware products and professional tools since 2005.
          </p>
        </div>

        {/* Our Story */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Story</h2>
            <p className="text-slate-600 mb-4">
              Founded in 2005, HardwarePro began as a small family business dedicated to providing quality tools and hardware to local contractors and DIY enthusiasts.
            </p>
            <p className="text-slate-600 mb-4">
              Over the years, we've grown into a trusted name in the industry, expanding our inventory to include thousands of products while maintaining our commitment to quality and customer service.
            </p>
            <p className="text-slate-600">
              Today, we serve customers nationwide with our extensive online catalog, combining traditional values with modern convenience.
            </p>
          </div>
          <div className="bg-slate-100 p-8 rounded-lg">
            <img 
              src="https://images.pexels.com/photos/1094767/pexels-photo-1094767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Our store" 
              className="rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Our Values */}
        <div className="bg-blue-900 text-white rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Tool className="h-12 w-12 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality</h3>
              <p className="text-blue-100">
                We never compromise on the quality of our products
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Users className="h-12 w-12 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Expertise</h3>
              <p className="text-blue-100">
                Our team has decades of combined experience
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Package className="h-12 w-12 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Selection</h3>
              <p className="text-blue-100">
                Thousands of products to meet your every need
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Truck className="h-12 w-12 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Service</h3>
              <p className="text-blue-100">
                Customer satisfaction is our top priority
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Shop With Confidence</h2>
          <p className="max-w-3xl mx-auto text-lg text-slate-600 mb-8">
            Experience the HardwarePro difference with our extensive selection of quality products and exceptional customer service.
          </p>
          <Link to="/products">
            <Button variant="secondary" size="lg">
              Browse Our Products
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;