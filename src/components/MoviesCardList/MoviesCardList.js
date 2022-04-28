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
import {
  ADDED_CARD_COUNT_DESCTOP, RENDERED_CARD_COUNT_DESCTOP,
  ADDED_CARD_COUNT_TABLET, RENDERED_CARD_COUNT_TABLET,
  ADDED_CARD_COUNT_MOBILE, RENDERED_CARD_COUNT_MOBILE,
} from '../../utils/config';

function MoviesCardList(props) {
  const location = useLocation();

  const [renderedCardsCount, setRenderedCardsCount] = React.useState(12);
  const [addedCardsCount, setAddedCardsCount] = React.useState(0);

  function cardsCount() {
    if (props.width >= 1100) {
      setRenderedCardsCount(RENDERED_CARD_COUNT_DESCTOP);
      setAddedCardsCount(ADDED_CARD_COUNT_DESCTOP);
    } else if (props.width < 1200 && props.width > 600) {
      setRenderedCardsCount(RENDERED_CARD_COUNT_TABLET);
      setAddedCardsCount(ADDED_CARD_COUNT_TABLET);
    } else {
      setRenderedCardsCount(RENDERED_CARD_COUNT_MOBILE);
      setAddedCardsCount(ADDED_CARD_COUNT_MOBILE);
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
                saved={props.isSavedFilm(movie.id ? movie.id : movie.movieId)}
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
        (props.moviesMessage) ? <p>{props.moviesMessage}</p> : ''
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
