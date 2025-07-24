import React from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    'Home',
    'Releases',
    'Listen',
    'Covers',
    'Live',
    'Packages',
    'About',
    'Contact',
  ];

  return (
    <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="flex items-center gap-3">
              <img 
                src="https://i.postimg.cc/VkrR8JV0/Tunes-lk-01-2.png" 
                alt="TUNES.LK Logo" 
                className="h-12 w-auto"
              />
              <span className="text-white text-2xl font-bold tracking-wider">
                𝐓𝐔𝐍𝐄𝐒.𝐋𝐊
              </span>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={item === 'Releases' ? '#beats' : `#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item}
                href={getNavLink(item)}
                className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );

  function getNavLink(item: string) {
    switch (item) {
      case 'Home':
        return '#home';
      case 'Releases':
        return '#beats';
      case 'Listen':
        return '#listen';
      case 'Packages':
        return '#store';
      default:
        return `#${item.toLowerCase()}`;
    }
  }
}