import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ShoppingCart, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <ShoppingCart className="h-6 w-6 text-orange-500" />
              <span className="ml-2 text-lg font-bold text-white">HardwarePro</span>
            </div>
            <p className="text-sm mb-4">
              Your one-stop shop for quality hardware products and professional tools.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-slate-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-slate-400 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-bold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/category/tools" className="text-slate-400 hover:text-white transition-colors">
                  Tools
                </Link>
              </li>
              <li>
                <Link to="/category/building-materials" className="text-slate-400 hover:text-white transition-colors">
                  Building Materials
                </Link>
              </li>
              <li>
                <Link to="/category/electrical" className="text-slate-400 hover:text-white transition-colors">
                  Electrical
                </Link>
              </li>
              <li>
                <Link to="/category/plumbing" className="text-slate-400 hover:text-white transition-colors">
                  Plumbing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                <span>123 Hardware St, Tool City, TC 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-orange-500 mr-2" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-orange-500 mr-2" />
                <span>info@hardwarepro.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-sm text-slate-400 text-center">
          <p>© {new Date().getFullYear()} HardwarePro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;