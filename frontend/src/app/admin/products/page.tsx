"use client";
import { Search, Plus, MoreHorizontal, Image as ImageIcon } from 'lucide-react';
import { useState } from 'react';

export default function AdminProducts() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const allProducts = [
    { id: 'p1', name: 'Guntur Mirchi Karam', price: '₹250', stock: 145, status: 'In Stock', category: 'Powders' },
    { id: 'p2', name: 'Pandumirapakaya Pachadi', price: '₹300', stock: 42, status: 'Low Stock', category: 'Pickles' },
    { id: 'p3', name: 'Idly Karam', price: '₹180', stock: 210, status: 'In Stock', category: 'Powders' },
    { id: 'p4', name: 'Kobbari Karam', price: '₹220', stock: 0, status: 'Out of Stock', category: 'Powders' },
    { id: 'p5', name: 'Garlic Karam', price: '₹190', stock: 85, status: 'In Stock', category: 'Powders' },
    { id: 'p8', name: 'Mango Pickle (Avakaya)', price: '₹350', stock: 15, status: 'Low Stock', category: 'Pickles' },
  ];

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Products & Inventory</h1>
          <p className="text-gray-500 mt-1">Manage your spices, pickles, and stock levels.</p>
        </div>
        <button className="flex items-center px-4 py-2 bg-brand-red text-white rounded-lg text-sm font-bold hover:bg-brand-dark-red shadow-sm transition-colors">
          <Plus size={18} className="mr-2" />
          Add Product
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 border-b border-gray-100 flex flex-col sm:flex-row justify-between gap-4">
          <div className="relative w-full sm:w-96">
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search products..." 
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-red outline-none text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 text-gray-500">
              <tr>
                <th className="px-6 py-4 font-medium w-16">Image</th>
                <th className="px-6 py-4 font-medium">Product Name</th>
                <th className="px-6 py-4 font-medium">Category</th>
                <th className="px-6 py-4 font-medium">Price</th>
                <th className="px-6 py-4 font-medium">Stock</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {allProducts.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="w-10 h-10 rounded-md bg-gray-100 flex items-center justify-center text-gray-400 border border-gray-200">
                      <ImageIcon size={18} />
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900">{product.name}</div>
                    <div className="text-gray-500 text-xs">ID: {product.id}</div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{product.category}</td>
                  <td className="px-6 py-4 text-gray-900 font-medium">{product.price}</td>
                  <td className="px-6 py-4 text-gray-900">{product.stock} units</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                      product.status === 'In Stock' ? 'bg-green-100 text-green-700' : 
                      product.status === 'Low Stock' ? 'bg-yellow-100 text-yellow-700' : 
                      'bg-red-100 text-red-700'
                    }`}>
                      {product.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-gray-400 hover:text-brand-red p-1 rounded-full hover:bg-gray-100 transition-colors">
                      <MoreHorizontal size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
