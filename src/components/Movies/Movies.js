/* eslint-disable import/no-named-as-default */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

function Movies({
  isLoading, handleSaveMovie, handleFilterMovies, displayMoviesList, searchFilm, errorSearch,
  handleFilterMoviesType, typeFilmFilter, width, moviesMessage, isSavedFilm, filterMovies,
}) {
  return (
    <section className="movies">
      <SearchForm
        handleFilterMovies={handleFilterMovies}
        handleFilterMoviesType={handleFilterMoviesType}
        typeFilmFilter={typeFilmFilter}
        searchFilm={searchFilm}
        filterMovies={filterMovies}
        errorSearch={errorSearch}
      />
      {
        isLoading ? <Preloader /> : (
          <MoviesCardList
            movies={displayMoviesList}
            width={width}
            handleSaveMovie={handleSaveMovie}
            isSavedFilm={isSavedFilm}
            searchFilm={searchFilm}
            moviesMessage={moviesMessage}
          />
        )
      }
    </section>
  );
}

export default Movies;
