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
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
      aria-label="Chat with us on WhatsApp"
    >
      <span className="absolute right-full mr-4 bg-white text-gray-800 text-sm font-bold px-3 py-1.5 rounded-lg shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        Chat with us!
      </span>
      {/* WhatsApp SVG Icon */}
      <svg 
        viewBox="0 0 24 24" 
        width="28" 
        height="28" 
        stroke="currentColor" 
        strokeWidth="2" 
        fill="none" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="fill-current"
      >
        <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.065-.301-.15-1.265-.462-2.406-1.474-.889-.788-1.488-1.761-1.663-2.062-.175-.301-.018-.464.132-.614.135-.136.301-.351.451-.525.15-.176.2-.301.3-.5.101-.2.05-.376-.025-.526-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.21 2.095 3.165 5.076 4.437.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.767-.721 2.016-1.426.248-.705.248-1.31.174-1.426-.074-.116-.272-.181-.572-.331z" />
        <path d="M12 21a9.004 9.004 0 0 1-4.63-.128L3 21l2.153-3.956A9 9 0 1 1 12 21z" />
      </svg>
    </motion.a>
  );
}
