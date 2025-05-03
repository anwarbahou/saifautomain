import React, { useState, useEffect } from 'react';
import { Menu, X, Car } from 'lucide-react';
import { Button } from '../common';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className={`flex items-center space-x-2 ${isScrolled ? 'text-blue-950' : 'text-white'}`}>
          <Car size={28} strokeWidth={2} />
          <span className="text-xl font-bold">Saifauto</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className={`text-sm font-medium transition-colors ${isScrolled ? 'text-blue-950 hover:text-blue-800' : 'text-white hover:text-blue-200'}`}>
            Home
          </Link>
          <a href="#cars" className={`text-sm font-medium transition-colors ${isScrolled ? 'text-blue-950 hover:text-blue-800' : 'text-white hover:text-blue-200'}`}>
            Our Cars
          </a>
          <a href="#locations" className={`text-sm font-medium transition-colors ${isScrolled ? 'text-blue-950 hover:text-blue-800' : 'text-white hover:text-blue-200'}`}>
            Locations
          </a>
          <a href="#about" className={`text-sm font-medium transition-colors ${isScrolled ? 'text-blue-950 hover:text-blue-800' : 'text-white hover:text-blue-200'}`}>
            About Us
          </a>
          <a href="#contact" className={`text-sm font-medium transition-colors ${isScrolled ? 'text-blue-950 hover:text-blue-800' : 'text-white hover:text-blue-200'}`}>
            Contact
          </a>
          <Link to="/login" className={`text-sm font-medium transition-colors ${isScrolled ? 'text-blue-950 hover:text-blue-800' : 'text-white hover:text-blue-200'}`}>
            Login
          </Link>
          <Button
            as="a"
            href="#booking"
            variant={isScrolled ? 'primary' : 'white'}
            className={isScrolled ? '' : '!bg-white !text-blue-950 hover:!bg-gray-100'}
          >
            Book a Car
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="icon"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`md:hidden ${isScrolled ? 'text-blue-950' : 'text-white'} ${isScrolled ? '' : '!bg-white !text-blue-950'}`}
          icon={isMenuOpen ? X : Menu}
        />
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white py-4 px-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-sm font-medium hover:text-blue-800 transition-colors text-blue-950"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <a 
              href="#cars" 
              className="text-sm font-medium hover:text-blue-800 transition-colors text-blue-950"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Cars
            </a>
            <a 
              href="#locations" 
              className="text-sm font-medium hover:text-blue-800 transition-colors text-blue-950"
              onClick={() => setIsMenuOpen(false)}
            >
              Locations
            </a>
            <a 
              href="#about" 
              className="text-sm font-medium hover:text-blue-800 transition-colors text-blue-950"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </a>
            <a 
              href="#contact" 
              className="text-sm font-medium hover:text-blue-800 transition-colors text-blue-950"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <Link 
              to="/login" 
              className="text-sm font-medium hover:text-blue-800 transition-colors text-blue-950"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </Link>
            <Button
              as="a"
              href="#booking"
              variant="white"
              fullWidth
              className="!bg-white !text-blue-950 hover:!bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Book a Car
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;