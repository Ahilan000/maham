import React from 'react'
import { Helmet } from 'react-helmet-async'
import Card from '../components/ui/Card'
import imgKnitting from '../assets/manufacturing/knitting.png'
import imgFabric from '../assets/manufacturing/Fabric Processing.png'
import imgDyeing from '../assets/manufacturing/dyeing.png'
import imgWet from '../assets/manufacturing/WET PROCESSING.png'
import imgPrinting from '../assets/manufacturing/printing.png'
import imgEmbroidery from '../assets/manufacturing/Embroidery.png'
import imgDesign from '../assets/manufacturing/Design studio.png'

const sections = [
  {
    id: 'knitting',
    title: 'Knitting',
    image: imgKnitting,
    heading: 'Capacity: 500 Tons / month · 50+ machines',
    body: (
      <p className="mt-2 text-white/85">We produce premium fabrics including cotton, modal, polyester blends and elastane jerseys. Loop knit constructions, brushed fleece, interlocks, ribs and drop needle fabrics; yarn-dyed options and recycled fiber offerings (GRS-certified). GSM range 170–650.</p>
    )
  },
  {
    id: 'fabric-processing',
    title: 'Fabric Processing',
    image: imgFabric,
    heading: 'Capacity: 150 Tons / month',
    body: (
      <p className="mt-2 text-white/85">Advanced machinery and precision-driven bespoke finishes including garment dyeing, vintage-inspired washes, SPF 50+ UV protection, moisture management and flame-retardant finishes.</p>
    )
  },
  {
    id: 'dyeing',
    title: 'Dyeing',
    image: imgDyeing,
    heading: 'Capacity: 280 Tons / month',
    body: (
      <ul className="mt-2 list-disc pl-5 text-white/85 space-y-2">
        <li><strong className="text-[#d9fff8]">Advanced Machinery:</strong> State-of-the-art THIES dyeing machines integrated with washing/finishing.</li>
        <li><strong className="text-[#d9fff8]">Versatile Fabric Processing</strong></li>
        <li><strong className="text-[#d9fff8]">Flexible Batch Production</strong></li>
        <li><strong className="text-[#d9fff8]">Certified Sustainability</strong> (GOTS, OCS, RCS certified unit)</li>
      </ul>
    )
  },
  {
    id: 'wet-processing',
    title: 'Wet Processing',
    image: imgWet,
    heading: 'Wash & Finish Techniques',
    body: (
      <p className="text-white/85 mt-2">Full suite of wash and finish techniques including pigment dye, garment wash, acid & stone washes, burnout, tie-dye, and performance finishes such as UPF and moisture-wicking.</p>
    )
  },
  {
    id: 'printing',
    title: 'Printing',
    image: imgPrinting,
    heading: 'Precision Color & Surface Finish',
    body: (
      <p className="text-white/85">AOP, discharge/reactive/pigment printing with phthalate-free inks. Multi-color automatic machines and an in-house CAD studio enable complex, repeatable print production.</p>
    )
  },
  {
    id: 'embroidery',
    title: 'Embroidery',
    image: imgEmbroidery,
    heading: 'Capacity: 10,000 pieces per day',
    body: (
      <p className="text-white/85">Up to 100 embroidery heads and multi-color techniques including appliqué, sequins, bead work and laser bridge embroidery for premium detailing and high-volume order execution.</p>
    )
  },
  {
    id: 'design-studio',
    title: 'Design Studio',
    image: imgDesign,
    heading: 'Concept to Sample',
    body: (
      <p className="text-white/85">In-house design studio with product development, pattern engineering, 3D fit software and R&D for sustainable fabric options — a concept-to-sample creative and technical nucleus.</p>
    )
  }
]

export default function Manufacturing(){
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <Helmet>
        <title>Manufacturing Capabilities — Maham Knit Fashions</title>
      </Helmet>

      <header className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700 mb-3">Manufacturing</p>
        <h1 className="text-3xl md:text-5xl font-semibold text-slate-900 mb-4">From Fiber to Fashion</h1>
        <p className="max-w-4xl text-lg text-slate-700 leading-8">Our vertically integrated capabilities span knitting, fabric processing, dyeing, wet-processing, printing, embroidery and an in-house design studio to take collections from concept to delivery.</p>
      </header>

      <div className="space-y-8">
        {sections.map((s, idx) => (
          <section
            key={s.id}
            className={`grid gap-6 rounded-[28px] border border-teal-700/20 bg-gradient-to-br from-[#0c7a7b] via-[#0f8f8f] to-[#0a6063] p-5 shadow-lg shadow-teal-900/10 md:grid-cols-[0.9fr_1.1fr] md:p-7 ${idx % 2 === 1 ? 'md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1' : ''}`}
          >
            <div className="overflow-hidden rounded-2xl bg-white/10 p-3 ring-1 ring-white/10 backdrop-blur-sm">
              <div className="h-64 md:h-80 w-full overflow-hidden rounded-xl bg-white">
                <img src={s.image} alt={s.title} className="h-full w-full object-contain p-4" />
              </div>
            </div>

            <div className="flex flex-col justify-center rounded-2xl bg-teal-950/10 p-4 md:p-6">
              <div className="mb-3 inline-flex w-fit items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-teal-50">
                {s.title}
              </div>
              <h2 className="text-2xl font-semibold text-white mb-3">{s.heading || s.title}</h2>
              {s.body}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
