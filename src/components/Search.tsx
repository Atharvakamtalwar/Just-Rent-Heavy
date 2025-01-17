import React, { useState } from 'react';
import { Search as SearchIcon, Filter } from 'lucide-react';

export default function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');

  // Mock data for demonstration
  const equipment = [
    {
      id: 1,
      title: 'CAT 320 Excavator',
      category: 'excavator',
      price: 299,
      location: 'New York, NY',
      image: 'https://images.unsplash.com/photo-1519452575417-564c1401ecc0'
    },
    {
      id: 2,
      title: 'Komatsu D61 Bulldozer',
      category: 'bulldozer',
      price: 399,
      location: 'Los Angeles, CA',
      image: 'https://images.unsplash.com/photo-1519452575417-564c1401ecc0'
    },
    // Add more mock data as needed
  ];

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <SearchIcon className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-gray-800 text-white rounded-lg pl-10 pr-4 py-2 focus:ring-2 focus:ring-yellow-400"
              placeholder="Search equipment by name, type, or location"
            />
          </div>
          
          <div className="flex gap-4">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="bg-gray-800 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-400"
            >
              <option value="all">All Categories</option>
              <option value="excavator">Excavators</option>
              <option value="bulldozer">Bulldozers</option>
              <option value="crane">Cranes</option>
              <option value="backhoe">Backhoe Loaders</option>
            </select>
            
            <button className="bg-gray-800 text-white px-4 rounded-lg hover:bg-gray-700">
              <Filter size={20} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {equipment.map((item) => (
            <div key={item.id} className="bg-gray-800 rounded-xl overflow-hidden group hover:transform hover:scale-105 transition-all duration-300">
              <div className="relative h-48">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
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
      </div>
    </div>
  );
}