/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies(props) {
  return (
    <section className="movies">
      <SearchForm />
      <MoviesCardList
        movies={props.movies}
      />
    </section>
  );
}

export default Movies;
