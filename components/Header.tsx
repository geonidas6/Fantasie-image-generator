
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white/50 backdrop-blur-md shadow-md py-4">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-600">
          Créateur d'Animaux Féeriques ✨
        </h1>
      </div>
    </header>
  );
};

export default Header;
