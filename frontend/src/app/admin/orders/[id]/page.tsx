"use client";
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, Printer, MapPin, Mail, Phone, Calendar, CreditCard, Truck } from 'lucide-react';

export default function OrderDetails() {
  const params = useParams();
  const id = params?.id as string;

  // Mock data for the specific order
  const order = {
    id: id || "ORD-001",
    status: "Processing",
    date: "Oct 24, 2026",
    time: "14:32 IST",
    paymentMethod: "Razorpay (UPI)",
    paymentStatus: "Paid",
    customer: {
      name: "Rahul Sharma",
      email: "rahul.s@example.com",
      phone: "+91 98765 43210"
    },
    shipping: {
      address: "Flat 402, Sunshine Apartments",
      street: "Hinjewadi Phase 1",
      city: "Pune",
      state: "Maharashtra",
      pincode: "411057",
      country: "India"
    },
    items: [
      { id: "p1", name: "Guntur Mirchi Karam", quantity: 2, price: 250, total: 500 },
      { id: "p2", name: "Pandumirapakaya Pachadi", quantity: 1, price: 300, total: 300 },
    ],
    subtotal: 800,
    shipping_fee: 50,
    tax: 0,
    total: 850
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="pb-20">
      {/* Hide breadcrumbs when printing */}
      <div className="print:hidden mb-6 flex items-center justify-between">
        <Link href="/admin/orders" className="text-gray-500 hover:text-brand-red flex items-center font-medium">
          <ArrowLeft size={18} className="mr-2" /> Back to Orders
        </Link>
        <button 
          onClick={handlePrint}
          className="flex items-center px-4 py-2 bg-brand-dark text-white rounded-lg text-sm font-bold shadow-sm hover:bg-black transition-colors"
        >
          <Printer size={18} className="mr-2" />
          Print Courier Label
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden print:border-none print:shadow-none">
        
        {/* Header - Formatted for print */}
        <div className="p-6 md:p-8 border-b border-gray-200 print:border-b-2 print:border-black flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-3xl font-bold text-gray-900">Order #{order.id}</h1>
              <span className="print:hidden px-3 py-1 rounded-full text-xs font-bold bg-yellow-100 text-yellow-700">
                {order.status}
              </span>
            </div>
            <div className="text-gray-500 flex items-center gap-4 text-sm">
              <span className="flex items-center"><Calendar size={14} className="mr-1" /> {order.date} at {order.time}</span>
            </div>
          </div>
          
          {/* Logo for print only */}
          <div className="hidden print:flex flex-col items-end text-right">
            <div className="relative w-16 h-16 rounded-full overflow-hidden mb-2">
              <img 
                src="/images/logo.jpg" 
                alt="Guntur Mirchi Kaaram Logo" 
                className="w-full h-full object-cover grayscale"
              />
            </div>
            <h2 className="font-serif font-bold text-2xl text-black">Guntur Mirchi Kaaram</h2>
            <p className="text-sm text-gray-600">Authentic Andhra Spices & Pickles</p>
          </div>
        </div>

        <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8 print:grid-cols-2">
          
          {/* Customer & Shipping Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <Truck className="mr-2 text-gray-400" size={20} /> Shipping Details
              </h3>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 print:bg-transparent print:border-2 print:border-gray-800">
                <p className="font-bold text-lg text-gray-900 mb-1">{order.customer.name}</p>
                <p className="text-gray-700">{order.shipping.address}</p>
                <p className="text-gray-700">{order.shipping.street}</p>
                <p className="text-gray-700">{order.shipping.city}, {order.shipping.state} {order.shipping.pincode}</p>
                <p className="text-gray-700 font-medium mt-2 flex items-center">
                  <Phone size={14} className="mr-2 text-gray-400" /> {order.customer.phone}
                </p>
              </div>
            </div>

            <div className="print:hidden">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <Mail className="mr-2 text-gray-400" size={20} /> Customer Info
              </h3>
              <div className="text-gray-700">
                <p><span className="text-gray-500 w-24 inline-block">Email:</span> {order.customer.email}</p>
                <p><span className="text-gray-500 w-24 inline-block">Phone:</span> {order.customer.phone}</p>
              </div>
            </div>
          </div>

          {/* Payment & Summary */}
          <div className="space-y-8">
            <div className="print:hidden">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <CreditCard className="mr-2 text-gray-400" size={20} /> Payment Status
              </h3>
              <div className="bg-emerald-50 text-emerald-800 p-4 rounded-lg border border-emerald-200">
                <p className="font-bold">{order.paymentStatus}</p>
                <p className="text-sm opacity-80 mt-1">Paid via {order.paymentMethod}</p>
              </div>
            </div>

            {/* Sender Address for Print */}
            <div className="hidden print:block">
              <h3 className="text-lg font-bold text-gray-900 mb-4">From (Sender):</h3>
              <div className="text-gray-700 border border-gray-300 p-4">
                <p className="font-bold text-black">Guntur Mirchi Kaaram HQ</p>
                <p>Plot No 42, Auto Nagar</p>
                <p>Guntur, Andhra Pradesh 522001</p>
                <p>Phone: +91 70938 40055</p>
              </div>
            </div>
          </div>
        </div>

        {/* Order Items Table */}
        <div className="mt-4 print:mt-8 border-t border-gray-200 print:border-black">
          <div className="px-6 py-4 bg-gray-50 print:bg-gray-100 border-b border-gray-200">
            <h3 className="font-bold text-gray-900">Order Items</h3>
          </div>
          <table className="w-full text-left text-sm">
            <thead className="bg-white text-gray-500 border-b border-gray-200 print:border-b-2 print:border-black print:text-black">
              <tr>
                <th className="px-6 py-4 font-medium">Product</th>
                <th className="px-6 py-4 font-medium text-center">Quantity</th>
                <th className="px-6 py-4 font-medium text-right">Price</th>
                <th className="px-6 py-4 font-medium text-right">Total</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 print:divide-black">
              {order.items.map((item) => (
                <tr key={item.id}>
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900 print:font-bold">{item.name}</div>
                    <div className="text-gray-500 text-xs print:hidden">ID: {item.id}</div>
                  </td>
                  <td className="px-6 py-4 text-center font-medium">{item.quantity}</td>
                  <td className="px-6 py-4 text-right text-gray-600">₹{item.price}</td>
                  <td className="px-6 py-4 text-right font-medium text-gray-900">₹{item.total}</td>
                </tr>
              ))}
            </tbody>
            <tfoot className="bg-gray-50 print:bg-transparent">
              <tr>
                <td colSpan={3} className="px-6 py-3 text-right text-gray-500">Subtotal</td>
                <td className="px-6 py-3 text-right font-medium">₹{order.subtotal}</td>
              </tr>
              <tr>
                <td colSpan={3} className="px-6 py-3 text-right text-gray-500">Shipping</td>
                <td className="px-6 py-3 text-right font-medium">₹{order.shipping_fee}</td>
              </tr>
              <tr>
                <td colSpan={3} className="px-6 py-4 text-right font-bold text-gray-900 text-lg border-t border-gray-200 print:border-black">Total</td>
                <td className="px-6 py-4 text-right font-bold text-brand-red text-lg border-t border-gray-200 print:border-black print:text-black">₹{order.total}</td>
              </tr>
            </tfoot>
          </table>
        </div>

      </div>
    </div>
  );
}
