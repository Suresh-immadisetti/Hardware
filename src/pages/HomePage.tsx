import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedProducts from '../components/home/FeaturedProducts';
import CategorySection from '../components/home/CategorySection';
import PromoBanner from '../components/home/PromoBanner';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <PromoBanner />
      <FeaturedProducts />
      <CategorySection />
    </div>
  );
};

export default HomePage;