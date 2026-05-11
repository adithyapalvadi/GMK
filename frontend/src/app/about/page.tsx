"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Leaf, Heart, Users, ShieldCheck, Sprout, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function AboutPage() {
  const { t } = useLanguage();

  const values = [
    {
      icon: Leaf,
      title: t('about_page.values.no_preservatives.title'),
      desc: t('about_page.values.no_preservatives.desc'),
    },
    {
      icon: Sprout,
      title: t('about_page.values.traditional.title'),
      desc: t('about_page.values.traditional.desc'),
    },
    {
      icon: Users,
      title: t('about_page.values.farmers.title'),
      desc: t('about_page.values.farmers.desc'),
    },
    {
      icon: ShieldCheck,
      title: t('about_page.values.quality.title'),
      desc: t('about_page.values.quality.desc'),
    },
  ];

  return (
    <div className="min-h-screen bg-brand-yellow/30">

      {/* Hero Banner */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about-farm.png"
            alt="Guntur Chili Fields"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-serif font-bold mb-4"
          >
            {t('about_page.hero_title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto"
          >
            {t('about_page.hero_subtitle')}
          </motion.p>
        </div>
      </section>

      {/* Meet the Founder Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

            {/* Founder Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-5/12 w-full"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/images/founder.jpg"
                  alt="Founder of Guntur Mirchi Kaaram"
                  width={600}
                  height={750}
                  className="object-cover w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent p-6">
                  <h3 className="text-white font-serif font-bold text-2xl">{t('about_page.founder_name')}</h3>
                  <p className="text-gray-200 text-sm">{t('about_page.founder_role')}</p>
                </div>
              </div>
            </motion.div>

            {/* Founder Story */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-7/12 w-full"
            >
              <span className="inline-block py-1.5 px-4 rounded-full bg-brand-red/10 text-brand-red text-xs font-bold tracking-widest uppercase mb-6">
                {t('about_page.meet_founder_tag')}
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-8 leading-tight">
                {t('about_page.founder_heading')}
              </h2>
              <div className="space-y-5 text-lg text-gray-600 leading-relaxed">
                <p>{t('about_page.founder_p1')}</p>
                <p>{t('about_page.founder_p2')}</p>
                <p>{t('about_page.founder_p3')}</p>
              </div>

              {/* Highlight Quote */}
              <div className="mt-8 p-6 bg-brand-red/5 border-l-4 border-brand-red rounded-r-xl">
                <p className="text-brand-dark font-serif text-xl italic leading-relaxed">
                  "{t('about_page.founder_quote')}"
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-serif font-bold text-brand-dark mb-4"
            >
              {t('about_page.values_title')}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-500"
            >
              {t('about_page.values_subtitle')}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-brand-yellow/30 p-8 rounded-2xl text-center hover:shadow-xl transition-shadow border border-brand-yellow"
              >
                <div className="w-16 h-16 bg-brand-red/10 rounded-2xl flex items-center justify-center text-brand-red mx-auto mb-6">
                  <value.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Supporting Farmers Section */}
      <section className="py-20 md:py-28 bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="flex items-center gap-3 mb-6">
                <Heart size={24} className="text-brand-red" />
                <span className="text-brand-orange font-bold tracking-widest uppercase text-sm">{t('about_page.farmers_tag')}</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
                {t('about_page.farmers_title')}
              </h2>
              <div className="space-y-5 text-lg text-gray-300 leading-relaxed">
                <p>{t('about_page.farmers_p1')}</p>
                <p>{t('about_page.farmers_p2')}</p>
              </div>
              <div className="mt-10">
                <Link
                  href="/shop"
                  className="inline-flex items-center px-8 py-4 bg-brand-red hover:bg-brand-dark-red text-white font-bold rounded-full transition-all hover:-translate-y-1 shadow-lg shadow-brand-red/30"
                >
                  {t('about_page.shop_cta')}
                  <ArrowRight size={20} className="ml-2" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="relative h-[400px] md:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/about-farm.png"
                  alt="Chili farmers in Guntur"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}
