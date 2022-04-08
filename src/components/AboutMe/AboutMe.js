/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import './AboutMe.css'
import myFoto from "../../images/about-me__foto.jpeg";
import Portfolio from "../Portfolio/Portfolio";

function AboutMe(){
  return(
    <section className="about-me" id="aboutMe">
      <h2 className="about-me__title">
        Студент
      </h2>
      <div className="about-me__content">
        <img className='about-me__foto' src={myFoto} alt="my-foto"/>
        <div className='about-me__info'>
          <div>
            <div className='about-me__name'>
              Анна
            </div>
            <p className='about-me__profession'> 
              Фронтенд-разработчик, 23 года
            </p>
            <p className='about-me__text'>
              Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. 
              С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы. осле того, как прошёл курс 
            </p>
          </div>
          <div className='about-me__links'>
            <a 
              href=""
              target="_blank"
              className='about-me__link'
            >
              Facebook
            </a>
            <a 
              href="https://github.com/AnIlyukina"
              target="_blank"
              className='about-me__link'
            >
              Github
            </a>
          </div>
        </div>
      </div>
      <Portfolio/>
    </section>
  )
}

export default AboutMe