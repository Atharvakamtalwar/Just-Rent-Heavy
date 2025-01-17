import React from 'react';
import { User, Settings, FileText, LogOut, Wrench, CreditCard } from 'lucide-react';

export default function Profile() {
  // Mock user data
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1 234 567 8900',
    listings: 5,
    joined: 'January 2024'
  };

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Profile Header */}
          <div className="bg-gray-800 rounded-xl p-8 mb-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-32 h-32 bg-yellow-400 rounded-full flex items-center justify-center">
                <User size={48} className="text-black" />
              </div>
              <div className="text-center md:text-left">
                <h1 className="text-3xl font-bold text-white mb-2">{user.name}</h1>
                <p className="text-gray-400 mb-1">{user.email}</p>
                <p className="text-gray-400 mb-4">{user.phone}</p>
                <div className="flex gap-4 justify-center md:justify-start">
                  <div>
                    <p className="text-yellow-400 font-bold">{user.listings}</p>
                    <p className="text-sm text-gray-400">Listings</p>
                  </div>
                  <div>
                    <p className="text-white font-bold">Member since</p>
                    <p className="text-sm text-gray-400">{user.joined}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[
              { icon: Wrench, title: 'My Listings', description: 'Manage your equipment listings' },
              { icon: CreditCard, title: 'Billing', description: 'View and manage payments' },
              { icon: Settings, title: 'Settings', description: 'Account preferences and security' },
              { icon: FileText, title: 'Documents', description: 'Contracts and agreements' },
              { icon: LogOut, title: 'Sign Out', description: 'Log out of your account' }
            ].map((item, index) => (
              <button
                key={index}
                className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-colors text-left"
              >
                <item.icon className="text-yellow-400 mb-4" size={24} />
                <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.description}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}