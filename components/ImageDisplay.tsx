
import React from 'react';
import LoadingSpinner from './LoadingSpinner';

interface ImageDisplayProps {
  imageUrl: string | null;
  isLoading: boolean;
  error: string | null;
}

const ImageDisplay: React.FC<ImageDisplayProps> = ({ imageUrl, isLoading, error }) => {
  return (
    <div className="w-full aspect-square bg-purple-100/50 rounded-2xl flex items-center justify-center p-4 border-2 border-dashed border-purple-300/50 shadow-inner overflow-hidden">
      {isLoading && <LoadingSpinner />}
      {error && <p className="text-red-500 font-bold p-4">{error}</p>}
      {!isLoading && !error && imageUrl && (
        <img
          src={imageUrl}
          alt="Animal féerique généré"
          className="object-contain w-full h-full rounded-lg animate-fade-in"
          style={{ animation: 'fadeIn 0.5s ease-in-out' }}
        />
      )}
      {!isLoading && !error && !imageUrl && (
        <div className="text-center text-purple-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-16 w-16 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p className="mt-2 font-semibold">Ton image magique apparaîtra ici !</p>
        </div>
      )}
      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: scale(0.95); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default ImageDisplay;
