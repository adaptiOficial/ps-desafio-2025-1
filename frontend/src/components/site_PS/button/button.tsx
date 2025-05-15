'use client'

import style from './style.module.css'

export default function Button({ onClick }: { onClick: () => void }) {
  return (
    <button className={style.buy_button} type="button" onClick={onClick}>
      Comprar
    </button>
  )
}
