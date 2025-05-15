'use client'

import { useEffect, useState } from 'react'
import style from './style.module.css'
import { getSession } from 'next-auth/react'
import { useToast } from '@/components/use-toast'
interface navbarProps {
  logo: string
}

export default function Navbar({ logo }: navbarProps) {
  const [isAuth, setIsAuth] = useState<boolean>(false)
  const { toast } = useToast()

  useEffect(() => {
    const requestDataSession = async () => {
      const sessionResponse = await getSession()

      if (sessionResponse) {
        setIsAuth(!!sessionResponse.user)
      } else {
        toast({
          title: 'Você não está logado',
        })
      }
    }
    requestDataSession()
  }, [toast])

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
            <a href="">Sobre nós</a>
          </li>
          <li className={style.navbar_item}>
            <a href="/admin">
              {isAuth ? 'Acessar aba de admin' : 'Acesso restrito'}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
