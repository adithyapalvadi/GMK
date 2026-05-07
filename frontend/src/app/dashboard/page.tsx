import Link from 'next/link';
import { Package, User, Heart, LogOut, ShieldCheck } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-serif font-bold text-brand-dark mb-8">My Account</h1>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-1/4">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6 bg-brand-yellow/30 border-b border-gray-100 flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-red text-white rounded-full flex items-center justify-center font-bold text-xl">
                  G
                </div>
                <div>
                  <h3 className="font-bold text-brand-dark">Guest User</h3>
                  <p className="text-xs text-gray-500">guest@example.com</p>
                </div>
              </div>
              <div className="p-2">
                <button className="w-full flex items-center gap-3 px-4 py-3 text-left bg-brand-red text-white rounded-lg font-medium transition-colors">
                  <Package size={20} /> My Orders
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 text-left text-gray-700 hover:bg-gray-50 rounded-lg font-medium transition-colors">
                  <User size={20} /> Profile Details
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 text-left text-gray-700 hover:bg-gray-50 rounded-lg font-medium transition-colors">
                  <Heart size={20} /> Saved Addresses
                </button>
                
                {/* Admin Link (Visible only to admins usually) */}
                <Link href="/admin" className="w-full flex items-center gap-3 px-4 py-3 mt-4 text-left text-brand-orange hover:bg-brand-yellow/20 rounded-lg font-bold transition-colors border border-brand-orange border-dashed">
                  <ShieldCheck size={20} /> Admin Panel (Demo)
                </Link>

                <div className="border-t border-gray-100 my-2 mt-4 pt-2"></div>
                <button className="w-full flex items-center gap-3 px-4 py-3 text-left text-red-600 hover:bg-red-50 rounded-lg font-medium transition-colors">
                  <LogOut size={20} /> Logout
                </button>
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="w-full md:w-3/4">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
              <h2 className="text-2xl font-bold text-brand-dark mb-6">Recent Orders</h2>
              
              {/* Mock Orders List */}
              <div className="space-y-6">
                
                <div className="border border-gray-200 rounded-lg p-6">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 pb-4 border-b border-gray-100">
                    <div>
                      <span className="text-sm text-gray-500 block">Order #GMK-10294</span>
                      <span className="font-bold text-brand-dark">Placed on October 15, 2023</span>
                    </div>
                    <div className="mt-2 md:mt-0 bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                      Delivered
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-gray-100 rounded flex items-center justify-center text-xs text-gray-400">Img</div>
                    <div>
                      <h4 className="font-bold text-brand-dark">Guntur Mirchi Karam</h4>
                      <p className="text-sm text-gray-500">Qty: 2 x ₹250</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gray-100 rounded flex items-center justify-center text-xs text-gray-400">Img</div>
                    <div>
                      <h4 className="font-bold text-brand-dark">Mango Pickle (Avakaya)</h4>
                      <p className="text-sm text-gray-500">Qty: 1 x ₹350</p>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between items-center">
                    <span className="text-gray-600 font-medium">Total Amount</span>
                    <span className="font-bold text-lg text-brand-red">₹850</span>
                  </div>
                </div>

                <div className="text-center py-8">
                  <p className="text-gray-500 mb-4">You have reached the end of your order history.</p>
                  <Link href="/shop" className="text-brand-red font-bold hover:underline">
                    Continue Shopping
                  </Link>
                </div>
                
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
