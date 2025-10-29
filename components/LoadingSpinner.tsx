
import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 text-purple-600">
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 border-4 border-pink-200 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-transparent border-t-pink-500 rounded-full animate-spin"></div>
        <div className="absolute inset-2 flex items-center justify-center text-4xl animate-pulse">
        ✨
        </div>
      </div>
      <p className="font-bold text-lg">La magie est en cours...</p>
    </div>
  );
};

export default LoadingSpinner;
