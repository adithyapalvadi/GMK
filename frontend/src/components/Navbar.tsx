"use client";

import Link from 'next/link';
import Image from 'next/image';
import { ShoppingCart, Menu, User, Search, X } from 'lucide-react';
import { useCartStore } from '@/store/useCartStore';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const pathname = usePathname();
  const getCartCount = useCartStore((state) => state.getCartCount);
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (pathname?.startsWith('/admin')) {
    return null;
  }

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          <div className="flex items-center">
            <button 
              className="md:hidden mr-4 text-brand-dark"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu size={28} />
            </button>
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-brand-red/20 shadow-lg group-hover:border-brand-red transition-colors">
                <Image 
                  src="/images/logo.jpg" 
                  alt="Guntur Mirchi Kaaram Logo" 
                  fill
                  className="object-cover"
                />
              </div>
              <span className={`hidden sm:block font-serif font-bold text-2xl tracking-tight transition-colors ${isScrolled ? 'text-brand-dark' : 'text-white md:text-brand-dark'}`}>
                Guntur Mirchi Kaaram
              </span>
            </Link>
          </div>

          <div className="hidden md:flex space-x-10">
            <Link href="/" className={`font-bold text-sm tracking-wider uppercase transition-colors hover:text-brand-red ${isScrolled ? 'text-brand-dark' : 'text-white md:text-brand-dark'}`}>Home</Link>
            <Link href="/shop" className={`font-bold text-sm tracking-wider uppercase transition-colors hover:text-brand-red ${isScrolled ? 'text-brand-dark' : 'text-white md:text-brand-dark'}`}>Shop All</Link>
            <Link href="/#about" className={`font-bold text-sm tracking-wider uppercase transition-colors hover:text-brand-red ${isScrolled ? 'text-brand-dark' : 'text-white md:text-brand-dark'}`}>Our Story</Link>
          </div>

          <div className="flex items-center space-x-6">
            <button className={`hover:text-brand-red transition-colors ${isScrolled ? 'text-brand-dark' : 'text-white md:text-brand-dark'}`}>
              <Search size={22} />
            </button>
            <Link href="/dashboard" className={`hover:text-brand-red transition-colors hidden sm:block ${isScrolled ? 'text-brand-dark' : 'text-white md:text-brand-dark'}`}>
              <User size={22} />
            </Link>
            <Link href="/cart" className={`relative hover:text-brand-red transition-colors ${isScrolled ? 'text-brand-dark' : 'text-white md:text-brand-dark'}`}>
              <ShoppingCart size={22} />
              {mounted && getCartCount() > 0 && (
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 bg-brand-orange text-white text-[10px] font-bold h-5 w-5 rounded-full flex items-center justify-center border-2 border-white shadow-sm"
                >
                  {getCartCount()}
                </motion.span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 bg-white z-50 md:hidden flex flex-col"
          >
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
              <Link href="/" className="flex items-center gap-3" onClick={() => setMobileMenuOpen(false)}>
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-brand-red/20 shadow-sm">
                  <Image 
                    src="/images/logo.jpg" 
                    alt="Guntur Mirchi Kaaram Logo" 
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="font-serif font-bold text-xl text-brand-dark tracking-tight">
                  Guntur Mirchi Kaaram
                </span>
              </Link>
              <button onClick={() => setMobileMenuOpen(false)} className="text-gray-500 hover:text-brand-red">
                <X size={28} />
              </button>
            </div>
            <div className="flex flex-col p-6 space-y-6 text-xl font-bold text-brand-dark">
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              <Link href="/shop" onClick={() => setMobileMenuOpen(false)}>Shop All Products</Link>
              <Link href="/#about" onClick={() => setMobileMenuOpen(false)}>Our Story</Link>
              <Link href="/dashboard" onClick={() => setMobileMenuOpen(false)}>My Account</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
