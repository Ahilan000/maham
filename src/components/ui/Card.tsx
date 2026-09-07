import React from 'react'

type Props = React.HTMLAttributes<HTMLDivElement>
export default function Card({children, className='', ...rest}: Props){
  return (
    <div className={`bg-white rounded-2xl shadow-lg p-6 transition-transform hover:-translate-y-1 hover:shadow-xl ${className}`} {...rest}>
      {children}
    </div>
  )
}
