import React, { useEffect, useRef, useState } from 'react'

export default function StatCounter({value, label}:{value:number,label:string}){
  const [n, setN] = useState(0)
  const ref = useRef<HTMLDivElement|null>(null)
  useEffect(() => {
    let started = false
    const obs = new IntersectionObserver(entries => {
      entries.forEach(ent => {
        if(ent.isIntersecting && !started){
          started = true
          let i = 0
          const step = Math.max(1, Math.floor(value/60))
          const t = setInterval(()=>{
            i += step
            if(i >= value){ setN(value); clearInterval(t) } else setN(i)
          }, 16)
        }
      })
    }, {threshold:0.3})
    if(ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [value])
  return (
    <div ref={ref} className="text-center" role="group" aria-label={`${label}: ${value.toLocaleString()}`}>
      <div className="text-2xl font-bold text-brand-green" aria-hidden="true">{n.toLocaleString()}</div>
      <div className="text-sm text-charcoal" role="status" aria-live="polite">{label}</div>
    </div>
  )
}
