import React from 'react';
import { Package, Music, Video, Radio, Megaphone, Globe } from 'lucide-react';

interface PriceCardProps {
  title: string;
  price: string;
  features: string[];
  icon: React.ReactNode;
  popular?: boolean;
}

function PriceCard({ title, price, features, icon, popular }: PriceCardProps) {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Hi, I'm interested in the ${title} package (LKR ${price}). Please provide more information.`
    );
    window.open(`https://wa.me/94713033167?text=${message}`, '_blank');
  };

  return (
    <div className={`relative bg-zinc-900 rounded-xl p-6 ${popular ? 'border-2 border-white' : 'border border-zinc-800'}`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-white text-black px-3 py-1 rounded-full text-sm font-medium">
            Most Popular
          </span>
        </div>
      )}
      <div className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-lg mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <div className="mb-4">
        <span className="text-2xl font-bold">LKR {price}</span>
      </div>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="text-gray-400 text-sm flex items-start">
            <span className="mr-2 text-white">•</span>
            {feature}
          </li>
        ))}
      </ul>
      <button 
        onClick={handleWhatsAppClick}
        className="w-full mt-6 bg-white text-black py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2"
      >
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        <span>Select Package</span>
      </button>
    </div>
  );
}

export default function Store() {
  const packages = [
    {
      title: "Full Production",
      price: "300,000",
      icon: <Package className="w-6 h-6" />,
      features: [
        "Complete Audio & Video Production",
        "Professional Mix & Master",
        "Voice Recording & Lyrics",
        "Video Production with Models",
        "Editing & Color Grading",
        "Makeup & Costumes",
        "Promotional Materials"
      ],
      popular: true
    },
    {
      title: "New Song Audio",
      price: "75,000",
      icon: <Music className="w-6 h-6" />,
      features: [
        "Original Melody & Music",
        "Professional Mix & Master",
        "Voice Recording",
        "Lyrics Writing",
        "2 Revisions Included"
      ]
    },
    {
      title: "Music Video",
      price: "190,000",
      icon: <Video className="w-6 h-6" />,
      features: [
        "Professional Video Direction",
        "Camera Crew & Equipment",
        "Editing & Color Grading",
        "Makeup & Styling",
        "Promotional Materials"
      ]
    },
    {
      title: "Studio Time",
      price: "3,000/hr",
      icon: <Radio className="w-6 h-6" />,
      features: [
        "Professional Recording Studio",
        "Sound Engineer",
        "High-End Equipment",
        "Comfortable Environment",
        "Bulk Hour Discounts"
      ]
    },
    {
      title: "Premium Promotion",
      price: "120,000",
      icon: <Megaphone className="w-6 h-6" />,
      features: [
        "Multi-Platform Promotion",
        "Social Media Marketing",
        "Google Ads Campaign",
        "2 TikTok Promotions",
        "Detailed Analytics"
      ]
    },
    {
      title: "Digital Distribution",
      price: "7,000",
      icon: <Globe className="w-6 h-6" />,
      features: [
        "300+ Streaming Platforms",
        "YouTube Content ID",
        "Google Knowledge Panel",
        "Royalty Collection",
        "24/7 Support"
      ]
    }
  ];

  return (
    <section id="store" className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Pricing Packages</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose from our comprehensive range of services designed to bring your musical vision to life
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <PriceCard key={pkg.title} {...pkg} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400">
            Need a custom package? <button onClick={() => window.open('https://wa.me/94713033167', '_blank')} className="text-white underline">Contact us</button> for personalized solutions.
          </p>
        </div>
      </div>
    </section>
  );
}