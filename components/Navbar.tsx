import { useState } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <span className="font-bold text-xl cursor-pointer">Your Name</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#about">
              <span className="hover:text-blue-600 cursor-pointer">About</span>
            </Link>
            <Link href="#projects">
              <span className="hover:text-blue-600 cursor-pointer">Projects</span>
            </Link>
            <Link href="#skills">
              <span className="hover:text-blue-600 cursor-pointer">Skills</span>
            </Link>
            <Link href="#contact">
              <span className="hover:text-blue-600 cursor-pointer">Contact</span>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isMenuOpen 
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                }
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <Link href="#about">
              <span className="block px-3 py-2 hover:bg-gray-100 rounded cursor-pointer">About</span>
            </Link>
            <Link href="#projects">
              <span className="block px-3 py-2 hover:bg-gray-100 rounded cursor-pointer">Projects</span>
            </Link>
            <Link href="#skills">
              <span className="block px-3 py-2 hover:bg-gray-100 rounded cursor-pointer">Skills</span>
            </Link>
            <Link href="#contact">
              <span className="block px-3 py-2 hover:bg-gray-100 rounded cursor-pointer">Contact</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;