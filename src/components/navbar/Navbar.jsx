import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 text-xl font-bold">
            <Link to="/">MyLogo</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-gray-200">Home</Link>
            <Link to="/todopage" className="hover:text-gray-200">Todo-App</Link>
            <Link to="/todopage2" className="hover:text-gray-200">Todo2</Link>
          
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              {/* Hamburger Icon */}
              {isOpen ? (
                <span className="text-2xl">✖</span>
              ) : (
                <span className="text-2xl">☰</span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-3 space-y-2 bg-blue-700">
          <Link to="/" className="block hover:text-gray-200">Home</Link>
          <Link to="/todopage" className="block hover:text-gray-200">Todo-App</Link>
         <Link to="/todopage2" className="hover:text-gray-200">Todo2</Link>
        </div>
      )}
    </nav>
  );
}
