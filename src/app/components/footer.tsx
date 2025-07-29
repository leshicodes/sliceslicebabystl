import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Slice Slice Baby STL</h3>
            <p className="mb-4">Serving the best pizza in St. Louis since 2015.</p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5L14.19.5C10.24.5,9.5,3.3,9.5,5.91V7.46h-3v4h3v12h5v-12h3.85l.42-4Z"/>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2.16c3.2,0,3.58,0,4.85.07,3.25.15,4.77,1.69,4.92,4.92.06,1.27.07,1.65.07,4.85,0,3.2,0,3.58-.07,4.85-.15,3.23-1.67,4.77-4.92,4.92-1.27.06-1.65.07-4.85.07-3.2,0-3.58,0-4.85-.07-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85,0-3.2,0-3.58.07-4.85C2.23,3.93,3.75,2.4,7,2.24c1.27-.06,1.65-.07,4.85-.07ZM12,0c-3.26,0-3.67,0-4.95.07C3,0.27,0,3.26,0,7.05,0,8.33,0,8.74,0,12s0,3.67.07,4.95c.17,4.05,3.16,7.05,6.95,7.05,1.28,0,1.69,0,4.95,0s3.67,0,4.95-.07c3.8-.17,6.95-3,6.95-6.95,0-1.28,0-1.69,0-4.95s0-3.67-.07-4.95c-.17-3.8-3-6.95-6.95-7.05C15.67,0,15.26,0,12,0Zm0,5.84A6.16,6.16,0,1,0,18.16,12,6.16,6.16,0,0,0,12,5.84ZM12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16ZM18.41,4.15a1.44,1.44,0,1,0,1.43,1.44A1.44,1.44,0,0,0,18.41,4.15Z"/>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.95,4.57a10,10,0,0,1-2.82.78,4.96,4.96,0,0,0,2.16-2.73,9.9,9.9,0,0,1-3.13,1.2A4.92,4.92,0,0,0,11.8,9.06,13.94,13.94,0,0,1,1.64,3.16,4.92,4.92,0,0,0,3.2,9.72,4.86,4.86,0,0,1,.96,9.1v.06A4.93,4.93,0,0,0,4.88,14a5,5,0,0,1-2.21.08,4.94,4.94,0,0,0,4.6,3.42,9.87,9.87,0,0,1-6.11,2.11A9.59,9.59,0,0,1,0,19.54a13.85,13.85,0,0,0,7.52,2.21c9.06,0,14-7.5,14-13.98,0-.21,0-.42-.01-.63A10,10,0,0,0,24,4.59Z"/>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Hours</h3>
            <ul className="space-y-2">
              <li>Monday - Thursday: 11am - 10pm</li>
              <li>Friday - Saturday: 11am - 11pm</li>
              <li>Sunday: 12pm - 9pm</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>123 Pizza Street</li>
              <li>St. Louis, MO 63101</li>
              <li>Phone: (314) 555-1234</li>
              <li>Email: info@sliceslicebabystl.com</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-red-400 transition duration-200">Home</Link></li>
              <li><Link href="/about" className="hover:text-red-400 transition duration-200">About Us</Link></li>
              <li><Link href="/menu" className="hover:text-red-400 transition duration-200">Menu</Link></li>
              <li><Link href="/location" className="hover:text-red-400 transition duration-200">Location</Link></li>
              <li><Link href="/contact" className="hover:text-red-400 transition duration-200">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p>&copy; {currentYear} Slice Slice Baby STL. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;