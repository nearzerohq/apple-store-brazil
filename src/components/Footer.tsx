import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
          <div>
            <h3 className="font-semibold text-xs mb-3">Comprar e Saber Mais</h3>
            <ul className="space-y-2 text-xs text-gray-600">
              <li><a href="#" className="hover:underline">Mac</a></li>
              <li><a href="#" className="hover:underline">iPad</a></li>
              <li><a href="#" className="hover:underline">iPhone</a></li>
              <li><a href="#" className="hover:underline">Watch</a></li>
              <li><a href="#" className="hover:underline">AirPods</a></li>
              <li><a href="#" className="hover:underline">TV e Casa</a></li>
              <li><a href="#" className="hover:underline">Acessórios</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-xs mb-3">Serviços</h3>
            <ul className="space-y-2 text-xs text-gray-600">
              <li><a href="#" className="hover:underline">Apple Music</a></li>
              <li><a href="#" className="hover:underline">Apple TV+</a></li>
              <li><a href="#" className="hover:underline">Apple Fitness+</a></li>
              <li><a href="#" className="hover:underline">Apple Arcade</a></li>
              <li><a href="#" className="hover:underline">iCloud</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-xs mb-3">Conta</h3>
            <ul className="space-y-2 text-xs text-gray-600">
              <li><a href="#" className="hover:underline">Gerenciar seu ID Apple</a></li>
              <li><a href="#" className="hover:underline">Conta Apple Store</a></li>
              <li><a href="#" className="hover:underline">iCloud.com</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-xs mb-3">Apple Store</h3>
            <ul className="space-y-2 text-xs text-gray-600">
              <li><a href="#" className="hover:underline">Encontrar uma loja</a></li>
              <li><a href="#" className="hover:underline">Genius Bar</a></li>
              <li><a href="#" className="hover:underline">Today at Apple</a></li>
              <li><a href="#" className="hover:underline">Acampamento de Verão Apple</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-xs mb-3">Sobre a Apple</h3>
            <ul className="space-y-2 text-xs text-gray-600">
              <li><a href="#" className="hover:underline">Newsroom</a></li>
              <li><a href="#" className="hover:underline">Liderança Apple</a></li>
              <li><a href="#" className="hover:underline">Oportunidades de Carreira</a></li>
              <li><a href="#" className="hover:underline">Investidores</a></li>
              <li><a href="#" className="hover:underline">Ética e Conformidade</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-300 pt-4">
          <p className="text-xs text-gray-600 mb-2">
            Mais formas de comprar: <a href="#" className="text-blue-600 hover:underline">Encontre uma Apple Store</a> ou <a href="#" className="text-blue-600 hover:underline">outro revendedor</a> perto de você. Ou ligue 0800-761-0880.
          </p>
          <div className="flex flex-wrap items-center justify-between text-xs text-gray-600">
            <p>Copyright © 2024 Apple Inc. Todos os direitos reservados.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:underline">Política de Privacidade</a>
              <a href="#" className="hover:underline">Termos de Uso</a>
              <a href="#" className="hover:underline">Vendas e Reembolsos</a>
              <a href="#" className="hover:underline">Legal</a>
              <a href="#" className="hover:underline">Mapa do Site</a>
            </div>
          </div>
          <p className="text-xs text-gray-600 mt-2">Brasil</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;