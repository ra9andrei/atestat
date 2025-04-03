import React, { useRef, useState } from 'react';

function Play() {
  const remainingClicks = useRef(2);
  const lastClickTime = useRef(null);
  const [showVideo, setShowVideo] = useState(false);

  const showAd = () => {
    window.open("https://dojo.mbd.one/app");
  };


  const handlePlayClick = () => {
    if (remainingClicks.current > 0) {
      showAd();
      remainingClicks.current -= 1;
    } else {
      setShowVideo(true);
      lastClickTime.current = Date.now();
    }
  };

  
  const handleVideoInteraction = () => {
    const currentTime = Date.now();
    const cooldownPeriod = 20000; //
    
    if (currentTime - lastClickTime.current > cooldownPeriod) {
      showAd();
      lastClickTime.current = currentTime;
    }
  };

  if (showVideo) {
    return (
      <main 
        className="relative min-h-screen bg-black cursor-pointer"
        onClick={handleVideoInteraction}
      >
        <video
          className="w-full h-full object-contain"
          src="/Kanye West - Runaway (Full-length Film).mp4"
          controls
          autoPlay
          muted
          playsInline
        />
        <div className="absolute bottom-8 left-0 right-0 text-center text-white text-sm opacity-75">
        </div>
      </main>
    );
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-900">
      <button
        onClick={handlePlayClick}
        className="group relative overflow-hidden rounded-2xl shadow-xl transition-transform hover:scale-95"
        aria-label="Play content"
      >
        <img
          className="w-screen max-w-4xl object-cover"
          src="earthquake-1665870_1280.jpg"
          alt="Featured content preview"
          loading="lazy"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity group-hover:bg-black/20">
          <svg
            className="w-20 h-20 text-white/90 drop-shadow-lg"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
            />
          </svg>
        </div>
      </button>
    </section>
  );
}

export default Play;