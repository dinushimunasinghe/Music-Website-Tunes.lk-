import React from 'react';
import { Youtube as YoutubeIcon } from 'lucide-react';

interface BeatCardProps {
  title: string;
  genre: string;
  mood: string;
  youtubeUrl: string;
  thumbnailUrl: string;
}

export default function BeatCard({ title, genre, mood, youtubeUrl, thumbnailUrl }: BeatCardProps) {
  const handlePlay = () => {
    window.open(youtubeUrl, '_blank');
  };

  return (
    <div className="group relative overflow-hidden rounded-lg bg-zinc-900 transition-all duration-300 hover:scale-[1.02]">
      <div className="aspect-video w-full">
        <img
          src={thumbnailUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:bg-black/60" />
      </div>
      
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={handlePlay}
          className="rounded-full bg-red-600 p-4 text-white hover:bg-red-700 transition-colors transform hover:scale-110"
        >
          <YoutubeIcon size={24} className="animate-pulse" />
        </button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4 text-white bg-gradient-to-t from-black/80 to-transparent">
        <h3 className="text-lg font-semibold line-clamp-2">{title}</h3>
        <div className="flex items-center space-x-2 mt-1 text-sm text-gray-300">
          <span className="bg-white/10 px-2 py-1 rounded">{genre}</span>
          <span className="bg-white/10 px-2 py-1 rounded">{mood}</span>
        </div>
      </div>
    </div>
  );
}