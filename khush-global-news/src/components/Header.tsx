import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Politics', path: '/category/politics' },
    { name: 'National', path: '/category/national' },
    { name: 'Counties', path: '/category/counties' },
    { name: 'Business', path: '/category/business' },
    { name: 'Society', path: '/category/society' },
    { name: 'Opinion', path: '/category/opinion' },
    { name: 'Fact Check', path: '/category/fact-check' },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-white">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-primary text-white font-bold p-1 rounded-sm text-xl tracking-tighter">
              KHUSH
            </div>
            <span className="hidden sm:inline-block font-display font-bold text-xl tracking-tight text-primary">
              GLOBAL NEWS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    "text-sm font-medium transition-colors hover:text-accent",
                    isActive ? "text-accent font-bold" : "text-text/80"
                  )
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            {isSearchOpen ? (
              <form onSubmit={handleSearch} className="flex items-center">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="border border-gray-300 rounded-l-md px-3 py-1 text-sm focus:outline-none focus:border-accent"
                  autoFocus
                />
                <Button type="submit" size="sm" className="rounded-l-none bg-accent hover:bg-accent/90">
                  Go
                </Button>
                <Button 
                  type="button" 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => setIsSearchOpen(false)}
                  className="ml-1"
                >
                  <X className="h-4 w-4" />
                </Button>
              </form>
            ) : (
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-text/80 hover:text-accent"
                onClick={() => setIsSearchOpen(true)}
              >
                <Search className="h-5 w-5" />
              </Button>
            )}
            <Button className="hidden sm:flex bg-accent hover:bg-accent/90 text-white font-semibold">
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-border bg-white py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <form onSubmit={handleSearch} className="flex items-center mb-4">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="flex-1 border border-gray-300 rounded-l-md px-3 py-2 text-sm focus:outline-none focus:border-accent"
              />
              <Button type="submit" className="rounded-l-none bg-accent hover:bg-accent/90">
                <Search className="h-4 w-4" />
              </Button>
            </form>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-base font-medium text-text hover:text-accent"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button className="w-full bg-accent hover:bg-accent/90 text-white">
              Subscribe
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
