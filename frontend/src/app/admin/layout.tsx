"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, ShoppingBag, Package, Users, Settings, LogOut } from 'lucide-react';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const navigation = [
    { name: 'Overview', href: '/admin', icon: LayoutDashboard },
    { name: 'Orders', href: '/admin/orders', icon: ShoppingBag },
    { name: 'Products', href: '/admin/products', icon: Package },
    { name: 'Customers', href: '/admin/customers', icon: Users },
  ];

  return (
    <div className="flex h-screen bg-gray-50 text-gray-900 print:h-auto print:bg-white">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col print:hidden">
        <div className="h-16 flex items-center px-6 border-b border-gray-200">
          <div className="relative w-8 h-8 rounded-full overflow-hidden mr-3 shadow-sm border border-brand-red/20">
            <img 
              src="/images/logo.jpg" 
              alt="GMK Logo" 
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-serif font-bold text-lg text-brand-dark tracking-tight">Admin Portal</span>
        </div>

        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/admin' && pathname?.startsWith(item.href));
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                  isActive
                    ? 'bg-brand-red/10 text-brand-red'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                <item.icon
                  className={`shrink-0 mr-3 h-5 w-5 ${
                    isActive ? 'text-brand-red' : 'text-gray-400 group-hover:text-gray-500'
                  }`}
                />
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-gray-200">
          <Link href="/" className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100 transition-colors mb-1">
            <Settings className="shrink-0 mr-3 h-5 w-5 text-gray-400" />
            Storefront Settings
          </Link>
          <button className="w-full flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-red-50 hover:text-red-600 transition-colors">
            <LogOut className="shrink-0 mr-3 h-5 w-5 text-gray-400 group-hover:text-red-500" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden print:overflow-visible">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-end px-6 print:hidden">
          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <div className="text-sm font-bold text-gray-900">Admin User</div>
              <div className="text-xs text-gray-500">Superadmin</div>
            </div>
            <div className="h-9 w-9 rounded-full bg-brand-yellow flex items-center justify-center text-brand-orange font-bold border border-brand-orange/20">
              A
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto bg-gray-50 p-6 print:overflow-visible print:bg-white print:p-0">
          <div className="max-w-7xl mx-auto print:max-w-none">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
