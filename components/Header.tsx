import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Plus } from 'lucide-react';
import { Button } from './Button';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Challenges', path: '/challenges' },
    { name: 'Blog', path: '/blog' },
    { name: 'About', path: '/about' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
            <div className="w-8 h-8 bg-gradient-to-br from-brand-purple to-brand-pink rounded-lg flex items-center justify-center text-white font-bold font-heading">
              FD
            </div>
            <span className="font-heading font-bold text-xl text-slate-800 tracking-tight">
              Friend<span className="text-brand-purple">Dare</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-semibold transition-colors ${
                  location.pathname === link.path 
                    ? 'text-brand-purple' 
                    : 'text-slate-600 hover:text-brand-purple'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/create-quiz">
              <Button size="sm">
                <Plus className="w-4 h-4 mr-1" />
                Create Quiz
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-brand-purple hover:bg-slate-50"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4">
              <Link to="/create-quiz" onClick={() => setIsOpen(false)}>
                <Button fullWidth>Create Quiz</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};