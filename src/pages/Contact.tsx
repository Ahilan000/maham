import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import locationMap from '../assets/location.jpeg'

export default function Contact(){
  const [sent, setSent] = useState(false)
  const mapsUrl = 'http://google.com/maps/place/Maham+Knit+Fashions/@11.0906476,77.3188407,17.5z/data=!4m6!3m5!1s0x3ba9076de7ea4139:0xd56cde03779b5956!8m2!3d11.0906222!4d77.3195799!16s%2Fg%2F11dfh484yk?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D'

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <Helmet>
        <title>Contact — Maham Knit Fashions</title>
      </Helmet>
      <h1 className="text-3xl md:text-4xl font-semibold mb-6">Contact</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <form onSubmit={(e) => { e.preventDefault(); setSent(true) }} className="bg-white rounded-xl p-6 shadow">
          <label className="block mb-4">Name<input required className="w-full border border-gray-200 p-3 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-brand-green"/></label>
          <label className="block mb-4">Email<input required type="email" className="w-full border border-gray-200 p-3 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-brand-green"/></label>
          <label className="block mb-4">Company<input className="w-full border border-gray-200 p-3 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-brand-green"/></label>
          <label className="block mb-4">Message<textarea required className="w-full border border-gray-200 p-3 rounded mt-1 h-32 resize-y focus:outline-none focus:ring-2 focus:ring-brand-green"/></label>
          <button type="submit" className="bg-brand-green text-white px-5 py-2 rounded-md shadow-sm hover:shadow-md">Send Message</button>
          {sent && <p className="mt-3 text-brand-green">Thanks — your message was recorded (TODO: wire to real API)</p>}
        </form>

        <div className="bg-cream rounded-xl p-6 shadow">
          <h3 className="font-semibold">Contact Details</h3>
          <p className="mt-2">Email: ragu.r@maham.co.in</p>
          <p>Phone: +91 9360062006</p>
          <p className="mt-2">No.6, Bhuvaneswari Nagar, Mangalam Road, Andipalayam (PO), Tirupur – 641687, Tamil Nadu, India</p>
          <div className="mt-4">
            <a href={mapsUrl} target="_blank" rel="noreferrer" className="block overflow-hidden rounded-lg border border-teal-500 shadow-sm hover:opacity-95 transition-opacity">
              <img src={locationMap} alt="Maham Knit Fashions location map" className="h-52 w-full object-cover" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
