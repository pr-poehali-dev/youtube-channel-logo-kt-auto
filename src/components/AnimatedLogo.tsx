import { useState, useEffect } from 'react';

interface AnimatedLogoProps {
  logoUrl: string;
  autoPlay?: boolean;
}

const AnimatedLogo = ({ logoUrl, autoPlay = false }: AnimatedLogoProps) => {
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(() => {
        setKey(prev => prev + 1);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [autoPlay]);

  const handleReplay = () => {
    setIsPlaying(false);
    setTimeout(() => {
      setKey(prev => prev + 1);
      setIsPlaying(true);
    }, 50);
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div 
        key={key}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="logo-intro-animation">
          <div className="speed-lines-left"></div>
          <div className="speed-lines-right"></div>
          
          <img 
            src={logoUrl}
            alt="K&T Auto Blog Animated Logo"
            className="logo-image"
          />
          
          <div className="logo-glow"></div>
        </div>
      </div>

      {!autoPlay && (
        <button
          onClick={handleReplay}
          className="absolute bottom-4 right-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-bold transition-colors z-10"
        >
          ▶ Replay
        </button>
      )}
    </div>
  );
};

export default AnimatedLogo;
