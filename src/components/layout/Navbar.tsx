import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../../assets/mkf-logo.png'

export default function Navbar(){
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    // If not on the home page, use solid navbar (scrolled look)
    if(location.pathname !== '/'){
      setScrolled(true)
      return
    }
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [location])

  const links = [
    ['/', 'Home'],
    ['/about', 'About'],
    ['/manufacturing', 'Manufacturing'],
    ['/products', 'Products'],
    ['/sustainability', 'Sustainability'],
    ['/global-presence', 'Global Presence'],
    ['/certifications', 'Certifications'],
    ['/contact', 'Contact']
  ]

  const navBg = scrolled ? 'bg-teal-deep shadow-md' : 'bg-navy-deep/70 backdrop-blur-sm border-b border-white/10'

  return (
    <nav className={`fixed w-full z-40 transition-all duration-300 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Maham Knit Fashions logo" className="h-10" />
          <span className="font-montserrat font-bold text-lg text-white">MAHAM KNIT FASHIONS</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {links.slice(0,7).map(([to, label]) => (
            <NavLink key={to} to={to as string} className={({isActive}) => isActive ? 'border-b-2 border-brand-green pb-1 text-white' : 'text-white'}>{label}</NavLink>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link to="/contact" className="bg-brand-green text-white rounded-full px-4 py-2">Get a Quote</Link>
        </div>

        <div className="md:hidden">
          <button aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(v=>!v)} className="p-2 bg-teal-deep rounded text-white">
            <span className="sr-only">{open ? 'Close' : 'Open'} menu</span>
            {open ? '✕' : '≡'}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.aside initial={{x:300, opacity:0}} animate={{x:0, opacity:1}} exit={{x:300, opacity:0}} transition={{type:'spring', stiffness:300}} className="fixed top-0 right-0 h-full w-full sm:w-80 bg-white shadow-lg z-50">
            <div className="p-6 flex flex-col h-full">
              <div className="flex items-center justify-between mb-6">
                <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-3">
                  <img src={logo} alt="logo" className="h-8" />
                  <span className="font-semibold">MAHAM KNIT FASHIONS</span>
                </Link>
                <button aria-label="Close menu" onClick={() => setOpen(false)} className="p-2">✕</button>
              </div>

              <nav className="flex-1">
                <ul className="flex flex-col gap-4">
                  {links.map(([to, label]) => (
                    <li key={to}>
                      <Link to={to as string} onClick={() => setOpen(false)} className="block text-lg">{label}</Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="mt-6">
                <Link to="/contact" onClick={() => setOpen(false)} className="block bg-brand-green text-white text-center px-4 py-3 rounded">Contact Us</Link>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </nav>
  )
}
