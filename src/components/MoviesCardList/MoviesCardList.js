/* eslint-disable react/button-has-type */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './MoviesCardList.css';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {
  const location = useLocation();
  const [buttonElse, setButtonElse] = React.useState(false);

  React.useEffect(() => {
    if (location.pathname === '/saved-movies') {
      setButtonElse(true);
    }
  }, [location.pathname]);

  return (
    <section className="movies-list">
      <ul className="movies-list__grid">
        {props.movies.map((movie) => (
          <MoviesCard
            key={movie.id}
            movie={movie}
          />
        ))}
      </ul>
      <button className={`${buttonElse ? 'movies-list__button none' : 'movies-list__button'}`}>Ещё</button>
    </section>
  );
}

export default MoviesCardList;
