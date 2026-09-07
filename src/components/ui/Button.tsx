import React from 'react'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'ghost' }
export default function Button({variant='primary', children, ...rest}: Props){
  const cls = variant === 'primary' ? 'bg-brand-green text-white rounded-full px-4 py-2 hover:scale-[1.03] focus:outline-none focus:ring-4 focus:ring-brand-green/30' : 'bg-white text-navy-ink px-3 py-1 rounded'
  return <button className={cls} {...rest}>{children}</button>
}
