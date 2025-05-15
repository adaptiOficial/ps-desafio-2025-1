'use client'

import { FaFacebook, FaInstagram } from 'react-icons/fa'
import style from './style.module.css'

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.footer_content}>
        <div className={style.contacts}>
          <h2>SEU MONSTRO A UM CLIQUE DE VOCÊ!</h2>
          <p>
            Prepare-se para acelerar sua vida! Aqui você encontra os caminhões
            monstro mais insanos do mercado, prontos para encarar qualquer
            desafio! Explore nossa loja online e descubra máquinas gigantes,
            potência de verdade e muita adrenalina. Venha fazer parte da
            revolução dos monstros sobre rodas!
          </p>
          <div className={style.social_media}>
            <a href="#" className={style.social_media_link} id="Instagram">
              <FaInstagram />
            </a>
            <a href="#" className={style.social_media_link} id="Facebook">
              <FaFacebook />
            </a>
          </div>
        </div>
        <ul className={style.list}>
          <h3>Confira também</h3>
          <li>
            <a href="#" className={style.sobre_links}>
              MetalTires
            </a>
          </li>
          <li>
            <a
              href="https://www.monsterjam.com/pt-br/live-streaming/"
              className={style.sobre_links}
            >
              MonsterJam
            </a>
          </li>
          <li>
            <a href="#" className={style.sobre_links}>
              HellDrivers
            </a>
          </li>
        </ul>
        <div className={style.copyright}>
          <p>2025, METALIZADO Monster Trucks - Todos os direitos reservados</p>
        </div>
        <ul className={style.list}>
          <h3>Parcerias</h3>
          <li>
            <a href="https://chucknorris.com/" className={style.sobre_links}>
              Chuck Norris BRAND
            </a>
          </li>
          <li>
            <a href="#" className={style.sobre_links}>
              Redbull
            </a>
          </li>
          <li>
            <a href="#" className={style.sobre_links}>
              Old Spice
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
