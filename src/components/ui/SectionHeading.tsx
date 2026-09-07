import React from 'react'

export default function SectionHeading({eyebrow, title, eyebrowClass='', className=''}:{eyebrow?:string,title:string,eyebrowClass?:string,className?:string}){
  return (
    <div className={`mb-6 ${className}`}>
      {eyebrow && <div className={`text-sm font-semibold uppercase text-brand-green ${eyebrowClass}`}>{eyebrow}</div>}
      <h2 className="text-2xl md:text-3xl font-semibold text-navy-ink mt-1">{title}</h2>
    </div>
  )
}
