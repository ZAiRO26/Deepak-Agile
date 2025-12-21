import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Briefcase } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  // Check if we're on the home page (dark hero)
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Trainings', href: '/trainings' },
    { name: 'About', href: '/about' },
    {
      name: 'Quizzes',
      href: '/quizzes',
      dropdown: [
        { name: 'Scrum Master (LM)', href: '/quizzes/sm-lm' },
        { name: 'Scrum Master (RM)', href: '/quizzes/sm-rm' },
        { name: 'Product Owner (LM)', href: '/quizzes/po-lm' },
        { name: 'Product Owner (RM)', href: '/quizzes/po-rm' },
        { name: 'Scaled Scrum (LM)', href: '/quizzes/scaled-lm' },
        { name: 'SPS™ Preparation', href: '/quizzes/sps-prep' },
      ]
    },
    { name: 'Contact', href: '/contact' },
  ];

  // Determine text color based on page and scroll state
  const getTextColor = () => {
    if (isScrolled) return 'text-charcoal'; // Always dark when scrolled (white bg)
    if (isHomePage) return 'text-white/90 hover:text-white'; // White on home page (dark hero)
    return 'text-charcoal hover:text-accent'; // Dark on other pages (light bg)
  };

  const getLogoTextColor = () => {
    if (isScrolled) return 'text-charcoal';
    if (isHomePage) return 'text-white';
    return 'text-charcoal';
  };

  const getSubtitleColor = () => {
    if (isScrolled) return 'text-slate';
    if (isHomePage) return 'text-white/70';
    return 'text-slate';
  };

  const getIconColor = () => {
    if (isScrolled) return 'text-charcoal';
    if (isHomePage) return 'text-white';
    return 'text-charcoal';
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? 'bg-white shadow-medium py-3'
        : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="flex items-center group">
            <div className="relative">
              <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center shadow-accent transform group-hover:scale-105 transition-transform duration-300">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="ml-4">
              <span className={`text-xl font-display font-bold tracking-tight ${getLogoTextColor()}`}>
                Deepak <span className="text-accent">Nailwal</span>
              </span>
              <span className={`block text-xs font-semibold tracking-wider uppercase ${getSubtitleColor()}`}>
                Agile Coach & Trainer
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  className={`flex items-center px-4 py-2 text-sm font-semibold uppercase tracking-wide transition-colors ${getTextColor()}`}
                >
                  {item.name}
                  {item.dropdown && (
                    <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                  )}
                </a>

                {/* Dropdown */}
                {item.dropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-premium py-2 animate-fade-in-down">
                    {item.dropdown.map((dropItem) => (
                      <a
                        key={dropItem.name}
                        href={dropItem.href}
                        className="block px-4 py-3 text-sm font-medium text-charcoal hover:bg-light-gray hover:text-accent transition-colors"
                      >
                        {dropItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* CTA Button */}
            <a
              href="/contact"
              className="ml-4 px-6 py-2.5 bg-accent text-white text-sm font-bold uppercase tracking-wide rounded-lg shadow-accent hover:bg-accent-dark transition-all transform hover:-translate-y-0.5"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={`w-6 h-6 ${getIconColor()}`} />
            ) : (
              <Menu className={`w-6 h-6 ${getIconColor()}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 animate-fade-in-down">
            <div className="bg-white rounded-xl shadow-premium p-4 space-y-2">
              {navItems.map((item) => (
                <div key={item.name}>
                  <a
                    href={item.href}
                    className="block px-4 py-3 text-charcoal font-semibold uppercase tracking-wide hover:text-accent hover:bg-light-gray rounded-lg transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                  {item.dropdown && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.dropdown.map((dropItem) => (
                        <a
                          key={dropItem.name}
                          href={dropItem.href}
                          className="block px-4 py-2 text-sm text-slate hover:text-accent transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {dropItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <a
                href="/contact"
                className="block w-full text-center px-4 py-3 bg-accent text-white font-bold uppercase tracking-wide rounded-lg mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
