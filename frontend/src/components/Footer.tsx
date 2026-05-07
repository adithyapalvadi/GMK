"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Camera, MessageCircle, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const pathname = usePathname();

  if (pathname?.startsWith('/admin')) {
    return null;
  }

  return (
    <footer className="bg-brand-dark text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-serif font-bold text-2xl text-brand-yellow mb-4">Guntur Mirchi Kaaram</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Authentic home-made Andhra spice powders and pickles directly from our farms to your home. 
              Experience the real taste of Guntur.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-brand-yellow transition-colors">
                <Camera size={24} />
              </a>
              <a href="https://wa.me/917093840055" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-brand-yellow transition-colors">
                <MessageCircle size={24} />
              </a>
              <a href="mailto:hello@gunturmirchikaaram.com" className="text-gray-300 hover:text-brand-yellow transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4 text-brand-yellow">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/shop" className="text-gray-300 hover:text-white transition-colors">Shop All</Link></li>
              <li><Link href="/shop?category=pickles" className="text-gray-300 hover:text-white transition-colors">Pickles</Link></li>
              <li><Link href="/shop?category=powders" className="text-gray-300 hover:text-white transition-colors">Spice Powders</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">Our Story</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-brand-yellow">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 text-brand-orange flex-shrink-0" />
                <span className="text-gray-300">Farm: Guntur, Andhra Pradesh, India</span>
              </li>
              <li className="flex items-center">
                <MessageCircle size={20} className="mr-2 text-brand-orange flex-shrink-0" />
                <span className="text-gray-300">WhatsApp: +91 7093840055</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Guntur Mirchi Kaaram. All rights reserved.</p>
          <p className="mt-2">Farm to Home 💚 | Authentic Home-made 🌶️ | Real Guntur Spice 🔥</p>
        </div>
      </div>
    </footer>
  );
}
