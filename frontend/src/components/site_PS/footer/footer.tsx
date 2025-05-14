'use client'

import style from './style.module.css'

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.footer_content}>
        <div className={style.contacts}>
          <h3>FRASE DE EFEITO</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui alias
            inventore distinctio vitae molestias rerum quaerat impedit
            reiciendis architecto non, sint placeat! Qui et nulla tempora
            officiis autem deserunt? Laboriosam.
          </p>
          <div className={style.social_media}>
            <a href="#" className="style.social_media_link" id="A">
              {/* colocar icone */}
            </a>
            <a href="#" className="style.social_media_link" id="B">
              {/* colocar icone */}
            </a>
            <a href="#" className="style.social_media_link" id="C">
              {/* colocar icone */}
            </a>
          </div>
          <div className={style.list}>
            <ul>
              <h3>Sobre nós</h3>
              <li>
                <a href="#" className={style.sobre_links}></a>
              </li>
              <li>
                <a href="#" className={style.sobre_links}></a>
              </li>
              <li>
                <a href="#" className={style.sobre_links}></a>
              </li>
            </ul>
            <ul>
              <h3>Mais paradas</h3>
              <li>
                <a href="#" className={style.sobre_links}></a>
              </li>
              <li>
                <a href="#" className={style.sobre_links}></a>
              </li>
              <li>
                <a href="#" className={style.sobre_links}></a>
              </li>
            </ul>
          </div>
          <div className={style.copywright}>
            <p>Texto de copywright...</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
