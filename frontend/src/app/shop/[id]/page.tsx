"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Star, ShoppingCart, ArrowLeft, ShieldCheck, Truck } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import { useCartStore } from '@/store/useCartStore';

export default function ProductDetail() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id as string;
  const [quantity, setQuantity] = useState(1);
  const addItem = useCartStore(state => state.addItem);

  // Mock product data (in reality, fetch this using the ID)
  const product = {
    id: id || "p1", 
    name: "Guntur Mirchi Karam", 
    description: "Authentic spicy red chilli powder from the farms of Guntur. Sun-dried and hand-pounded for maximum flavor. This premium quality chilli powder brings the authentic heat and vibrant red color characteristic of true Guntur chillies to your daily cooking. Perfect for curries, marinades, and traditional Andhra recipes.", 
    price: 250, 
    weight: "250g", 
    image: "/images/mirchi-karam.png", 
    rating: 4.9, 
    spiceLevel: 5 as const,
    ingredients: "100% Pure Guntur Red Chillies"
  };

  const handleAddToCart = () => {
    addItem(product, quantity);
    router.push('/cart'); // Redirect to cart after adding
  };

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Breadcrumb */}
      <div className="bg-brand-yellow/30 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/shop" className="text-gray-500 hover:text-brand-red flex items-center font-medium">
            <ArrowLeft size={18} className="mr-2" /> Back to Shop
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row gap-12">
          
          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <div className="bg-gray-50 rounded-3xl aspect-square relative overflow-hidden border border-gray-100 shadow-inner group">
              <Image 
                src={product.image || "/images/hero-bg.png"} 
                alt={product.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </div>

          {/* Details Section */}
          <div className="w-full md:w-1/2 flex flex-col">
            <h1 className="text-4xl font-serif font-bold text-brand-dark mb-4">{product.name}</h1>
            
            <div className="flex items-center mb-6">
              <div className="flex text-brand-orange mr-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className={i < Math.floor(product.rating) ? "fill-current" : "text-gray-300"} />
                ))}
              </div>
              <span className="text-gray-600 font-medium">({product.rating} Reviews)</span>
              <span className="mx-4 text-gray-300">|</span>
              <span className="flex items-center text-sm font-bold text-brand-dark-red bg-brand-yellow px-3 py-1 rounded-full">
                Spice Level: {[...Array(product.spiceLevel)].map((_, i) => <span key={i} className="ml-1">🌶️</span>)}
              </span>
            </div>

            <div className="text-4xl font-bold text-brand-red mb-6">
              ₹{product.price} <span className="text-lg text-gray-500 font-normal">/ {product.weight}</span>
            </div>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {product.description}
            </p>

            <div className="bg-brand-yellow/20 p-6 rounded-xl mb-8">
              <h3 className="font-bold text-brand-dark mb-2">Ingredients:</h3>
              <p className="text-gray-700">{product.ingredients}</p>
            </div>

            {/* Action Area */}
            <div className="flex items-center gap-4 mb-10">
              <div className="flex items-center border-2 border-gray-200 rounded-lg overflow-hidden">
                <button 
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="px-4 py-3 bg-gray-50 hover:bg-gray-100 text-gray-600 font-bold transition-colors"
                >-</button>
                <div className="px-6 py-3 font-bold text-lg">{quantity}</div>
                <button 
                  onClick={() => setQuantity(q => q + 1)}
                  className="px-4 py-3 bg-gray-50 hover:bg-gray-100 text-gray-600 font-bold transition-colors"
                >+</button>
              </div>
              <button 
                onClick={handleAddToCart}
                className="flex-1 bg-brand-red hover:bg-brand-dark-red text-white py-4 rounded-lg font-bold text-lg flex items-center justify-center transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <ShoppingCart size={22} className="mr-2" />
                Add to Cart
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-4 border-t border-gray-100 pt-8">
              <div className="flex items-center">
                <ShieldCheck className="text-brand-orange mr-3" size={24} />
                <div>
                  <div className="font-bold text-brand-dark">100% Authentic</div>
                  <div className="text-xs text-gray-500">From Guntur Farms</div>
                </div>
              </div>
              <div className="flex items-center">
                <Truck className="text-brand-orange mr-3" size={24} />
                <div>
                  <div className="font-bold text-brand-dark">Fast Delivery</div>
                  <div className="text-xs text-gray-500">Across India</div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
