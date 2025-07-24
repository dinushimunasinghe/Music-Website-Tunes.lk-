import React from 'react';
import { Music, Headphones } from 'lucide-react';

export default function ListenNow() {
  return (
    <section id="listen" className="bg-gradient-to-b from-black to-zinc-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Listen Now</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Stream our music on your favorite platforms
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="https://open.spotify.com/artist/2So73AUXs4d3SmWJKxOOy2?si=kiIg1aJKRlSY6jtx0U-miA"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center space-x-3 bg-[#1DB954] hover:bg-[#1ed760] text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
            </svg>
            <span className="font-semibold">Listen on Spotify</span>
          </a>

          <a
            href="https://music.apple.com/lk/artist/niklo/1661189779"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center space-x-3 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            <Music className="w-6 h-6" />
            <span className="font-semibold">Listen on Apple Music</span>
          </a>

          <a
            href="https://www.youtube.com/@tuneslkmusic"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center space-x-3 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            <span className="font-semibold">Watch on YouTube</span>
          </a>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 text-gray-400">
            <Headphones className="w-5 h-5" />
            <span>Available on all major streaming platforms</span>
          </div>
        </div>
      </div>
    </section>
  );
}
