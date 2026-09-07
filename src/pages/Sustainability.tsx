import React from 'react'
import { Helmet } from 'react-helmet-async'
import SectionHeading from '../components/ui/SectionHeading'
import Card from '../components/ui/Card'
import imgCircular from '../assets/maham-sustainability-images/circular-economy.jpg'
import imgTree from '../assets/maham-sustainability-images/tree-plantation.jpg'
import imgCSR1 from '../assets/maham-sustainability-images/csr-health-camp.jpg'
import imgCSR2 from '../assets/maham-sustainability-images/csr-transport.jpg'
import imgGlobal from '../assets/maham-sustainability-images/global-system.jpg'
import imgHuman from '../assets/maham-sustainability-images/human-system.jpg'
import imgSocial from '../assets/maham-sustainability-images/social-system.jpg'

export default function Sustainability(){
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <Helmet>
        <title>Sustainability & CSR — Maham Knit Fashions</title>
      </Helmet>

      <SectionHeading title="Our Commitment to Global Sustainability" eyebrow="Sustainability" />

      <section className="mb-8">
        <Card>
          <div className="md:flex md:items-center md:gap-6">
            <div className="md:w-1/3 w-full overflow-hidden rounded-lg">
              <div className="w-full h-44 md:h-36 lg:h-44 overflow-hidden">
                <img src={imgTree} alt="Tree Plantation" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="md:w-2/3 w-full mt-4 md:mt-0">
              <h3 className="font-semibold">Tree Plantation Drive</h3>
              <p className="mt-2 text-charcoal">Maham Knit Fashions runs annual tree plantation initiatives, carbon sequestration activities and community engagement programs focused on restoring and regenerating local ecosystems.</p>
            </div>
          </div>
        </Card>
      </section>

      <section className="mb-8 bg-teal-deep text-white rounded-xl p-6">
        <div className="md:flex md:items-center md:gap-6">
          <div className="md:w-2/3 w-full">
            <h3 className="font-semibold">Circular Economy Principles</h3>
            <ul className="mt-3 list-disc pl-5">
              <li>Minimize waste and pollution</li>
              <li>Promote product & material circulation</li>
              <li>Restore and regenerate nature</li>
            </ul>
          </div>
          <div className="md:w-1/3 w-full mt-4 md:mt-0 overflow-hidden rounded-lg">
            <div className="w-full h-36 overflow-hidden">
              <img src={imgCircular} alt="Circular economy" className="w-full h-full object-cover opacity-90" />
            </div>
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-6 mb-8">
        <Card>
          <div className="overflow-hidden rounded-md mb-3">
            <div className="w-full h-40 overflow-hidden">
              <img src={imgGlobal} alt="Global system" className="w-full h-full object-cover" />
            </div>
          </div>
          <h4 className="font-semibold">Global System</h4>
          <p className="text-charcoal mt-2">Climate, resources, energy and ecosystems — managed to reduce environmental impact.</p>
        </Card>
        <Card>
          <div className="overflow-hidden rounded-md mb-3">
            <div className="w-full h-40 overflow-hidden">
              <img src={imgHuman} alt="Human system" className="w-full h-full object-cover" />
            </div>
          </div>
          <h4 className="font-semibold">Human System</h4>
          <p className="text-charcoal mt-2">Security, lifestyle, values and health — programs to uplift employees and communities.</p>
        </Card>
        <Card>
          <div className="overflow-hidden rounded-md mb-3">
            <div className="w-full h-40 overflow-hidden">
              <img src={imgSocial} alt="Social system" className="w-full h-full object-cover" />
            </div>
          </div>
          <h4 className="font-semibold">Social System</h4>
          <p className="text-charcoal mt-2">Politics, economy, industry and technology — compliant and transparent operations.</p>
        </Card>
      </section>

      <section>
        <SectionHeading title="Corporate Social Responsibility" eyebrow="CSR" />
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <div className="md:flex md:items-center md:gap-4">
              <div className="md:w-1/3 w-full overflow-hidden rounded-md">
                <div className="w-full h-28 overflow-hidden">
                  <img src={imgCSR2} alt="Transport" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="md:w-2/3 w-full mt-4 md:mt-0">
                <h4 className="font-semibold">Transport</h4>
                <p className="mt-2 text-charcoal">Free transportation for all employees to ensure safety and accessibility.</p>
              </div>
            </div>
          </Card>
          <Card>
            <div className="md:flex md:items-center md:gap-4">
              <div className="md:w-1/3 w-full overflow-hidden rounded-md">
                <div className="w-full h-28 overflow-hidden">
                  <img src={imgCSR1} alt="Health camps" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="md:w-2/3 w-full mt-4 md:mt-0">
                <h4 className="font-semibold">Health Camps & Blood Donation</h4>
                <p className="mt-2 text-charcoal">Periodic health and blood donation drives to support community well-being.</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Gallery removed per request; images are embedded in content boxes above */}
    </div>
  )
}
