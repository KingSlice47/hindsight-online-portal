import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Applications', href: '/applications' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <a href="#main-content" className="skip-link focus-ring">
        Skip to main content
      </a>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              to="/" 
              className="text-2xl font-bold text-charcoal hover:text-primary transition-colors duration-300 focus-ring rounded-md px-2 py-1"
              aria-label="Hindsight Consulting - Home"
            >
              Hindsight Consulting
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 focus-ring ${
                    location.pathname === item.href
                      ? 'bg-primary text-primary-foreground'
                      : 'text-charcoal hover:text-primary hover:bg-light-grey'
                  }`}
                  aria-current={location.pathname === item.href ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-white p-2 rounded-md text-charcoal hover:text-primary hover:bg-light-grey focus-ring"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? 'Close main menu' : 'Open main menu'}
            >
              {isOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-light-grey">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 focus-ring ${
                    location.pathname === item.href
                      ? 'bg-primary text-primary-foreground'
                      : 'text-charcoal hover:text-primary hover:bg-light-grey'
                  }`}
                  onClick={() => setIsOpen(false)}
                  aria-current={location.pathname === item.href ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
