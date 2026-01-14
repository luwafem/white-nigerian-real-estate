import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Properties from "./pages/Properties";
import PropertyDetails from "./pages/PropertyDetails";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-900">
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/property/:id" element={<PropertyDetails />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="border-t border-gray-200 mt-24">
          <div className="max-w-7xl mx-auto px-6 py-20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">
              {/* Brand */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div>
                    <p className="font-medium">RODZE</p>
                    <p className="text-xs text-gray-500 uppercase tracking-widest">
                      INTERNATIONAL
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 max-w-sm">
                  A curated real estate platform connecting discerning buyers
                  with Nigeria’s finest properties.
                </p>
              </div>

              {/* Links */}
              <div>
                <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-6">
                  Navigation
                </h4>
                <ul className="space-y-3">
                  <li>
                    <Link to="/" className="hover:opacity-70 transition">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/properties" className="hover:opacity-70 transition">
                      Properties
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="hover:opacity-70 transition">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="hover:opacity-70 transition">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-6">
                  Contact
                </h4>
                <ul className="space-y-3 text-gray-600">
                  <li>+234 1 234 5678</li>
                  <li>info@RODZEINTERNATIONAL.ng</li>
                  <li>Lagos, Nigeria</li>
                </ul>
              </div>

              {/* Newsletter */}
              <div>
                <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-6">
                  Updates
                </h4>
                <p className="text-gray-600 mb-4">
                  Receive property insights and market updates.
                </p>

                <div className="flex border border-gray-300">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="flex-1 px-4 py-3 text-sm focus:outline-none"
                  />
                  <button className="px-5 text-sm font-medium bg-gray-900 text-white hover:bg-gray-800 transition">
                    Join
                  </button>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 mt-16 pt-8 text-center text-xs text-gray-500">
              © {new Date().getFullYear()} RODZE INTERNATIONAL. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
