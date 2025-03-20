import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${scrolled ? 'bg-gray-900/95 backdrop-blur-sm' : 'bg-gray-800'} text-white shadow-lg sticky top-0 z-50 transition-all duration-300`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <span className="font-bold text-xl text-white">
              <span className="text-[#3CAEA3]">P</span>KJ
            </span>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
              <Link href={`#${item.toLowerCase()}`} key={item}>
                <span className="text-white hover:text-[#3CAEA3] relative pb-1 cursor-pointer transition-colors duration-300 group">
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#3CAEA3] group-hover:w-full transition-all duration-300"></span>
                </span>
              </Link>
            ))}
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="outline-none focus:outline-none"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-5">
                <span className={`absolute h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
                <span className={`absolute h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : ''} top-2.5`}></span>
                <span className={`absolute h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''} top-5`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-60' : 'max-h-0'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800">
          {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
            <Link href={`#${item.toLowerCase()}`} key={item}>
              <span 
                className="block px-3 py-2 text-gray-100 hover:bg-gray-700 hover:text-[#3CAEA3] rounded-md transition-colors duration-200 cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;