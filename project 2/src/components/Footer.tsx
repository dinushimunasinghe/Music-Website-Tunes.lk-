import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">TUNES.LK</h3>
            <p className="text-gray-400"></p>
          </div>
          
          <div className="md:text-right">
            <div className="mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-zinc-800 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-white/20"
              />
              <button className="bg-white text-black px-4 py-2 rounded-r-lg font-medium hover:bg-gray-200 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} TUNES.LK. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}