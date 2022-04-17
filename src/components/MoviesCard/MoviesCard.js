/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/button-has-type */
import React from 'react';
import { useLocation } from 'react-router-dom';

import './MoviesCard.css';

function MoviesCard({ movie }) {
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
          {movie.nameRU}
        </p>
        <span className="movies-card__time">
          {movie.duration}
          {' '}
          минут
        </span>
      </div>
      <img
        className="movies-card__image"
        src={`https://api.nomoreparties.co${movie.image.url}`}
        alt="Постер фильма"
      />
      <button
        className={`${!movie.isSaved ? 'movies-card__button' : 'movies-card__button saved '}${isPathSavedMovies ? ' delete' : ''}`}
      >
        {`${!movie.isSaved && !isPathSavedMovies ? 'Сохранить' : ' '}`}
      </button>
    </li>
  );
}

export default MoviesCard;
