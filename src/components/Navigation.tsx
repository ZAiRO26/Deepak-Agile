import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Trainings', href: '/trainings' },
    { name: 'About', href: '/about' },
    { name: 'Scrum Quizzes', href: '/quizzes', dropdown: [
      { name: 'Scrum Master (LM)', href: '/quizzes/sm-lm' },
      { name: 'Scrum Master (RM)', href: '/quizzes/sm-rm' },
      { name: 'Product Owner (LM)', href: '/quizzes/po-lm' },
      { name: 'Product Owner (RM)', href: '/quizzes/po-rm' },
      { name: 'Scaled Scrum (LM)', href: '/quizzes/scaled-lm' },
      { name: 'SPS™ Preparation', href: '/quizzes/sps-prep' },
    ] },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">D</span>
                </div>
                <span className="ml-3 text-xl font-bold text-gray-900">
                  Deepak <span className="text-blue-600">Nailwal</span>
                </span>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                // @ts-ignore
                item.dropdown ? (
                  <div key={item.name} className="relative group">
                    <a
                      href={item.href}
                      className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                    >
                      {item.name}
                    </a>
                    <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition">
                      <div className="py-2">
                        {/** @ts-ignore */}
                        {item.dropdown.map((sub: any) => (
                          <a
                            key={sub.name}
                            href={sub.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                          >
                            {sub.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                )
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            {navItems.map((item) => (
              // @ts-ignore
              item.dropdown ? (
                <div key={item.name}>
                  <div className="px-3 py-2 text-gray-700 font-semibold">{item.name}</div>
                  <div className="ml-2">
                    {/** @ts-ignore */}
                    {item.dropdown.map((sub: any) => (
                      <a
                        key={sub.name}
                        href={sub.href}
                        className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {sub.name}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              )
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;