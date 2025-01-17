import React, { useState } from 'react';
import { Upload, DollarSign, MapPin, Phone, FileText } from 'lucide-react';

export default function ListEquipment() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    location: '',
    contact: '',
    category: 'excavator'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will be handled here
  };

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white mb-8">List Your Equipment</h1>
        
        <div className="bg-gray-800 rounded-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-white mb-2">Equipment Category</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-400"
              >
                <option value="excavator">Excavator</option>
                <option value="bulldozer">Bulldozer</option>
                <option value="crane">Crane</option>
                <option value="backhoe">Backhoe Loader</option>
                <option value="forklift">Forklift</option>
              </select>
            </div>

            <div>
              <label className="block text-white mb-2">Equipment Title</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-400"
                placeholder="e.g., CAT 320 Excavator"
              />
            </div>

            <div>
              <label className="block text-white mb-2">Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 h-32 focus:ring-2 focus:ring-yellow-400"
                placeholder="Describe your equipment's features, condition, and availability"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white mb-2">Daily Rate ($)</label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-3 text-gray-400" size={16} />
                  <input
                    type="number"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    className="w-full bg-gray-700 text-white rounded-lg pl-10 pr-4 py-2 focus:ring-2 focus:ring-yellow-400"
                    placeholder="299"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white mb-2">Location</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 text-gray-400" size={16} />
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full bg-gray-700 text-white rounded-lg pl-10 pr-4 py-2 focus:ring-2 focus:ring-yellow-400"
                    placeholder="City, State"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-white mb-2">Contact Number</label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 text-gray-400" size={16} />
                <input
                  type="tel"
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  className="w-full bg-gray-700 text-white rounded-lg pl-10 pr-4 py-2 focus:ring-2 focus:ring-yellow-400"
                  placeholder="Your contact number"
                />
              </div>
            </div>

            <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center">
              <Upload className="mx-auto text-gray-400 mb-4" size={32} />
              <p className="text-gray-400">Drag and drop images here, or click to select files</p>
              <input type="file" multiple className="hidden" />
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-400 text-black py-3 rounded-lg hover:bg-yellow-500 transition-colors font-semibold"
            >
              List Equipment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}