import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-white text-primary font-bold p-1 rounded-sm text-xl tracking-tighter">
                KHUSH
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white">
                GLOBAL NEWS
              </span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Kenya’s Trending Politics, Public Policy & National Conversations — Explained Clearly.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Sections */}
          <div>
            <h3 className="font-bold text-lg mb-4">Sections</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/category/politics" className="hover:text-white">Politics</Link></li>
              <li><Link to="/category/business" className="hover:text-white">Business</Link></li>
              <li><Link to="/category/counties" className="hover:text-white">Counties</Link></li>
              <li><Link to="/category/opinion" className="hover:text-white">Opinion</Link></li>
              <li><Link to="/category/fact-check" className="hover:text-white">Fact Check</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white">Terms of Service</Link></li>
              <li><Link to="/disclaimer" className="hover:text-white">Disclaimer</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-4">Subscribe</h3>
            <p className="text-gray-300 text-sm mb-4">
              Get the latest updates directly to your inbox.
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border border-white/20 rounded px-3 py-2 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:border-white"
              />
              <button className="bg-accent hover:bg-accent/90 text-white font-semibold py-2 px-4 rounded text-sm transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Khush Global News. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
