/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

function SavedMovies({
  isLoading, handleDeleteMovie, handleFilterMovies, searchFilm, errorSearch,
  handleFilterMoviesType, typeFilmFilter, width, displayMoviesList, isSavedFilm, moviesMessage,
  filterMovies, savedMovies,
}) {
  return (
    <section className="saved-movies">
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
            handleDeleteMovie={handleDeleteMovie}
            isSavedFilm={isSavedFilm}
            searchFilm={searchFilm}
            moviesMessage={moviesMessage}
          />
        )
      }
      {
        (savedMovies.length === 0 && !moviesMessage) ? <p className="saved-movies__message">У вас нет сохраненных фильмов</p> : ''
      }
    </section>
  );
}

export default SavedMovies;
