import React from 'react'
import { Helmet } from 'react-helmet-async'
import Card from '../components/ui/Card'
import SectionHeading from '../components/ui/SectionHeading'
import newborn from '../assets/maham-product-images/newborn.jpg'
import infants from '../assets/maham-product-images/infants-toddlers.jpg'
import boysGirls from '../assets/maham-product-images/boys-girls.jpg'
import menWomen from '../assets/maham-product-images/men-women.jpg'
import athleisure from '../assets/maham-product-images/athleisure.jpg'
import performance from '../assets/maham-product-images/performance-wear.jpg'
import innerwear from '../assets/maham-product-images/innerwear-underwear.jpg'
import sportswear from '../assets/maham-product-images/sportswear.jpg'
import sleepwear from '../assets/maham-product-images/sleepwear.jpg'
import beachwear from '../assets/maham-product-images/beachwear.jpg'
import yoga from '../assets/maham-product-images/yoga-wear.jpg'
import maternity from '../assets/maham-product-images/maternity.jpg'
import babyBed from '../assets/baby bed.jpeg'
import babyTowel from '../assets/baby towel.jpeg'

const categories = ['Newborn','Infants & Toddlers','Boys & Girls','Men & Women','Athleisure','Performance Wear','Innerwear/Underwear','Sportswear','Sleepwear','Beachwear','Yoga Wear','Maternity']

export default function Products(){
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <Helmet>
        <title>Products — Maham Knit Fashions</title>
      </Helmet>

      <header className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700 mb-3">Portfolio</p>
        <SectionHeading title="Our Product Portfolio" />
      </header>

      <p className="mb-8 max-w-4xl text-lg text-slate-700 leading-8">Comprehensive range of textile solutions engineered for every stage of product life — from newborn essentials to performance-driven athleisure, everyday basics, and home-oriented textile products.</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-10">
        {categories.map((cat, i) => {
          const imgs = [newborn, infants, boysGirls, menWomen, athleisure, performance, innerwear, sportswear, sleepwear, beachwear, yoga, maternity]
          const src = imgs[i % imgs.length]
          return (
            <div
              key={cat}
              className="group rounded-[24px] border border-teal-700/15 bg-gradient-to-br from-[#0e7a7a] via-[#0f8f8d] to-[#0a6166] p-3 shadow-lg shadow-teal-900/10 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-3 overflow-hidden rounded-2xl bg-white/10 p-2">
                <div className="aspect-[4/3] overflow-hidden rounded-xl bg-white">
                  <img src={src} alt={cat} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                </div>
              </div>
              <h4 className="px-1 text-base font-semibold text-white">{cat}</h4>
            </div>
          )
        })}
      </div>

      <div className="grid gap-6 md:grid-cols-2 mb-8">
        <div className="rounded-[28px] border border-teal-700/15 bg-[#f2fbfa] p-6 shadow-sm">
          <h3 className="text-2xl font-semibold text-slate-900 mb-3">Life-stage Groups</h3>
          <div className="space-y-4 text-slate-700 leading-7">
            <p><span className="font-semibold text-slate-900">Newborn & Infant:</span> Soft, skin-friendly fabrics with emphasis on safety, comfort, and gentle finishing for babywear and nursery essentials.</p>
            <p><span className="font-semibold text-slate-900">Children:</span> Durable, easy-care garments designed for active movement, everyday comfort, and consistent fit across growing age groups.</p>
            <p><span className="font-semibold text-slate-900">Men & Women:</span> Everyday essentials, elevated basics, and style-led knitwear built to balance fashion appeal, wearability, and production reliability.</p>
            <p><span className="font-semibold text-slate-900">Performance & Athleisure:</span> Technical knit constructions with moisture management, flexibility, and ergonomic comfort for active lifestyles and modern sportswear demand.</p>
            <p><span className="font-semibold text-slate-900">Maternity & Home Comfort:</span> Functional, comfortable pieces for everyday wear and home-focused essentials with thoughtful textile quality and practical design.</p>
          </div>
        </div>

        <div className="rounded-[28px] border border-teal-700/15 bg-[#eaf9f8] p-6 shadow-sm">
          <h3 className="text-2xl font-semibold text-slate-900 mb-4">Home & Baby Essentials</h3>
          <div className="space-y-5">
            <div className="space-y-2">
              <div className="h-[18rem] overflow-hidden rounded-2xl border border-teal-700/20 bg-white p-2 shadow-sm">
                <img src={babyBed} alt="Infant bed" className="h-full w-full rounded-xl object-cover" />
              </div>
              <p className="text-center text-base font-medium text-slate-800">Infant Bed</p>
            </div>
            <div className="space-y-2">
              <div className="h-[18rem] overflow-hidden rounded-2xl border border-teal-700/20 bg-white p-2 shadow-sm">
                <img src={babyTowel} alt="Infant towel" className="h-full w-full rounded-xl object-cover" />
              </div>
              <p className="text-center text-base font-medium text-slate-800">Infant Towel</p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-[28px] bg-gradient-to-r from-[#0a5d5d] to-[#0f7f7a] p-7 shadow-lg shadow-teal-900/10">
        <h3 className="text-2xl font-semibold text-white mb-3">Customer Segments</h3>
        <p className="text-white/90 leading-7 text-lg">Apparel: Basics & fashion tops, polos, hoodies, joggers. Specialized: Maternity, innerwear, sleepwear, licensed products. Home & Baby: Premium bedding, terry towels, baby essentials.</p>
      </div>
    </div>
  )
}
