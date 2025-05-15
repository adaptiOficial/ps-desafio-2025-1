'use client'

import style from './style.module.css'

interface ButtonProps {
  onClick: () => void
  children?: React.ReactNode
}

export default function Button({ onClick, children }: ButtonProps) {
  return (
    <button className={style.buy_button} type="button" onClick={onClick}>
      {children || 'Comprar'}
    </button>
  )
}
