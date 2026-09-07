import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'

export default function PageTransition({children}:{children:React.ReactNode}){
  const reduce = useReducedMotion()
  const initial = reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }
  const animate = { opacity: 1, y: 0 }
  const exit = reduce ? { opacity: 1 } : { opacity: 0 }

  return (
    <motion.div initial={initial} animate={animate} exit={exit} transition={{duration: reduce ? 0 : 0.4}}>
      {children}
    </motion.div>
  )
}
