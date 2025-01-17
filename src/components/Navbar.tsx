import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Heart, PlusCircle, Search, User, Construction } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Construction className="text-yellow-400" size={32} />
            <span className="text-2xl font-cursive text-yellow-400">Just Rent Heavy</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`${isActive('/') ? 'text-yellow-400' : 'text-gray-300'} hover:text-yellow-400 flex items-center space-x-1`}>
              <Home size={20} />
              <span>Home</span>
            </Link>
            <Link to="/favorites" className={`${isActive('/favorites') ? 'text-yellow-400' : 'text-gray-300'} hover:text-yellow-400 flex items-center space-x-1`}>
              <Heart size={20} />
              <span>Favorites</span>
            </Link>
            <Link to="/add" className="bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-500 flex items-center space-x-1">
              <PlusCircle size={20} />
              <span>List Equipment</span>
            </Link>
            <Link to="/search" className={`${isActive('/search') ? 'text-yellow-400' : 'text-gray-300'} hover:text-yellow-400 flex items-center space-x-1`}>
              <Search size={20} />
              <span>Search</span>
            </Link>
            <Link to="/profile" className={`${isActive('/profile') ? 'text-yellow-400' : 'text-gray-300'} hover:text-yellow-400 flex items-center space-x-1`}>
              <User size={20} />
              <span>Profile</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-gray-300 hover:text-yellow-400">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}