import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [navbarOpacity, setNavbarOpacity] = useState(100);

  const handleScroll = () => {
    const scrollY = window.scrollY; 
    const newOpacity = Math.max(5, 100 - scrollY / 0.01); 
    setNavbarOpacity(newOpacity);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll); // Add scroll event listener
    return () => {
      window.removeEventListener('scroll', handleScroll); // Clean up the listener
    };
  }, []);

  return (
    <nav
      className={`bg-black text-white p-4 flex justify-between fixed top-0 left-0 right-0 z-50 transition-opacity duration-300`}
      style={{ opacity: navbarOpacity / 100 }}
    >
      <div className="text-xl font-bold px-12">
        <Link className="italic text-green-300" to="/">Shop with R@MI</Link>
      </div>
      <div className="flex flex-row space-x-4 px-8 gap-6">
        <Link className="hover:text-blue-500" to="/">Home</Link>
        <Link className="hover:text-blue-500" to="/products">Products</Link>
        <Link className="hover:text-blue-500" to="/cart">Cart</Link>
        <Link className="hover:text-blue-500" to="/about">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
