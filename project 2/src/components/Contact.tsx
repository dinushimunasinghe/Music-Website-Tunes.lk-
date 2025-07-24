import React from 'react';
import { Send, Instagram, Youtube, Music2 } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="text-white">
            <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
            <p className="text-gray-300 mb-8">
              Looking for custom beats or collaboration opportunities? Drop us a message and let's create something amazing together.
            </p>
            
            <div className="flex space-x-6 mb-8">
              <a 
                href="https://www.instagram.com/niklobeatz?igsh=MW00ZTR6N3I0Nnkxcw=="
                target="_blank"
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="https://www.youtube.com/@tuneslkmusic"
                target="_blank"
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Youtube size={24} />
              </a>
              <a 
                href="https://www.facebook.com/share/1G4fPLNSdA/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-zinc-900 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-zinc-900 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20"
              />
            </div>
            <div>
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full bg-zinc-900 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-white text-black py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2"
            >
              <Send size={20} />
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}