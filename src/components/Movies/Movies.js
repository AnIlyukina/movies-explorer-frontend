/* eslint-disable import/no-named-as-default */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

function Movies({
  isLoading, handleSaveMovie, handleFilterMovies, displayMoviesList, searchFilm,
  handleFilterMoviesType, typeFilmFilter, width, isSavedFilm, filterMovies,
}) {
  return (
    <section className="movies">
      <SearchForm
        handleFilterMovies={handleFilterMovies}
        handleFilterMoviesType={handleFilterMoviesType}
        typeFilmFilter={typeFilmFilter}
        searchFilm={searchFilm}
        filterMovies={filterMovies}
      />
      {
        isLoading ? <Preloader /> : (
          <MoviesCardList
            movies={displayMoviesList}
            width={width}
            handleSaveMovie={handleSaveMovie}
            isSavedFilm={isSavedFilm}
            searchFilm={searchFilm}
          />
        )
      }
    </section>
  );
}

export default Movies;
