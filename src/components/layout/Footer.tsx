import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/mkf-logo.png'

export default function Footer(){
  const year = new Date().getFullYear()
  return (
    <footer className="bg-navy-deep text-white mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <img src={logo} alt="Maham Knit Fashions logo" className="h-12 mb-3" />
          <p className="text-sm">MAHAM KNIT FASHIONS<br/>No.6, Bhuvaneswari Nagar, Mangalam Road, Andipalayam (PO), Tirupur – 641687, Tamil Nadu, India</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="text-sm space-y-1">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/manufacturing">Manufacturing</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <p className="text-sm">Email: ragu.r@maham.co.in<br/>Phone: +91 9360062006<br/>Website: www.maham.co.in</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Certifications</h4>
          <div className="flex gap-2">
            <Link to="/certifications" className="text-sm bg-white/10 px-3 py-2 rounded">View</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 text-center py-4 text-sm">© {year} Maham Knit Fashions. All rights reserved.</div>
    </footer>
  )
}
