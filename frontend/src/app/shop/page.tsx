"use client";
import { useState } from 'react';
import ProductCard, { Product } from '@/components/ProductCard';
import { Search, Filter } from 'lucide-react';

const allProducts: Product[] = [
  {
    id: "p1", name: "Guntur Mirchi Karam", description: "Authentic spicy red chilli powder from the farms of Guntur.", price: 250, weight: "250g", image: "/images/mirchi-karam.png", rating: 4.9, spiceLevel: 5
  },
  {
    id: "p2", name: "Pandumirapakaya Pachadi", description: "Traditional ripe red chilli pickle.", price: 300, weight: "250g", image: "/images/mango-pickle.png", rating: 4.8, spiceLevel: 4
  },
  {
    id: "p3", name: "Idly Karam", description: "The perfect accompaniment for your breakfast.", price: 180, weight: "200g", image: "/images/hero-bg.png", rating: 4.7, spiceLevel: 3
  },
  {
    id: "p4", name: "Kobbari Karam", description: "Coconut-based spice powder.", price: 220, weight: "200g", image: "/images/hero-bg.png", rating: 4.6, spiceLevel: 2
  },
  {
    id: "p5", name: "Garlic Karam", description: "Robust garlic flavored spice blend.", price: 190, weight: "200g", image: "/images/hero-bg.png", rating: 4.8, spiceLevel: 4
  },
  {
    id: "p6", name: "Karivepaku Karam", description: "Healthy curry leaf spice powder.", price: 210, weight: "200g", image: "/images/hero-bg.png", rating: 4.5, spiceLevel: 3
  },
  {
    id: "p7", name: "Flax Seed Karam", description: "Nutritious roasted flax seed powder.", price: 240, weight: "250g", image: "/images/hero-bg.png", rating: 4.7, spiceLevel: 2
  },
  {
    id: "p8", name: "Mango Pickle (Avakaya)", description: "Classic Andhra raw mango pickle.", price: 350, weight: "300g", image: "/images/mango-pickle.png", rating: 5.0, spiceLevel: 5
  }
];

export default function Shop() {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');

  const filteredProducts = allProducts.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === 'all' || 
      (category === 'pickles' && p.name.toLowerCase().includes('pachadi') || p.name.toLowerCase().includes('pickle')) ||
      (category === 'powders' && p.name.toLowerCase().includes('karam') || p.name.toLowerCase().includes('powder'));
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Search */}
        <div className="mb-10">
          <h1 className="text-4xl font-serif font-bold text-brand-dark mb-6">Our Shop</h1>
          
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <div className="relative w-full md:w-1/2">
              <input 
                type="text" 
                placeholder="Search spices and pickles..." 
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border-none rounded-lg focus:ring-2 focus:ring-brand-red outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-3 text-gray-400" size={20} />
            </div>
            
            <div className="flex w-full md:w-auto space-x-2 overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
              <button 
                onClick={() => setCategory('all')}
                className={`px-4 py-2 rounded-lg whitespace-nowrap font-medium transition-colors ${category === 'all' ? 'bg-brand-red text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                All Products
              </button>
              <button 
                onClick={() => setCategory('powders')}
                className={`px-4 py-2 rounded-lg whitespace-nowrap font-medium transition-colors ${category === 'powders' ? 'bg-brand-red text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                Spice Powders
              </button>
              <button 
                onClick={() => setCategory('pickles')}
                className={`px-4 py-2 rounded-lg whitespace-nowrap font-medium transition-colors ${category === 'pickles' ? 'bg-brand-red text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                Pickles
              </button>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-xl text-gray-500">No products found matching your search.</p>
            <button 
              onClick={() => {setSearchTerm(''); setCategory('all');}}
              className="mt-4 text-brand-red font-bold hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
