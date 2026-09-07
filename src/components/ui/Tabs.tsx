import React, { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'

export type TabItem = { id: string; title: string; content: React.ReactNode }

export default function Tabs({tabs}:{tabs:TabItem[]}){
  const [active, setActive] = useState(tabs[0]?.id || '')
  const activeTab = tabs.find(t => t.id === active) || tabs[0]
  const reduce = useReducedMotion()

  return (
    <div>
      <div className="overflow-x-auto">
        <div className="flex gap-3 px-2">
          {tabs.map(tab => (
            <div key={tab.id} className="relative">
              <button onClick={() => setActive(tab.id)} className={`py-2 px-4 rounded-full ${active===tab.id ? 'bg-white text-navy-ink' : 'bg-white/60 text-charcoal'} focus:outline-none`}>
                {tab.title}
              </button>
              {active===tab.id && (
                <motion.div layoutId="tab-underline" className="absolute -bottom-2 left-2 right-2 h-1 bg-brand-green rounded" />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <AnimatePresence mode="wait">
          <motion.div key={activeTab.id} initial={reduce ? {opacity:1,y:0} : {opacity:0, y:12}} animate={{opacity:1,y:0}} exit={reduce ? {opacity:1,y:0} : {opacity:0,y:-8}} transition={{duration: reduce ? 0 : 0.25}}>
            {activeTab.content}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
