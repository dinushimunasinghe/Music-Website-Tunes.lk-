import React from 'react';
import { Video, Calendar, Users } from 'lucide-react';

interface LiveProgramCardProps {
  title: string;
  date: string;
  viewers: string;
  thumbnail: string;
  link: string;
}

function LiveProgramCard({ title, date, viewers, thumbnail, link }: LiveProgramCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-zinc-900 transition-all duration-300 hover:scale-[1.02]">
      <div className="aspect-video relative">
        <img
          src={thumbnail}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
          <div className="flex items-center space-x-4 text-sm text-gray-300">
            <div className="flex items-center">
              <Calendar size={16} className="mr-1" />
              <span>{date}</span>
            </div>
            <div className="flex items-center">
              <Users size={16} className="mr-1" />
              <span>{viewers}</span>
            </div>
          </div>
        </div>
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full flex items-center space-x-2 hover:bg-blue-700 transition-colors">
          <Video size={20} />
          <span>Watch on Facebook</span>
        </button>
      </a>
    </div>
  );
}

export default function LivePrograms() {
  const programs = [
    {
      title: "බෝගම්බර අඳුරු මතකයන් Interview - AK DILA",
      date: "january 05, 2024",
      viewers: "26K viewers",
      thumbnail: "https://i.postimg.cc/nh7P9jpw/Y0kz-Y-Vb-Bb4-HD.jpg",
      link: "https://youtu.be/Y0kzY_VbBb4?si=bP8rOc2YHwQTtbTn"
    },
    {
      title: "Bogambara (බෝගම්බර ) - A K DILA | BOOM BOX LIVE ",
      date: "December 06, 2024",
      viewers: "17.9k viewers",
      thumbnail: "https://i.postimg.cc/mgbmkdph/GSQLUJCA3e8-HD.jpg",
      link: "https://youtu.be/GSQLUJCA3e8?si=I1o2GJEKMnTwcfqB"
    },
    {
      title: "A.K. Dila Sandaruwan Jayasinghe - Nilan Fernando Uda Ira Sahurdaya ",
      date: "July 16, 2024",
      viewers: "1k viewers",
      thumbnail: "https://i.postimg.cc/90f1QzQ0/x-ax-Aqp-GV3-M-HD.jpg",
      link: "https://youtu.be/x_axAqpGV3M?si=JGm5thc3xgfg2kZv"
    },
    {
      title: " ITN Talk Show Interview (A.K DILA & Nilan Fernando) ",
      date: "July 06, 2024",
      viewers: "1k viewers",
      thumbnail: "https://i.postimg.cc/4x9tjfkP/qs-IVv-FUKZOI-HD.jpg",
      link: "https://youtu.be/qsIVvFUKZOI?si=y-4Zrr-wlVu7mwPA"
    }
  ];

  return (
    <section id="live" className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Live Programs</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Watch our latest live sessions and behind-the-scenes content
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program) => (
            <LiveProgramCard key={program.title} {...program} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://www.facebook.com/audiozonemusic"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            <span>Follow Us on Facebook</span>
          </a>
        </div>
      </div>
    </section>
  );
}