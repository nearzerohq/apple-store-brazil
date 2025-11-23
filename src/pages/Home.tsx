import React from 'react';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';
import FeaturedProducts from '../components/FeaturedProducts';

const Home = () => {
  return (
    <main>
      <Hero />
      <ProductGrid />
      <FeaturedProducts />
    </main>
  );
};

export default Home;