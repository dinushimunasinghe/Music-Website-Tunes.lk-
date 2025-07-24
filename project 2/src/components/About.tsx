import React from 'react';
import { Music, Award, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="bg-zinc-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://i.postimg.cc/bvZFCxJv/IMG-1090-1.jpg"
              alt="Nilan Fernando - Niklo Beats"
              className="rounded-lg shadow-2xl grayscale hover:grayscale-0 transition-all duration-500 w-full h-auto object-cover"
            />
          </div>

          <div className="text-white">
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <p className="text-gray-300 mb-8">
              I am Nilan Fernando (NIKLO), a music video director and rap artist. I bring songs to life with creative visuals and powerful storytelling. With a passion for music and film, I work closely with artists to create unique, high-quality videos that connect with fans. Every beat inspires a new story, and I’m here to turn that story into a visual experience.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-white/10 p-3 rounded-lg">
                  <Music size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">500+ Beats Produced</h3>
                  <p className="text-gray-400">
                    A decade of musical innovation
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-white/10 p-3 rounded-lg">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">Industry Recognition</h3>
                  <p className="text-gray-400">
                    Multiple platinum certifications
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-white/10 p-3 rounded-lg">
                  <Users size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">Global Collaborations</h3>
                  <p className="text-gray-400">
                    Worked with leading artists nationwide
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}