"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, ShoppingCart, Flame } from 'lucide-react';
import { useCartStore } from '@/store/useCartStore';
import { useLanguage } from '@/context/LanguageContext';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  spiceLevel: 1 | 2 | 3 | 4 | 5;
  rating: number;
  reviews?: number;
  weight: string;
  description?: string;
}

export default function ProductCard({ product }: { product: Product }) {
  const addItem = useCartStore((state) => state.addItem);
  const { t } = useLanguage();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigating to product detail
    addItem(product);
    // Could add a toast notification here later
  };

  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col h-full"
    >
      <Link href={`/shop/${product.id}`} className="block relative h-64 w-full overflow-hidden bg-gray-50">
        <Image 
          src={product.image} 
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-dark shadow-sm">
          {product.weight}
        </div>
      </Link>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <Link href={`/shop/${product.id}`} className="block">
            <h3 className="font-bold text-xl text-brand-dark group-hover:text-brand-red transition-colors line-clamp-2">
              {product.name}
            </h3>
          </Link>
        </div>
        
        <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
          <div className="flex items-center text-yellow-500 font-medium">
            <Star size={16} className="mr-1" fill="currentColor" /> 
            {product.rating} <span className="text-gray-400 ml-1">({product.reviews || Math.floor(Math.random() * 100) + 20})</span>
          </div>
          <div className="flex items-center text-red-500 font-medium" title={`${t('shop.spice_level')}: ${product.spiceLevel}/5`}>
            <Flame size={16} className="mr-1" fill={product.spiceLevel > 3 ? "currentColor" : "none"} />
            {product.spiceLevel}/5
          </div>
        </div>
        
        <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
          <span className="text-2xl font-bold text-brand-dark">₹{product.price}</span>
          <button 
            onClick={handleAddToCart}
            className="w-12 h-12 flex items-center justify-center bg-brand-yellow text-brand-orange rounded-full hover:bg-brand-red hover:text-white transition-colors shadow-sm"
            aria-label="Add to cart"
          >
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
