import React from 'react';

const ProductGrid = () => {
  const products = [
    { name: 'Mac', image: '🖥️' },
    { name: 'iPhone', image: '📱' },
    { name: 'iPad', image: '📱' },
    { name: 'Apple Watch', image: '⌚' },
    { name: 'AirPods', image: '🎧' },
    { name: 'AirTag', image: '⭕' },
    { name: 'Apple TV 4K', image: '📺' },
    { name: 'Acessórios', image: '🎒' },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
        {products.map((product) => (
          <a
            key={product.name}
            href="#"
            className="flex flex-col items-center group"
          >
            <div className="w-24 h-24 mb-3 flex items-center justify-center text-5xl group-hover:scale-105 transition-transform">
              {product.image}
            </div>
            <span className="text-sm font-medium text-center group-hover:text-blue-600 transition-colors">
              {product.name}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;