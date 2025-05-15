'use client'

import style from './style.module.css'

interface ButtonProps {
  onClick: () => void
  children?: React.ReactNode
  disabled: boolean
}

export default function Button({ onClick, children, disabled }: ButtonProps) {
  return (
    <button
      className={style.buy_button}
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      {children || 'Comprar'}
    </button>
  )
}
