import React from "react";
import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'
import { useLocation } from 'react-router-dom'

function MoviesCardList(props){

  const location = useLocation();

  const[buttonElse, setButtonElse] = React.useState(false);

  React.useEffect(() => {
    if(location.pathname === '/saved-movies'){
      setButtonElse(true)
    }
  }, []);

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
      <button className={`${buttonElse ? "movies-list__button none" : "movies-list__button"}`}>Ещё</button>
    </section>
  )
}

export default MoviesCardList;