/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import './AboutMe.css'
import foto from "../../images/about-me__foto.jpeg";

function AboutMe(){
  return(
    <section className="about-me">
      <h2 className="about-me__title">
        Студент
      </h2>
      <div className="about-me__content">
        <img className='about-me__foto' src={foto}/>
        <div className='about-me__info'>
          <div>
            <div className='about-me__name'>
              Анна
            </div>
            <div className='about-me__profession'> 
              Фронтенд-разработчик, 23 года
            </div>
            <div className='about-me__text'>
              Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. 
              С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы. осле того, как прошёл курс 
            </div>
          </div>
          <div className='about-me__links'>
            <a className='about-me__link'>Facebook</a>
            <a className='about-me__link'>Github</a>
          </div>
        </div>
      </div>
      <div className="about-me__portfolio">
        Портфолио
        <ul className="about-me__portfolio-list">
          <li className="about-me__portfolio-list-item">
            <a>Статичный сайт</a>
            <button className="about-me__portfolio-button"></button>
          </li>
          <li className="about-me__portfolio-list-item">
            <a>Адаптивный сайт</a>
            <button className="about-me__portfolio-button"></button>
          </li>
          <li className="about-me__portfolio-list-item">
            <a>Одностраничное приложение</a>
            <button className="about-me__portfolio-button"></button>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default AboutMe