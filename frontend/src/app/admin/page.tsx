"use client";
import { DollarSign, ShoppingBag, Package, TrendingUp } from 'lucide-react';

export default function AdminDashboard() {
  const kpis = [
    { name: 'Total Revenue', value: '₹1,24,500', change: '+12.5%', isPositive: true, icon: DollarSign, color: 'text-green-600', bg: 'bg-green-100' },
    { name: 'Total Orders', value: '342', change: '+18.2%', isPositive: true, icon: ShoppingBag, color: 'text-blue-600', bg: 'bg-blue-100' },
    { name: 'Products Sold', value: '891', change: '-2.4%', isPositive: false, icon: Package, color: 'text-brand-orange', bg: 'bg-brand-yellow' },
    { name: 'Conversion Rate', value: '4.3%', change: '+1.1%', isPositive: true, icon: TrendingUp, color: 'text-purple-600', bg: 'bg-purple-100' },
  ];

  const recentOrders = [
    { id: '#ORD-001', customer: 'Rahul Sharma', date: 'Oct 24, 2026', amount: '₹1,250', status: 'Delivered' },
    { id: '#ORD-002', customer: 'Priya Reddy', date: 'Oct 24, 2026', amount: '₹850', status: 'Processing' },
    { id: '#ORD-003', customer: 'Amit Kumar', date: 'Oct 23, 2026', amount: '₹2,100', status: 'Shipped' },
    { id: '#ORD-004', customer: 'Sneha Patel', date: 'Oct 23, 2026', amount: '₹450', status: 'Delivered' },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-gray-500 mt-1">Welcome back. Here's what's happening with your store today.</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {kpis.map((kpi) => (
          <div key={kpi.name} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <div className={`w-12 h-12 rounded-lg ${kpi.bg} flex items-center justify-center`}>
                <kpi.icon className={kpi.color} size={24} />
              </div>
              <span className={`text-sm font-bold px-2 py-1 rounded-full ${kpi.isPositive ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                {kpi.change}
              </span>
            </div>
            <h3 className="text-gray-500 text-sm font-medium mb-1">{kpi.name}</h3>
            <div className="text-2xl font-bold text-gray-900">{kpi.value}</div>
          </div>
        ))}
      </div>

      {/* Recent Orders Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-100 flex justify-between items-center">
          <h2 className="text-lg font-bold text-gray-900">Recent Orders</h2>
          <button className="text-brand-red text-sm font-medium hover:text-brand-dark-red">View All</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 text-gray-500">
              <tr>
                <th className="px-6 py-4 font-medium">Order ID</th>
                <th className="px-6 py-4 font-medium">Customer</th>
                <th className="px-6 py-4 font-medium">Date</th>
                <th className="px-6 py-4 font-medium">Amount</th>
                <th className="px-6 py-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {recentOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900">{order.id}</td>
                  <td className="px-6 py-4 text-gray-600">{order.customer}</td>
                  <td className="px-6 py-4 text-gray-600">{order.date}</td>
                  <td className="px-6 py-4 text-gray-900 font-medium">{order.amount}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      order.status === 'Delivered' ? 'bg-green-100 text-green-700' : 
                      order.status === 'Processing' ? 'bg-yellow-100 text-yellow-700' : 
                      'bg-blue-100 text-blue-700'
                    }`}>
                      {order.status}
                    </span>
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
