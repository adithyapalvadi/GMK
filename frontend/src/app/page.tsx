"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Leaf, ShieldCheck, Truck, Star, Phone } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { useLanguage } from '@/context/LanguageContext';

export default function Home() {
  const { t } = useLanguage();
  const featuredProducts = [
    {
      id: '1',
      name: t('products_data.mirchi_karam.name'),
      price: 250,
      image: '/images/mirchi-karam.png',
      spiceLevel: 5 as const,
      rating: 4.9,
      reviews: 128,
      weight: '250g'
    },
    {
      id: '2',
      name: t('products_data.pandumirapakaya.name'),
      price: 350,
      image: '/images/mango-pickle.png',
      spiceLevel: 4 as const,
      rating: 4.8,
      reviews: 95,
      weight: '500g'
    },
    {
      id: '3',
      name: t('products_data.garlic_karam.name'),
      price: 200,
      image: '/images/hero-bg.png', // reusing hero image as a placeholder for garlic karam
      spiceLevel: 3 as const,
      rating: 4.7,
      reviews: 64,
      weight: '250g'
    }
  ];

  return (
    <div className="min-h-screen">
      
      {/* Premium Hero Section */}
      <section className="relative min-h-screen md:h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/hero-bg.png" 
            alt="Authentic Guntur Spices" 
            fill
            className="object-cover object-center transform scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-start text-white pt-32 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl backdrop-blur-md bg-black/20 p-8 md:p-12 rounded-3xl border border-white/10"
          >
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-block py-1.5 px-4 rounded-full bg-brand-red/90 text-white text-[10px] md:text-xs font-bold tracking-widest uppercase mb-6"
            >
              {t('hero.tagline')} 🌾
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-6"
            >
              {t('hero.title')}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-base md:text-lg text-gray-200 mb-10 leading-relaxed max-w-xl"
            >
              {t('hero.subtitle')}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/shop" className="px-8 py-4 bg-brand-red hover:bg-brand-dark-red text-white font-bold rounded-full transition-all hover:-translate-y-1 shadow-lg shadow-brand-red/30 flex items-center justify-center text-sm md:text-base">
                {t('hero.cta_shop')}
              </Link>
              <a 
                href="https://wa.me/917093840055" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-bold rounded-full transition-all flex items-center justify-center text-sm md:text-base"
              >
                <Phone size={18} className="mr-2" />
                {t('hero.cta_whatsapp')}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Feature Highlights - Glassmorphism overlap */}
      <section className="relative z-20 -mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/90 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-gray-100 flex flex-col items-center text-center transform transition-transform hover:-translate-y-2"
          >
            <div className="w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center text-brand-orange mb-6 shadow-inner">
              <Leaf size={32} />
            </div>
            <h3 className="text-xl font-bold text-brand-dark mb-3">{t('features.farm_to_home.title')}</h3>
            <p className="text-gray-600">{t('features.farm_to_home.desc')}</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white/90 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-gray-100 flex flex-col items-center text-center transform transition-transform hover:-translate-y-2"
          >
            <div className="w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center text-brand-orange mb-6 shadow-inner">
              <ShieldCheck size={32} />
            </div>
            <h3 className="text-xl font-bold text-brand-dark mb-3">{t('features.authentic_recipes.title')}</h3>
            <p className="text-gray-600">{t('features.authentic_recipes.desc')}</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-white/90 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-gray-100 flex flex-col items-center text-center transform transition-transform hover:-translate-y-2"
          >
            <div className="w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center text-brand-orange mb-6 shadow-inner">
              <Truck size={32} />
            </div>
            <h3 className="text-xl font-bold text-brand-dark mb-3">{t('features.freshly_packed.title')}</h3>
            <p className="text-gray-600">{t('features.freshly_packed.desc')}</p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-brand-yellow/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 relative"
            >
              <div className="relative h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl">
                <Image 
                  src="/images/about-farm.png" 
                  alt="Farmer drying chilies" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl hidden md:block border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="text-brand-orange">
                    <Star size={32} fill="currentColor" />
                  </div>
                  <div>
                    <h4 className="font-bold text-2xl text-brand-dark">{t('about.years')}</h4>
                    <p className="text-gray-500 font-medium">{t('about.years_desc')}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2 className="text-brand-orange font-bold tracking-widest uppercase mb-4">{t('about.heritage')}</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-8 leading-tight">
                {t('about.title')}
              </h3>
              <div className="space-y-6 text-lg text-gray-600">
                <p>{t('about.p1')}</p>
                <p>{t('about.p2')}</p>
                <p>{t('about.p3')}</p>
              </div>
              <div className="mt-10">
                <Link href="/shop" className="inline-flex items-center font-bold text-brand-red hover:text-brand-dark-red text-lg group">
                  {t('about.discover')} 
                  <span className="ml-2 transform group-hover:translate-x-2 transition-transform">→</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Products Collection */}
      <section className="py-24 bg-white relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-serif font-bold text-brand-dark mb-6"
            >
              {t('collection.title')}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-500"
            >
              {t('collection.subtitle')}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link href="/shop" className="inline-block px-10 py-4 bg-brand-dark hover:bg-black text-white font-bold rounded-full transition-all hover:-translate-y-1 shadow-lg">
              {t('collection.view_all')}
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
