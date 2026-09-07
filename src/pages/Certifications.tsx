import React from 'react'
import { Helmet } from 'react-helmet-async'
import SectionHeading from '../components/ui/SectionHeading'
import Card from '../components/ui/Card'
import grs from '../assets/Client logo/grs.png'
import organic from '../assets/Client logo/organic-100-content-standard-logo-png_seeklogo-343925.png'
import rcs100 from '../assets/Client logo/rcs_100_logo.png'
import rcsBlended from '../assets/Client logo/rcs_blended_logo.png'
import sedexLogo from '../assets/Client logo/sedex-logo-png_seeklogo-465691.png'
import sedexSvc from '../assets/Client logo/sedex-smeta-consultancy-service.jpg'
import walt from '../assets/Client logo/The_Walt_Disney_Company_Logo.svg.webp'

const badges = [
  {src: grs, alt: 'Global Recycled Standard (GRS)'},
  {src: organic, alt: 'Organic 100 Content Standard'},
  {src: rcs100, alt: 'Recycled Claim Standard 100'},
  {src: rcsBlended, alt: 'Recycled Blended Claim Standard'},
  {src: sedexLogo, alt: 'Sedex'},
  {src: sedexSvc, alt: 'Sedex SMETA'},
  {src: walt, alt: 'The Walt Disney Company'}
]

export default function Certifications(){
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <Helmet>
        <title>Certifications & Compliance — Maham Knit Fashions</title>
      </Helmet>

      <SectionHeading title="Certifications & Compliance" />
      <p className="text-charcoal mb-8 text-lg leading-8 max-w-4xl">Maham Knit Fashions maintains a structured approach to material, process, and social compliance across its supply chain, helping deliver products that meet both international quality expectations and responsible manufacturing standards.</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-10">
        {badges.map((b, i) => (
          <Card key={i} className="p-4 flex items-center justify-center bg-white shadow-sm border border-slate-200">
            <img src={b.src} alt={b.alt} className="max-h-14 object-contain" />
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="bg-[#f4efe7] rounded-[28px] p-7 shadow-sm border border-[#e8e1d5]">
          <h3 className="text-2xl font-semibold text-slate-900 mb-3">From Fiber to Fashion</h3>
          <p className="text-slate-700 leading-8 text-lg">Maham Knit Fashions is headquartered in Tirupur, India — widely recognized as the knitwear capital of the country. Our vertically integrated manufacturing capability spans knitting, fabric processing, dyeing, wet processing, printing, embroidery, garmenting, and quality testing, all structured to support dependable output and brand confidence.</p>
          <p className="text-slate-700 leading-8 text-lg mt-4">Our quality framework is built to support buyers across basic essentials, fashion-led categories, and specialty products, ensuring each stage of production is aligned with compliance, product integrity, and reliable delivery.</p>
        </div>

        <div className="bg-[#edf9f8] rounded-[28px] p-7 shadow-sm border border-teal-100">
          <h3 className="text-2xl font-semibold text-slate-900 mb-3">Operating standard</h3>
          <ul className="space-y-3 text-slate-700 leading-7 text-lg">
            <li>• Responsible sourcing and material traceability</li>
            <li>• Process-driven quality control and reporting</li>
            <li>• Social compliance awareness and supplier accountability</li>
            <li>• Export-ready manufacturing systems and documentation support</li>
          </ul>
          <div className="mt-6">
            <a href="/contact" className="inline-block bg-brand-green text-white px-5 py-3 rounded-md shadow-sm">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  )
}
