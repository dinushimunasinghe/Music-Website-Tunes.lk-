import React from 'react';
import { Play, Youtube } from 'lucide-react';

const COVERS = [
  {
    title: "Awurudu Awa (අවුරුදු ආවා) - Cover By Manal Hansana",
    thumbnail: "https://i.postimg.cc/g0RRMjvh/qxct-VSHR-4k-HD.jpg",
    youtubeUrl: "https://youtu.be/qxctVSHR_4k?si=LWO5Fr5zT0g-iVIF"
  },
  {
    title: "Hiru Hinahena (හිරු හිනැහෙන) - Sandaruwan Jayasinghe ft. Subhashini Konara",
    thumbnail: "https://i.postimg.cc/rFT2YPxY/7w6j-Vv-KA73g-HD.jpg",
    youtubeUrl: "https://youtu.be/7w6jVvKA73g?si=lfZLUWXvXoCO3C8C"
  },
  {
    title: "Duka Wadi Tharamata - Cover Song Sandaruwan Jayasinghe ft Noel Raj",
    thumbnail: "https://i.postimg.cc/x8fZRsgF/Bvf2-PDBH1-S8-HD.jpg",
    youtubeUrl: "https://youtu.be/Bvf2PDBH1S8?si=rTcQzmVOH37vemIg"
  },
  {
    title: "Muhuda Deba Karana (අපි වෙනුවෙන් අපි) - Sandaruwan Jayasinghe ",
    thumbnail: "https://i.postimg.cc/3wN7Xx65/Ue-J1-M4z-RHBI-HD.jpg",
    youtubeUrl: "https://youtu.be/UeJ1M4zRHBI?si=FTM4R6sQQGywKr2y"
  }
];

interface CoverCardProps {
  title: string;
  artist: string;
  thumbnail: string;
  youtubeUrl: string;
}

function CoverCard({ title, artist, thumbnail, youtubeUrl }: CoverCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-zinc-900">
      <div className="aspect-video w-full">
        <img
          src={thumbnail}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </div>
      
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <a
          href={youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-red-600 p-4 text-white hover:bg-red-700 transition-colors transform hover:scale-110"
        >
          <Play size={24} className="animate-pulse" />
        </a>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
        <h3 className="text-lg font-semibold line-clamp-2">{title}</h3>
        <p className="text-sm text-gray-300 mt-1">{artist}</p>
      </div>
    </div>
  );
}

export default function Covers() {
  return (
    <section id="covers" className="bg-zinc-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Music Covers</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Listen to our unique interpretations of popular songs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COVERS.map((cover, index) => (
            <CoverCard key={index} {...cover} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://youtube.com/@audiozonemusic8334"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-red-600 text-white px-8 py-3 rounded-full font-medium hover:bg-red-700 transition-colors"
          >
            <Youtube size={20} />
            <span>Watch More Covers</span>
          </a>
        </div>
      </div>
    </section>
  );
}