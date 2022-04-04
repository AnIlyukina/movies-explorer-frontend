import React from "react";
import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'

function MoviesCardList(props){
  return(
    <section className="movies-list">
      <ul className="movies-list__grid">
        {props.moviesCard.map((card) => (
          <MoviesCard
            key={card.id}
            moviesCard={card}
          />
        ))}
      </ul>
      <button className="movies-list__button">Ещё</button>
    </section>
  )
}

export default MoviesCardList;