
import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import PromptInput from './components/PromptInput';
import ImageDisplay from './components/ImageDisplay';
import Footer from './components/Footer';
import { generateImage } from './services/geminiService';

const App: React.FC = () => {
  const [prompt, setPrompt] = useState<string>('');
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateImage = useCallback(async () => {
    if (!prompt.trim() || isLoading) return;

    setIsLoading(true);
    setError(null);
    setGeneratedImage(null);

    try {
      const fullPrompt = `Un animal féerique pour un enfant, style conte de fées, illustration colorée et joyeuse : ${prompt}`;
      const imageData = await generateImage(fullPrompt);
      setGeneratedImage(imageData);
    } catch (err) {
      console.error(err);
      setError("Oups ! La magie n'a pas fonctionné. Réessaie avec une autre idée !");
    } finally {
      setIsLoading(false);
    }
  }, [prompt, isLoading]);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-200 via-pink-200 to-blue-200 text-gray-800">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 flex flex-col items-center justify-center">
        <div className="w-full max-w-2xl bg-white/70 backdrop-blur-sm rounded-2xl shadow-2xl p-6 md:p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-purple-700 mb-2">Imagine un animal magique !</h2>
          <p className="text-gray-600 mb-6">Décris-le ici et regarde la magie opérer.</p>
          
          <div className="space-y-6">
            <PromptInput
              prompt={prompt}
              setPrompt={setPrompt}
              onSubmit={handleGenerateImage}
              isLoading={isLoading}
            />
            <ImageDisplay
              imageUrl={generatedImage}
              isLoading={isLoading}
              error={error}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
