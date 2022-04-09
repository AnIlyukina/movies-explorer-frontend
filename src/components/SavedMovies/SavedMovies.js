import React from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies(props) {
  return (
    <section className="saved-movies">
      <SearchForm />
      <MoviesCardList
        // eslint-disable-next-line react/destructuring-assignment
        moviesCard={props.moviesCard}
      />
    </section>
  );
}

export default SavedMovies;
