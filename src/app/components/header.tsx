'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-red-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image 
            src="/logo.svg" 
            alt="Slice Slice Baby STL" 
            width={50} 
            height={50} 
            className="mr-2"
          />
          <span className="text-xl font-bold">Slice Slice Baby STL</span>
        </Link>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-yellow-200 transition duration-200">Home</Link>
          <Link href="/about" className="hover:text-yellow-200 transition duration-200">About Us</Link>
          <Link href="/menu" className="hover:text-yellow-200 transition duration-200">Menu</Link>
          <Link href="/location" className="hover:text-yellow-200 transition duration-200">Location</Link>
          <Link href="/contact" className="hover:text-yellow-200 transition duration-200">Contact</Link>
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-red-700 px-4 py-3">
          <ul className="flex flex-col space-y-2">
            <li><Link href="/" className="block py-2 hover:text-yellow-200 transition duration-200" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link href="/about" className="block py-2 hover:text-yellow-200 transition duration-200" onClick={() => setIsMenuOpen(false)}>About Us</Link></li>
            <li><Link href="/menu" className="block py-2 hover:text-yellow-200 transition duration-200" onClick={() => setIsMenuOpen(false)}>Menu</Link></li>
            <li><Link href="/location" className="block py-2 hover:text-yellow-200 transition duration-200" onClick={() => setIsMenuOpen(false)}>Location</Link></li>
            <li><Link href="/contact" className="block py-2 hover:text-yellow-200 transition duration-200" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;