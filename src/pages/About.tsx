import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function About(){
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <Helmet>
        <title>About Maham Knit Fashions</title>
        <meta name="description" content="About Maham Knit Fashions — vision, mission, core commitments and company profile." />
      </Helmet>

      <header className="mb-10 space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">Who we are</p>
        <h1 className="text-3xl md:text-5xl font-semibold text-slate-900 leading-tight">About Maham Knit Fashions</h1>
        <p className="max-w-4xl text-lg text-slate-700 leading-8">
          Maham Knit Fashions is a growth-focused apparel manufacturing and sourcing company committed to delivering dependable quality, ethical production, and customer-first service across global markets. Our strength lies in combining disciplined manufacturing practices with a sharp understanding of design, trend, and market demand.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-3 mb-10">
        <article className="rounded-2xl bg-white p-7 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-semibold mb-4 text-slate-900">Vision</h2>
          <p className="text-slate-700 leading-7">
            To be a globally recognized leader in textile and apparel manufacturing, known for innovation, quality, and responsible business practices that create long-term value for customers, employees, and communities.
          </p>
        </article>

        <article className="rounded-2xl bg-white p-7 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-semibold mb-4 text-slate-900">Mission</h2>
          <p className="text-slate-700 leading-7">
            To produce world-class apparel solutions by integrating advanced technology, transparent supply chain management, and sustainable operations—while meeting delivery commitments and exceeding customer expectations at every stage.
          </p>
        </article>

        <article className="rounded-2xl bg-white p-7 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-semibold mb-4 text-slate-900">Our Approach</h2>
          <p className="text-slate-700 leading-7">
            We combine product understanding, operational discipline, and ethical accountability to build reliable manufacturing partnerships that support consistent quality, on-time performance, and sustainable growth.
          </p>
        </article>
      </section>

      <section className="bg-[#f4efe7] rounded-3xl p-7 md:p-9 shadow-sm border border-[#e8e1d5]">
        <div className="mb-6">
          <h2 className="text-3xl font-semibold text-slate-900">Company Profile & Operational Data</h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_1.4fr]">
          <dl className="space-y-5 text-slate-800">
            <div className="pb-3 border-b border-slate-200">
              <dt className="text-sm uppercase tracking-[0.14em] text-slate-500 mb-1">Corporate Name</dt>
              <dd className="text-xl font-medium">Maham Knit Fashions (MKF)</dd>
            </div>

            <div className="pb-3 border-b border-slate-200">
              <dt className="text-sm uppercase tracking-[0.14em] text-slate-500 mb-1">Legal Constitution</dt>
              <dd className="text-xl font-medium">Proprietorship Firm</dd>
            </div>

            <div className="pb-3 border-b border-slate-200">
              <dt className="text-sm uppercase tracking-[0.14em] text-slate-500 mb-1">Operational Scope</dt>
              <dd className="text-xl font-medium">Manufacturing, Export, Import, Sourcing, Buying & Trading</dd>
            </div>

            <div>
              <dt className="text-sm uppercase tracking-[0.14em] text-slate-500 mb-1">Chief Executive</dt>
              <dd className="text-xl font-medium">R.V. AbinayaBharathi</dd>
            </div>
          </dl>

          <div className="space-y-5 text-slate-700 leading-8 text-lg">
            <p>
              MKF operates with a clear focus on manufacturing efficiency, product integrity, and partnership-led growth. Our business model is designed to support both large-scale production requirements and flexible sourcing solutions, giving customers dependable access to quality apparel and responsive service.
            </p>
            <p>
              From raw material coordination to finished goods delivery, we manage production with attention to detail, cost discipline, and compliance. This allows us to support a wide range of product categories while maintaining the standards expected by modern retail and export markets.
            </p>
            <p>
              Our commitment to ethical practices, continuous improvement, and customer satisfaction is the foundation of every partnership we build. We believe long-term success depends not only on output, but on trust, consistency, and the ability to adapt to evolving market needs.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
