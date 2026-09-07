import React from 'react'
import { Helmet } from 'react-helmet-async'
import StatCounter from '../components/ui/StatCounter'
import SectionHeading from '../components/ui/SectionHeading'
import hero from '../assets/clients/building image.png'
import cl1 from '../assets/Client logo/LPP_LOGO.jpg'
import cl2 from '../assets/Client logo/M.png'
import cl3 from '../assets/Client logo/brakeburn_logo.jpeg'
import cl4 from '../assets/Client logo/contempo.png'
import cl5 from '../assets/Client logo/difuzed.png'
import cl6 from '../assets/Client logo/flyingmachine80_logo.jpeg'
import cl7 from '../assets/Client logo/foundry.jpeg'
import cl8 from '../assets/Client logo/hollywood_magic_llc_logo.jpeg'
import cl9 from '../assets/Client logo/logo_gas.ai_.png'
import cl10 from '../assets/Client logo/nanna andersonpng.avif'
import cl11 from '../assets/Client logo/superdry-brand-the-branding-journal-3-1024x683.png.avif'
import cl12 from '../assets/Client logo/weekend.png'

export default function Home(){
  return (
    <div>
      <Helmet>
        <title>Maham Knit Fashions | Leading Knit Apparel Manufacturer & Exporter, Tirupur India</title>
        <meta name="description" content="Maham Knit Fashions — India-based integrated knit apparel manufacturer and exporter. From fiber to fashion, sustainable production." />
      </Helmet>

      <section
        className="relative h-[56vh] bg-cover bg-top bg-no-repeat bg-teal-deep"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(3,105,102,0.9), rgba(3,105,102,0.85)), url(${hero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top',
          backgroundRepeat: 'no-repeat',
        }}
        aria-label="Factory building hero"
      >
        <div className="relative max-w-7xl mx-auto px-6 text-white w-full h-full flex items-center justify-center">
          <div className="w-full text-center">
            <h1 className="font-bebas text-[clamp(2.5rem,6vw,4.75rem)] leading-tight drop-shadow-[0_12px_30px_rgba(0,0,0,0.65)]">MAHAM KNIT FASHIONS</h1>
            <p className="mt-4 text-xl md:text-2xl max-w-3xl mx-auto drop-shadow-[0_8px_24px_rgba(0,0,0,0.5)]">India's Leading Knit Apparel Manufacturer & Exporter — From Fiber to Fashion.</p>
            <p className="mt-3 text-base md:text-lg max-w-2xl mx-auto text-teal-100/90">Integrated production, sustainable practices, and global delivery — design to dispatch under one roof.</p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <a href="/manufacturing" className="inline-block bg-white text-teal-deep px-6 py-3 rounded-md shadow-sm hover:shadow-md">Explore Our Capabilities</a>
              <a href="/contact" className="inline-block bg-brand-green text-white px-6 py-3 rounded-md shadow-sm hover:shadow-md">Get in Touch</a>
            </div>
          </div>
        </div>

        {/* SVG wave divider (hero -> next section) */}
        <div className="absolute -bottom-1 left-0 right-0 overflow-hidden leading-[0]">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-16">
            <path d="M0,30 C150,60 350,0 600,30 C850,60 1050,0 1200,30 L1200 60 L0 60 Z" fill="#1F8A8C" opacity="0.95"></path>
          </svg>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12 bg-cream">
        <SectionHeading title="Quick Stats" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
          <div className="bg-white rounded-xl p-6 shadow flex flex-col items-start">
            <StatCounter value={30000} label="Sq. Ft. Integrated Facility" />
          </div>
          <div className="bg-white rounded-xl p-6 shadow flex flex-col items-start">
            <StatCounter value={300000} label="Pieces / Month Output" />
          </div>
          <div className="bg-white rounded-xl p-6 shadow flex flex-col items-start">
            <StatCounter value={3300000} label="Garments Annual Capacity" />
          </div>
          <div className="bg-white rounded-xl p-6 shadow flex flex-col items-start">
            <StatCounter value={10500000} label="Approved Turnover (USD)" />
          </div>
          <div className="bg-white rounded-xl p-6 shadow flex flex-col items-start">
            <StatCounter value={300} label="Sewing Machines" />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12">
        <SectionHeading title="About" eyebrow="Who we are" />
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-4 text-charcoal">
            <p>At Maham Knit Fashions, we understand that modern global apparel retail demands strict agility, reliable production planning, and an uncompromising commitment to quality. Our integrated setup allows us to manage design, manufacturing, finishing, and delivery through one connected workflow.</p>
            <p>Operating from Tirupur, India, we support brands and buyers looking for dependable knitwear production with a strong balance of cost efficiency, product consistency, and responsible sourcing standards. Our framework is built around technical discipline, timely execution, and long-term supplier partnerships.</p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200 space-y-4">
            <h3 className="text-xl font-semibold text-slate-900">Why brands choose us</h3>
            <ul className="space-y-3 text-charcoal">
              <li>• Vertically integrated knit apparel manufacturing and sourcing</li>
              <li>• Flexible production for basics, essentials, and fashion-led garments</li>
              <li>• Strong focus on export readiness, compliance, and repeat delivery</li>
              <li>• Product development support from concept to final shipment</li>
            </ul>
            <a href="/about" className="mt-2 inline-block bg-brand-green text-white px-4 py-2 rounded-md shadow-sm">Learn More About Us</a>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12 bg-white">
        <SectionHeading title="Why Maham Knit Fashions" eyebrow="Our strength" />
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="rounded-2xl bg-[#edf9f8] p-6 border border-teal-100 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Integrated manufacturing</h3>
            <p className="text-charcoal">Our process covers knitting, fabric processing, dyeing, wet processing, printing, embroidery, and finishing under a single production ecosystem designed for speed and quality control.</p>
          </div>
          <div className="rounded-2xl bg-[#edf9f8] p-6 border border-teal-100 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Sustainable operations</h3>
            <p className="text-charcoal">We continue to strengthen our production practices around responsible sourcing, resource efficiency, and compliance-driven manufacturing aligned with evolving global requirements.</p>
          </div>
          <div className="rounded-2xl bg-[#edf9f8] p-6 border border-teal-100 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Export-focused execution</h3>
            <p className="text-charcoal">From product planning to packing and dispatch, our team supports buyers with consistency, scalability, and responsiveness across demanding retail schedules.</p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12 bg-cream">
        <SectionHeading title="What we deliver" eyebrow="Capabilities" />
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200/40">
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Production scale</h3>
            <p className="text-charcoal">We operate with a large integrated facility, high-volume sewing capacity, and manufacturing processes tailored for knitted apparel, essentials, and category-led collections.</p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200/40">
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Product diversity</h3>
            <p className="text-charcoal">Our portfolio spans newborn, infant, kidswear, women’s and men’s wear, athleisure, performance clothing, sleepwear, innerwear, and home textile categories designed for broad market appeal.</p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12 bg-white">
        <SectionHeading title="Trusted By" eyebrow="Clients" />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 py-8 items-center">
          {[cl1,cl2,cl3,cl4,cl5,cl6,cl7,cl8,cl9,cl10,cl11,cl12].map((src, i)=> (
            <div key={i} className="bg-white border rounded-lg p-6 flex items-center justify-center shadow-sm">
              <img src={src} alt={`Client ${i+1}`} className="max-h-24 object-contain" />
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}
