"use client";
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export default function WhatsAppButton() {
  const pathname = usePathname();

  // Hide the floating button on the admin panel
  if (pathname?.startsWith('/admin')) {
    return null;
  }

  // Brand WhatsApp number from requirements
  const phoneNumber = "917093840055"; 
  const message = "Hello! I'm interested in ordering some Guntur Mirchi Kaaram products.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-3.5 rounded-full shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
      aria-label="Chat with us on WhatsApp"
    >
      <span className="absolute right-full mr-4 bg-white text-gray-800 text-sm font-bold px-3 py-1.5 rounded-lg shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        Chat with us!
      </span>
      {/* Official WhatsApp Logo */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 175.216 175.552"
        width="32"
        height="32"
      >
        <defs>
          <linearGradient id="wa-grad" x1="85.915" x2="86.535" y1="32.567" y2="137.092" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#57d163" />
            <stop offset="1" stopColor="#23b33a" />
          </linearGradient>
        </defs>
        <path
          fill="#fff"
          d="M87.184 14.18c-40.675 0-73.738 33.07-73.755 73.753-.004 13.013 3.398 25.72 9.861 36.917L14.44 161.527l37.6-9.867c10.787 5.884 22.937 8.985 35.287 8.99h.03c40.67 0 73.735-33.074 73.753-73.758.01-19.702-7.658-38.227-21.602-52.176C125.523 20.72 107.01 14.19 87.184 14.18z"
        />
        <path
          fill="url(#wa-grad)"
          d="M87.184 25.227c-34.56 0-62.69 28.133-62.705 62.702-.004 11.065 2.892 21.87 8.39 31.39l-8.916 32.567 33.35-8.753c9.177 5.005 19.51 7.64 30.023 7.645h.025c34.556 0 62.69-28.137 62.705-62.706.007-16.753-6.512-32.51-18.363-44.366-11.852-11.856-27.608-18.38-44.51-18.38z"
        />
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M68.772 55.603c-1.378-3.062-2.828-3.123-4.138-3.177l-3.524-.043c-1.226 0-3.218.46-4.902 2.3-1.684 1.84-6.43 6.284-6.43 15.32s6.583 17.775 7.5 18.998c.92 1.226 12.7 20.31 31.33 27.663 15.498 6.116 18.637 4.898 22.003 4.594 3.366-.303 10.86-4.44 12.39-8.727 1.53-4.286 1.53-7.957 1.07-8.727-.46-.767-1.684-1.226-3.525-2.146-1.84-.92-10.86-5.36-12.543-5.972-1.684-.614-2.908-.92-4.133.92-1.225 1.84-4.746 5.972-5.82 7.197-1.073 1.225-2.147.92-3.987.306-1.84-.614-7.78-2.868-14.816-9.144-5.477-4.884-9.174-10.92-10.248-12.76-1.074-1.84-.115-2.835.808-3.75.83-.825 1.84-2.148 2.76-3.22.92-1.074 1.226-1.84 1.84-3.065.613-1.226.306-2.3-.154-3.22-.46-.92-4.095-10.065-5.74-13.7z"
          clipRule="evenodd"
        />
      </svg>
    </motion.a>
  );
}
