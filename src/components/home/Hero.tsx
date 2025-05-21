import React from 'react';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Hero background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/1797428/pexels-photo-1797428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="Hardware tools background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-black/50" />
      </div>

      {/* Hero content */}
      <div className="relative z-10 px-4 py-32 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Professional Hardware Solutions
          </h1>
          <p className="mt-4 text-xl text-white/90">
            Quality tools and building materials for professionals and DIY enthusiasts.
          </p>
          <div className="mt-8 flex space-x-4">
            <Link to="/products">
              <Button variant="secondary" size="lg">
                Shop Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg" className="bg-white/10 text-white border-white/30 hover:bg-white/20">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;