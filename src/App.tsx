import React, { Suspense } from 'react'
import { Routes, Route, useLocation, Link } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/layout/ScrollToTop'
import BackToTop from './components/layout/BackToTop'

const Home = React.lazy(() => import('./pages/Home'))
const About = React.lazy(() => import('./pages/About'))
const Manufacturing = React.lazy(() => import('./pages/Manufacturing'))
const Products = React.lazy(() => import('./pages/Products'))
const Sustainability = React.lazy(() => import('./pages/Sustainability'))
const GlobalPresence = React.lazy(() => import('./pages/GlobalPresence'))
const Certifications = React.lazy(() => import('./pages/Certifications'))
const Contact = React.lazy(() => import('./pages/Contact'))
const NotFound = React.lazy(() => import('./pages/NotFound'))

export default function App(){
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <ScrollToTop />
      <main className={`flex-grow ${isHomePage ? 'pt-0' : 'pt-20'}`}>
        <AnimatePresence mode="wait">
          <Suspense fallback={<div className="p-8">Loading...</div>}>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/manufacturing" element={<Manufacturing/>} />
              <Route path="/products" element={<Products/>} />
              <Route path="/sustainability" element={<Sustainability/>} />
              <Route path="/global-presence" element={<GlobalPresence/>} />
              <Route path="/certifications" element={<Certifications/>} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="*" element={<NotFound/>} />
            </Routes>
          </Suspense>
        </AnimatePresence>
      </main>
      <BackToTop />
      <Footer />
    </div>
  )
}
