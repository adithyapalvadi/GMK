"use client";
import { Search, Filter, MoreHorizontal, Download } from 'lucide-react';
import { useState } from 'react';

import Link from 'next/link';

export default function AdminOrders() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const allOrders = [
    { id: 'ORD-001', customer: 'Rahul Sharma', email: 'rahul.s@example.com', date: 'Oct 24, 2026', items: 3, amount: '₹1,250', status: 'Delivered', payment: 'Paid' },
    { id: 'ORD-002', customer: 'Priya Reddy', email: 'priya.r@example.com', date: 'Oct 24, 2026', items: 1, amount: '₹850', status: 'Processing', payment: 'Paid' },
    { id: 'ORD-003', customer: 'Amit Kumar', email: 'amit.k@example.com', date: 'Oct 23, 2026', items: 5, amount: '₹2,100', status: 'Shipped', payment: 'Paid' },
    { id: 'ORD-004', customer: 'Sneha Patel', email: 'sneha.p@example.com', date: 'Oct 23, 2026', items: 2, amount: '₹450', status: 'Delivered', payment: 'Paid' },
    { id: 'ORD-005', customer: 'Vikram Singh', email: 'vikram.s@example.com', date: 'Oct 22, 2026', items: 4, amount: '₹1,800', status: 'Cancelled', payment: 'Refunded' },
    { id: 'ORD-006', customer: 'Anjali Desai', email: 'anjali.d@example.com', date: 'Oct 21, 2026', items: 1, amount: '₹250', status: 'Delivered', payment: 'Paid' },
  ];

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Orders Management</h1>
          <p className="text-gray-500 mt-1">View and manage all customer orders.</p>
        </div>
        <button className="flex items-center px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 shadow-sm">
          <Download size={16} className="mr-2" />
          Export CSV
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 border-b border-gray-100 flex flex-col sm:flex-row justify-between gap-4">
          <div className="relative w-full sm:w-96">
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search by order ID, customer name or email..." 
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-red outline-none text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <button className="flex items-center px-3 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
              <Filter size={16} className="mr-2" />
              Filter
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 text-gray-500">
              <tr>
                <th className="px-6 py-4 font-medium">Order</th>
                <th className="px-6 py-4 font-medium">Customer</th>
                <th className="px-6 py-4 font-medium">Date</th>
                <th className="px-6 py-4 font-medium">Items</th>
                <th className="px-6 py-4 font-medium">Payment</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {allOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50 transition-colors group">
                  <td className="px-6 py-4 font-medium text-gray-900">
                    <Link href={`/admin/orders/${order.id}`} className="hover:text-brand-red hover:underline">
                      #{order.id}
                    </Link>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900">{order.customer}</div>
                    <div className="text-gray-500 text-xs">{order.email}</div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{order.date}</td>
                  <td className="px-6 py-4 text-gray-600">{order.items} items</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-md text-xs font-medium ${
                      order.payment === 'Paid' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-gray-100 text-gray-700 border border-gray-200'
                    }`}>
                      {order.payment}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      order.status === 'Delivered' ? 'bg-green-100 text-green-700' : 
                      order.status === 'Processing' ? 'bg-yellow-100 text-yellow-700' : 
                      order.status === 'Cancelled' ? 'bg-red-100 text-red-700' :
                      'bg-blue-100 text-blue-700'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <Link href={`/admin/orders/${order.id}`} className="inline-block text-brand-red font-medium hover:text-brand-dark-red hover:underline text-xs">
                      View Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination placeholder */}
        <div className="p-4 border-t border-gray-100 flex items-center justify-between text-sm text-gray-500">
          <div>Showing 1 to 6 of 6 entries</div>
          <div className="flex gap-1">
            <button className="px-3 py-1 border border-gray-200 rounded-md disabled:opacity-50" disabled>Prev</button>
            <button className="px-3 py-1 bg-brand-red text-white rounded-md">1</button>
            <button className="px-3 py-1 border border-gray-200 rounded-md disabled:opacity-50" disabled>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
