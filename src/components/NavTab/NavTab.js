/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import './NavTab.css'

function NavTab(){
  return(
    <nav className="navigation">
      <div className="navigation__links">
      <a className="navigation__link">О проекте</a>
      <a className="navigation__link">Технологии</a>
      <a className="navigation__link">Студент</a>
      </div>
    </nav>
  )
}

export default NavTab