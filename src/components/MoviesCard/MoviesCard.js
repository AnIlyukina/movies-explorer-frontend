/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/button-has-type */
import React from 'react';
import { useLocation } from 'react-router-dom';

import './MoviesCard.css';

function MoviesCard({ moviesCard }) {
  const location = useLocation();

  const [isPathSavedMovies, setIsPathSavedMovies] = React.useState(false);

  React.useEffect(() => {
    if (location.pathname === '/saved-movies') {
      setIsPathSavedMovies(true);
    }
  }, [location.pathname]);

  return (
    <li className="movies-card">
      <div className="movies-card__info">
        <p className="movies-card__name">
          {moviesCard.nameRU}
        </p>
        <span className="movies-card__time">
          {moviesCard.duration}
          {' '}
          минут
        </span>
      </div>
      <img
        className="movies-card__image"
        src={moviesCard.image}
        alt="Постер фильма"
      />
      <button
        className={`${!moviesCard.isSaved ? 'movies-card__button' : 'movies-card__button saved '}${isPathSavedMovies ? ' delete' : ''}`}
      >
        {`${!moviesCard.isSaved && !isPathSavedMovies ? 'Сохранить' : ' '}`}
      </button>
    </li>
  );
}

export default MoviesCard;
