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
              Родилась в небольшом поселке, где никто не знал о существовании интернета, сейчас живу в Иркутске. Успела поработать в теплоэнергетике и поучаствовать в производственных процессах. Сейчас полностью посвящаю все время програмированию. В свободное время люблю ходить в спорт зал, играю в настольный , большой теннис и собираю кубик-рубик :)
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