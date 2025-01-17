import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ListEquipment from "./components/ListEquipment";
import Search from "./components/Search";
import Favorites from "./components/Favorites";
import Profile from "./components/Profile";
import { Construction } from "lucide-react";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1519452575417-564c1401ecc0"
            alt="Construction equipment"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              India's Premier Earthmover Marketplace
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              List your earthmovers or find the perfect equipment for your
              project. Connect directly with owners and contractors across
              India.
            </p>
            <button className="bg-yellow-400 text-black px-8 py-3 rounded-lg hover:bg-yellow-500 transition-colors text-lg font-semibold">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            How Our Marketplace Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Register & Pay",
                description:
                  "Create your account and pay ₹1000 to unlock the ability to list up to 5 earthmovers on our marketplace.",
                icon: "📝",
              },
              {
                title: "List Equipment",
                description:
                  "Add your earthmovers with detailed specifications, photos, and rental terms to attract potential customers.",
                icon: "📋",
              },
              {
                title: "Connect & Earn",
                description:
                  "Receive inquiries directly from potential renters and manage your rentals efficiently.",
                icon: "💼",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="bg-gray-900 p-8 rounded-xl text-center"
              >
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Equipment Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Featured Equipment
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "JCB 3DX Backhoe",
                location: "Mumbai, Maharashtra",
                image: "https://images.unsplash.com/photo-1519452575417-564c1401ecc0",
              },
              {
                name: "Caterpillar Excavator",
                location: "Delhi, NCR",
                image: "https://images.unsplash.com/photo-1519452575417-564c1401ecc0",
              },
              {
                name: "TATA Hitachi Loader",
                location: "Bangalore, Karnataka",
                image: "https://images.unsplash.com/photo-1519452575417-564c1401ecc0",
              },
            ].map((equipment, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-xl overflow-hidden group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="relative h-64">
                  <img
                    src={equipment.image}
                    alt={equipment.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {equipment.name}
                  </h3>
                  <p className="text-gray-400 mb-4">{equipment.location}</p>
                  <button className="w-full bg-yellow-400 text-black py-2 rounded-lg hover:bg-yellow-500 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Why Choose Just Rent Heavy?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Affordable Listing",
                description:
                  "List up to 5 earthmovers for just ₹1000. No hidden charges or commission fees on rentals.",
                icon: "💰",
              },
              {
                title: "Wide Market Reach",
                description:
                  "Connect with contractors and customers across India. Expand your business reach.",
                icon: "🌐",
              },
              {
                title: "Easy Management",
                description:
                  "Simple listing process and easy-to-use dashboard to manage your equipment listings.",
                icon: "🛠️",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-900 p-8 rounded-xl text-center"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-8 md:mb-0">
              <Construction className="text-yellow-400" size={32} />
              <span className="text-2xl font-cursive text-yellow-400">
                Just Rent Heavy
              </span>
            </div>
            <div className="flex space-x-8 text-gray-400">
              <a href="#" className="hover:text-yellow-400">
                About Us
              </a>
              <a href="#" className="hover:text-yellow-400">
                Terms
              </a>
              <a href="#" className="hover:text-yellow-400">
                Privacy
              </a>
              <a href="#" className="hover:text-yellow-400">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<ListEquipment />} />
          <Route path="/search" element={<Search />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
