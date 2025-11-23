import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-100 via-purple-50 to-orange-100 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0">
            <h1 className="text-5xl md:text-7xl font-semibold mb-4">
              <span className="text-blue-600">L</span>
              <span className="text-orange-500">o</span>
              <span className="text-purple-600">j</span>
              <span className="text-gray-800">a</span>
            </h1>
          </div>
          <div className="text-right">
            <h2 className="text-3xl md:text-4xl font-semibold mb-2">
              Dê um presente especial
            </h2>
            <h3 className="text-3xl md:text-4xl font-semibold mb-4">
              neste Natal.
            </h3>
            <a href="#" className="text-blue-600 hover:underline text-lg">
              Encontrar uma Apple Store →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;