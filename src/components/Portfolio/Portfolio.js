import React from "react";
import './Portfolio.css'

function Portfolio(){
  return(
    <section className="portfolio">
      Портфолио
      <ul className="portfolio__list">
        <li className="portfolio__list-item">
          <a
            href=""
            target="_blank"
            className="portfolio__link"
            
          >
            Статичный сайт
            <button className="portfolio__button"></button>
          </a>
        </li>
        <li className="portfolio__list-item">
          <a
            href="https://anilyukina.github.io/russian-travel/"
            target="_blank"
            className="portfolio__link"
          >
            Адаптивный сайт
            <button className="portfolio__button"></button>
          </a>
        </li>
        <li className="portfolio__list-item">
          <a
            href="https://ilyukina.nomoredomains.work"
            target="_blank"
            className="portfolio__link"
          >
            Одностраничное приложение
            <button className="portfolio__button"></button>
          </a>
        </li>
      </ul>
    </section>
  )
}

export default Portfolio