import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__content">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__info">
        <p className="footer__copyright">&copy; 2022</p>
        <ul className="footer__links">
          <li className="footer__links-item">
            <a
              className="footer__link"
              target="_blank"
              href="https://praktikum.yandex.ru/"
              rel="noreferrer"
            >
              Яндекс.Практикум
            </a>
          </li>
          <li className="footer__links-item">
            <a
              className="footer__link"
              target="_blank"
              href="https://github.com/AnIlyukina"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
          <li className="footer__links-item">
            <a
              className="footer__link"
              target="_blank"
              href="https://praktikum.yandex.ru/"
              rel="noreferrer"
            >
              Facebook
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
