'use client'

import style from './style.module.css'
interface navbarProps {
  logo: string
}

export default function Navbar({ logo }: navbarProps) {
  return (
    <nav className={style.navbar}>
      <div className={style.navbar_nav}>
        <ul className={style.navbar_links}>
          <li className={style.navbar_item}>
            <a href="">Novidades</a>
          </li>
          <li className={style.navbar_item}>
            <a href="">Categorias</a>
          </li>
          <li className={style.navbar_item}>
            <a href="#">
              <img className={style.logo} src={logo} alt="Logo" />
            </a>
          </li>
          <li className={style.navbar_item}>
            <a href="">Parceiros</a>
          </li>
          <li className={style.navbar_item}>
            <a href="">Sobre nós</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
