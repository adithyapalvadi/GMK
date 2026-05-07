"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

import { Trash2, ArrowRight, ArrowLeft } from 'lucide-react';
import { useCartStore } from '@/store/useCartStore';

export default function CartPage() {
  const { items, updateQuantity, removeItem, getCartTotal } = useCartStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const total = getCartTotal();

  if (items.length === 0) {
    return (
      <div className="min-h-[70vh] bg-gray-50 flex flex-col items-center justify-center px-4">
        <div className="text-6xl mb-6">🛒</div>
        <h2 className="text-3xl font-serif font-bold text-brand-dark mb-4">Your cart is empty</h2>
        <p className="text-gray-500 mb-8 text-center max-w-md">Looks like you haven't added any spices or pickles to your cart yet.</p>
        <Link href="/shop" className="bg-brand-red text-white px-8 py-3 rounded-lg font-bold hover:bg-brand-dark-red transition-colors flex items-center">
          Start Shopping <ArrowRight className="ml-2" size={20} />
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-serif font-bold text-brand-dark mb-8">Shopping Cart</h1>
        
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Cart Items */}
          <div className="w-full lg:w-2/3">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="hidden md:grid grid-cols-6 gap-4 p-4 bg-gray-50 border-b border-gray-100 font-bold text-gray-500 text-sm uppercase">
                <div className="col-span-3">Product</div>
                <div className="text-center">Price</div>
                <div className="text-center">Quantity</div>
                <div className="text-right">Total</div>
              </div>
              
              <div className="divide-y divide-gray-100">
                {items.map((item) => (
                  <div key={item.id} className="grid grid-cols-1 md:grid-cols-6 gap-4 p-4 md:p-6 items-center">
                    <div className="col-span-3 flex items-center gap-4">
                      <div className="w-20 h-20 bg-gray-100 rounded flex items-center justify-center flex-shrink-0 text-xs text-gray-400">
                        Image
                      </div>
                      <div>
                        <Link href={`/shop/${item.id}`} className="font-bold text-lg text-brand-dark hover:text-brand-red transition-colors">
                          {item.name}
                        </Link>
                        <p className="text-sm text-gray-500">{item.weight}</p>
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 hover:text-red-700 text-sm mt-2 flex items-center md:hidden"
                        >
                          <Trash2 size={16} className="mr-1" /> Remove
                        </button>
                      </div>
                    </div>
                    
                    <div className="text-gray-600 font-medium md:text-center mt-2 md:mt-0">
                      <span className="md:hidden text-gray-400 text-sm mr-2">Price:</span>
                      ₹{item.price}
                    </div>
                    
                    <div className="flex items-center md:justify-center mt-2 md:mt-0">
                      <div className="flex items-center border border-gray-200 rounded overflow-hidden">
                        <button 
                          onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                          className="px-3 py-1 bg-gray-50 hover:bg-gray-100 text-gray-600 font-bold"
                        >-</button>
                        <div className="px-3 py-1 font-bold text-sm min-w-[2rem] text-center">{item.quantity}</div>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-3 py-1 bg-gray-50 hover:bg-gray-100 text-gray-600 font-bold"
                        >+</button>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center md:justify-end mt-2 md:mt-0 font-bold text-brand-dark">
                      <span className="md:hidden text-gray-400 text-sm font-normal">Total:</span>
                      <div className="flex items-center">
                        ₹{item.price * item.quantity}
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="ml-4 text-gray-400 hover:text-red-500 hidden md:block transition-colors"
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-6">
              <Link href="/shop" className="text-brand-red font-bold flex items-center hover:text-brand-dark-red transition-colors">
                <ArrowLeft size={20} className="mr-2" /> Continue Shopping
              </Link>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="w-full lg:w-1/3">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sticky top-24">
              <h2 className="text-xl font-bold text-brand-dark mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span className="font-medium">₹{total}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping Estimate</span>
                  <span className="font-medium">Calculated at checkout</span>
                </div>
                <div className="border-t border-gray-100 pt-4 flex justify-between items-center text-xl font-bold text-brand-dark">
                  <span>Total Estimate</span>
                  <span className="text-brand-red">₹{total}</span>
                </div>
              </div>
              
              <Link href="/checkout" className="w-full bg-brand-red hover:bg-brand-dark-red text-white py-4 rounded-lg font-bold text-lg flex items-center justify-center transition-colors shadow-md">
                Proceed to Checkout
              </Link>
              
              <div className="mt-4 text-center text-xs text-gray-500 flex flex-col items-center">
                <p>Secure payments by Razorpay</p>
                <p className="mt-1">100% Authentic Products • Farm Fresh</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
