/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies(props) {
  return (
    <section className="saved-movies">
      <SearchForm />
      <MoviesCardList
        moviesCard={props.moviesCard}
      />
    </section>
  );
}

export default SavedMovies;
