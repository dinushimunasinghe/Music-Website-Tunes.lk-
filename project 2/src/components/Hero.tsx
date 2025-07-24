import React from 'react';
import { Play } from 'lucide-react';

export default function Hero() {
  return (
    <div id="home" className="relative h-screen">
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover filter grayscale"
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80"
        >
          <source
            src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=165&oauth2_token_id=57447761"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/60 mix-blend-multiply" />
      </div>

      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          𝐓𝐔𝐍𝐄𝐒.𝐋𝐊
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
          Sri Lanka's No. 1 Digital Music Network
        </p>
        <a 
          href="https://www.youtube.com/@tuneslkmusic"
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-white text-black px-8 py-3 rounded-full flex items-center space-x-2 hover:bg-gray-200 transition-colors duration-200"
        >
          <Play
            size={20}
            className="group-hover:scale-110 transition-transform duration-200"
          />
          <span className="font-medium">Listen Now</span>
        </a>
      </div>
    </div>
  );
}