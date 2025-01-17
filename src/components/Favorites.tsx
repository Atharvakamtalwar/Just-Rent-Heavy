import React from 'react';
import { Heart, Trash2 } from 'lucide-react';

export default function Favorites() {
  // Mock data for demonstration
  const favorites = [
    {
      id: 1,
      title: 'CAT 320 Excavator',
      price: 299,
      location: 'New York, NY',
      image: 'https://source.unsplash.com/800x600/?excavator'
    },
    {
      id: 2,
      title: 'Komatsu D61 Bulldozer',
      price: 399,
      location: 'Los Angeles, CA',
      image: 'https://source.unsplash.com/800x600/?bulldozer'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center gap-2 mb-8">
          <Heart className="text-yellow-400" size={24} />
          <h1 className="text-4xl font-bold text-white">Your Favorites</h1>
        </div>

        {favorites.length === 0 ? (
          <div className="text-center py-12">
            <Heart className="mx-auto text-gray-400 mb-4" size={48} />
            <p className="text-gray-400 text-xl">No favorites yet</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {favorites.map((item) => (
              <div key={item.id} className="bg-gray-800 rounded-xl overflow-hidden group">
                <div className="relative h-48">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <button className="absolute top-4 right-4 p-2 bg-red-500/80 rounded-full hover:bg-red-600 transition-colors">
                    <Trash2 size={20} className="text-white" />
                  </button>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 mb-2">{item.location}</p>
                  <p className="text-yellow-400 font-semibold mb-4">${item.price}/day</p>
                  <button className="w-full bg-yellow-400 text-black py-2 rounded-lg hover:bg-yellow-500 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}