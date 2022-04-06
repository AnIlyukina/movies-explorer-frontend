/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import './Footer.css'

function Footer(){
  return(
    <footer className='footer'>
      <div className='footer__content'>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </div>
      <div className='footer__info'>
        <p className="footer__copyright">&copy; 2022</p>
        <div className="footer__links">
          <a className="footer__link">Яндекс.Практикум</a>
          <a className="footer__link">Github</a>
          <a className="footer__link">Facebook</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer