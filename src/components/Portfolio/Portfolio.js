/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      Портфолио
      <ul className="portfolio__list">
        <li className="portfolio__list-item">
          <a
            href="https://anilyukina.github.io/how-to-learn/"
            target="_blank"
            className="portfolio__link"
            rel="noreferrer"
          >
            Статичный сайт
            <button className="portfolio__button" />
          </a>
        </li>
        <li className="portfolio__list-item">
          <a
            href="https://anilyukina.github.io/russian-travel/"
            target="_blank"
            className="portfolio__link"
            rel="noreferrer"
          >
            Адаптивный сайт
            <button className="portfolio__button" />
          </a>
        </li>
        <li className="portfolio__list-item">
          <a
            href="https://ilyukina.nomoredomains.work"
            target="_blank"
            className="portfolio__link"
            rel="noreferrer"
          >
            Одностраничное приложение
            <button className="portfolio__button" />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
