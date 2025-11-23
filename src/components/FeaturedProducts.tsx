import React from 'react';

const FeaturedProducts = () => {
  const featured = [
    {
      title: 'iPhone 17 Pro',
      subtitle: 'Apple Intelligence',
      price: 'A partir de R$ 11.499',
      gradient: 'from-orange-200 via-yellow-100 to-orange-200',
    },
    {
      title: 'MacBook Pro de 14 pol. com M5',
      subtitle: 'Apple Intelligence',
      price: 'A partir de R$ 19.999',
      gradient: 'from-gray-800 via-gray-900 to-gray-800',
      textColor: 'text-white',
    },
    {
      title: 'iPad Pro',
      subtitle: 'Apple Intelligence',
      price: 'A partir de R$ 12.499',
      gradient: 'from-blue-100 via-purple-100 to-yellow-100',
    },
    {
      title: 'Apple Watch Series',
      subtitle: 'Apple Intelligence',
      price: 'A partir de R$ 5.499',
      gradient: 'from-blue-200 via-green-100 to-yellow-100',
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-semibold mb-2">
        <span className="text-blue-600">Novidades.</span>
        <span className="text-gray-600"> Presentes de arrasar.</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {featured.map((product, index) => (
          <div
            key={index}
            className={`rounded-3xl p-8 bg-gradient-to-br ${product.gradient} min-h-96 flex flex-col justify-between hover:scale-105 transition-transform cursor-pointer`}
          >
            <div>
              <h3 className={`text-2xl font-semibold mb-2 ${product.textColor || 'text-gray-900'}`}>
                {product.title}
              </h3>
              <p className={`text-lg mb-4 ${product.textColor ? 'text-pink-400' : 'text-pink-600'}`}>
                {product.subtitle}
              </p>
              <p className={`text-sm ${product.textColor || 'text-gray-700'}`}>
                {product.price}
              </p>
            </div>
            <div className="mt-8 h-48 flex items-center justify-center text-6xl">
              {index === 0 && '📱'}
              {index === 1 && '💻'}
              {index === 2 && '📱'}
              {index === 3 && '⌚'}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;