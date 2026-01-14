import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="leading-tight">
              <h1 className="text-lg font-semibold tracking-wide text-gray-900">
                RODZE
              </h1>
              <p className="text-[11px] uppercase tracking-widest text-gray-500">
                INTERNATIONAL
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10 text-sm">
            {["Home", "Properties", "Agents", "About", "Contact"].map(
              (item) => (
                <Link
                  key={item}
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="relative text-gray-700 hover:text-gray-900 transition"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gray-900 transition-all group-hover:w-full"></span>
                </Link>
              )
            )}
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-gray-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M4 7h16M4 12h16M4 17h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 space-y-5 border-t border-gray-200 pt-6 text-sm">
            {["Home", "Properties", "Agents", "About", "Contact"].map(
              (item) => (
                <Link
                  key={item}
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="block text-gray-700 hover:text-gray-900 transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              )
            )}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
