import React, { useState, useEffect } from 'react';
import { Menu, X, HeartPulse } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#features' },
    { name: 'Programs', href: '#programs' },
    { name: 'Technology', href: '#tech' },
    { name: 'How It Works', href: '#how-it-works' },
  ];

  return (
    <header 
      className={`fixed w-full z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group">
          <div className="bg-teal-600 text-white p-2 rounded-lg group-hover:bg-teal-700 transition-colors">
            <HeartPulse className="w-6 h-6" />
          </div>
          <span className={`font-bold text-xl tracking-tight ${isScrolled ? 'text-gray-900' : 'text-teal-900'}`}>
            Easy Health Care
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-sm font-medium hover:text-teal-600 transition-colors ${
                isScrolled ? 'text-gray-600' : 'text-gray-700'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#cta" 
            className="px-5 py-2.5 bg-teal-600 text-white text-sm font-semibold rounded-full hover:bg-teal-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Book Consultation
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 md:hidden flex flex-col py-4 px-6 animate-fade-in-down">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="py-3 text-gray-700 font-medium border-b border-gray-50 last:border-0 hover:text-teal-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#cta" 
            className="mt-4 w-full py-3 bg-teal-600 text-white text-center font-semibold rounded-lg hover:bg-teal-700"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Book Consultation
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;