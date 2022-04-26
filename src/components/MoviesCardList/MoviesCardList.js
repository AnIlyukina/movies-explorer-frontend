/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
/* eslint-disable max-len */
/* eslint-disable react/button-has-type */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './MoviesCardList.css';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {
  const location = useLocation();

  const [renderedCardsCount, setRenderedCardsCount] = React.useState(12);
  const [addedCardsCount, setAddedCardsCount] = React.useState(0);

  function cardsCount() {
    if (props.width >= 1100) {
      setRenderedCardsCount(12);
      setAddedCardsCount(3);
    } else if (props.width < 1200 && props.width > 600) {
      setRenderedCardsCount(8);
      setAddedCardsCount(2);
    } else {
      setRenderedCardsCount(5);
      setAddedCardsCount(2);
    }
  }

  React.useEffect(() => {
    cardsCount();
  }, [props.width]);

  function handleMoreClick() {
    let count = 0;
    count += 1;
    setRenderedCardsCount(renderedCardsCount + addedCardsCount * count);
  }

  return (
    <section className="movies-list">
      <ul className="movies-list__grid">
        {
          props.movies
            .slice(0, location.pathname === '/saved-movies' ? props.movies.length : renderedCardsCount)
            .map((movie) => (
              <MoviesCard
                saved={props.isSavedFilm(movie.id ? movie.id : movie.movieId)} // TODO удалить и посмотреть, так как фильтрация проходит в app 340
                key={movie.id ? movie.id : movie.movieId}
                movie={movie}
                handleSaveMovie={props.handleSaveMovie}
                handleDeleteMovie={props.handleDeleteMovie}
                location={location}
              />
            ))
        }
      </ul>
      {
        (props.moviesMessage && location.pathname === '/movies') ? <p>{props.moviesMessage}</p> : ''
      }
      {
        (renderedCardsCount < props.movies.length && location.pathname === '/movies')
        && (
          <button
            onClick={handleMoreClick}
            className="movies-list__button"
          >
            Ещё
          </button>
        )
      }
    </section>
  );
}

export default MoviesCardList;
