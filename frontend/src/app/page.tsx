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
          <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/50 to-transparent"></div>
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

      {/* Our Collections */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-serif font-bold text-brand-dark mb-12"
          >
            {t('collections_grid.title')}
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { name: t('collections_grid.nonveg'), image: '/images/nonveg-pickles.png', href: '/shop' },
              { name: t('collections_grid.veg'), image: '/images/veg-pickles.png', href: '/shop' },
              { name: t('collections_grid.karam'), image: '/images/karam-podulu.png', href: '/shop' },
              { name: t('collections_grid.spices'), image: '/images/spices-category.png', href: '/shop' },
              { name: t('collections_grid.combo'), image: '/images/combo-pack.png', href: '/shop' },
            ].map((cat, index) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={cat.href} className="group block text-center">
                  <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-4 shadow-md group-hover:shadow-xl transition-shadow">
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <p className="font-bold text-brand-dark group-hover:text-brand-red transition-colors">
                    {cat.name} →
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-brand-yellow p-8 rounded-2xl shadow-lg border border-brand-yellow flex flex-col items-center text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-brand-orange mb-6 shadow-md">
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
              className="bg-brand-yellow p-8 rounded-2xl shadow-lg border border-brand-yellow flex flex-col items-center text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-brand-orange mb-6 shadow-md">
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
              className="bg-brand-yellow p-8 rounded-2xl shadow-lg border border-brand-yellow flex flex-col items-center text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-brand-orange mb-6 shadow-md">
                <Truck size={32} />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">{t('features.freshly_packed.title')}</h3>
              <p className="text-gray-600">{t('features.freshly_packed.desc')}</p>
            </motion.div>
          </div>
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
        <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-gray-200 to-transparent"></div>
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

      {/* Follow Us on Instagram */}
      <section className="py-20 bg-brand-yellow/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 mb-3"
              >
                <svg className="w-8 h-8 text-brand-red" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                <span className="text-sm font-bold text-brand-dark tracking-wider uppercase">@gunturmirchikaram</span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-serif font-bold text-brand-dark"
              >
                {t('instagram.title')}
              </motion.h2>
            </div>
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              href="https://www.instagram.com/gunturmirchikaram/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-purple-600 via-pink-500 to-orange-400 text-white font-bold rounded-full hover:-translate-y-1 transition-all shadow-lg text-sm"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              Follow Us
            </motion.a>
          </div>

          {/* Instagram Feed Grid - Mix of posts and reels */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {[
              { src: '/images/insta-reel-1.png', type: 'reel', likes: '2.4K', comments: '89' },
              { src: '/images/mirchi-karam.png', type: 'post', likes: '1.8K', comments: '42' },
              { src: '/images/insta-post-1.png', type: 'post', likes: '3.1K', comments: '156' },
              { src: '/images/insta-reel-2.png', type: 'reel', likes: '5.2K', comments: '203' },
              { src: '/images/mango-pickle.png', type: 'post', likes: '1.2K', comments: '38' },
              { src: '/images/founder.jpg', type: 'post', likes: '4.7K', comments: '312' },
            ].map((item, index) => (
              <motion.a
                key={index}
                href="https://www.instagram.com/gunturmirchikaram/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group relative aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
              >
                <Image
                  src={item.src}
                  alt={`Instagram ${item.type}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Reel play icon */}
                {item.type === 'reel' && (
                  <div className="absolute top-3 right-3 z-10">
                    <svg className="w-6 h-6 text-white drop-shadow-lg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9.5 16.5v-9l7 4.5-7 4.5z" />
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                    </svg>
                  </div>
                )}

                {/* Hover overlay with engagement stats */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-4 text-white font-bold text-sm">
                    <span className="flex items-center gap-1">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                      {item.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18z" />
                      </svg>
                      {item.comments}
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
