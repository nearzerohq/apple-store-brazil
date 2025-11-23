import React from 'react';
import { Search, ShoppingBag } from 'lucide-react';

const Header = () => {
  const navItems = [
    { name: 'Loja', href: '/' },
    { name: 'Mac', href: '/mac' },
    { name: 'iPad', href: '/ipad' },
    { name: 'iPhone', href: '/iphone' },
    { name: 'Watch', href: '/watch' },
    { name: 'AirPods', href: '/airpods' },
    { name: 'TV e Casa', href: '/tv-casa' },
    { name: 'Entretenimento', href: '/entretenimento' },
    { name: 'Acessórios', href: '/acessorios' },
    { name: 'Suporte', href: '/suporte' },
  ];

  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-11">
          <div className="flex items-center space-x-8">
            <a href="/" className="flex items-center">
              <svg className="w-4 h-5" viewBox="0 0 14 44" fill="currentColor">
                <path d="M12.5 9.5c-.8 0-1.4.3-2 .7-.5-.4-1.2-.7-2-.7-1.7 0-3 1.3-3 3s1.3 3 3 3c.8 0 1.5-.3 2-.7.6.4 1.2.7 2 .7 1.7 0 3-1.3 3-3s-1.3-3-3-3zm-8 0c-1.7 0-3 1.3-3 3s1.3 3 3 3c.8 0 1.5-.3 2-.7-.5-.6-.8-1.4-.8-2.3s.3-1.7.8-2.3c-.5-.4-1.2-.7-2-.7z"/>
              </svg>
            </a>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-xs hover:text-gray-300 transition-colors hidden lg:block"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <button className="hover:text-gray-300 transition-colors">
              <Search className="w-4 h-4" />
            </button>
            <button className="hover:text-gray-300 transition-colors">
              <ShoppingBag className="w-4 h-4" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;