import React from 'react'
import { Helmet } from 'react-helmet-async'
import Card from '../components/ui/Card'
import SectionHeading from '../components/ui/SectionHeading'
import worldMap from '../assets/maham-sustainability-images/world map.jpeg'
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

export default function GlobalPresence(){
  const markets = ['United Kingdom','Spain','Mexico','Europe','USA']

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <Helmet>
        <title>Global Presence — Maham Knit Fashions</title>
      </Helmet>

      <SectionHeading title="Global Spread" eyebrow="Global Presence" />

      <div className="mb-10">
        <div className="w-full h-[22rem] md:h-[26rem] lg:h-[30rem] overflow-hidden rounded-[30px] border-2 border-teal-500 bg-transparent">
          <img src={worldMap} alt="World map" className="w-full h-full object-cover rounded-[30px]" />
        </div>
      </div>

      <div className="mb-10 grid gap-6 md:grid-cols-3">
        <div className="rounded-[24px] bg-gradient-to-br from-[#0e7a7a] via-[#0f8f8d] to-[#0a6063] p-6 text-white shadow-lg shadow-teal-900/10">
          <h3 className="text-xl font-semibold mb-3">Serving international demand</h3>
          <p className="leading-7 text-white/90">Maham Knit Fashions supports a diverse range of export and brand partnerships across key global markets, helping buyers source dependable knitwear at scale with strong quality oversight and consistent lead-time performance.</p>
        </div>

        <div className="rounded-[24px] bg-gradient-to-br from-[#0e7a7a] via-[#0f8f8d] to-[#0a6063] p-6 text-white shadow-lg shadow-teal-900/10">
          <h3 className="text-xl font-semibold mb-3">Flexible response</h3>
          <p className="leading-7 text-white/90">Our export-oriented model is designed to respond to changing seasonal timelines, evolving fashion trends, and region-specific product expectations while maintaining product integrity from development to dispatch.</p>
        </div>

        <div className="rounded-[24px] bg-gradient-to-br from-[#0e7a7a] via-[#0f8f8d] to-[#0a6063] p-6 text-white shadow-lg shadow-teal-900/10">
          <h3 className="text-xl font-semibold mb-3">Markets served</h3>
          <p className="leading-7 text-white/90">{markets.join(' • ')}</p>
        </div>
      </div>

      <SectionHeading title="Trusted Brand Partners" eyebrow="Clients" />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {[cl1,cl2,cl3,cl4,cl5,cl6,cl7,cl8,cl9,cl10,cl11,cl12].map((src, i) => (
          <div key={i} className="bg-white border rounded-lg p-4 flex items-center justify-center shadow-sm">
            <img src={src} alt={`Client ${i+1}`} className="max-h-16 object-contain" />
          </div>
        ))}
      </div>
    </div>
  )
}
