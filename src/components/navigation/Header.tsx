import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, ShoppingCart } from 'lucide-react';
import { categories } from '../../data/categories';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isDropdownOpen) setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <ShoppingCart className="h-8 w-8 text-blue-900" />
              <span className="ml-2 text-xl font-bold text-blue-900">HardwarePro</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-slate-700 hover:text-blue-900 px-3 py-2 text-sm font-medium transition-colors">
              Home
            </Link>
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="text-slate-700 hover:text-blue-900 px-3 py-2 text-sm font-medium flex items-center transition-colors"
              >
                Products <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {isDropdownOpen && (
                <div className="absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Link to="/products" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100">
                      All Products
                    </Link>
                    {categories.map((category) => (
                      <Link
                        key={category.id}
                        to={`/category/${category.slug}`}
                        className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100"
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <Link to="/about" className="text-slate-700 hover:text-blue-900 px-3 py-2 text-sm font-medium transition-colors">
              About Us
            </Link>
            <Link to="/contact" className="text-slate-700 hover:text-blue-900 px-3 py-2 text-sm font-medium transition-colors">
              Contact Us
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:text-blue-900 hover:bg-slate-100"
            >
              <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-900 hover:bg-slate-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <div>
              <button
                onClick={toggleDropdown}
                className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-900 hover:bg-slate-100 flex items-center justify-between"
              >
                Products <ChevronDown className={`h-4 w-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {isDropdownOpen && (
                <div className="pl-4">
                  <Link
                    to="/products"
                    className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-blue-900 hover:bg-slate-100"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    All Products
                  </Link>
                  {categories.map((category) => (
                    <Link
                      key={category.id}
                      to={`/category/${category.slug}`}
                      className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-blue-900 hover:bg-slate-100"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-900 hover:bg-slate-100"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-900 hover:bg-slate-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;