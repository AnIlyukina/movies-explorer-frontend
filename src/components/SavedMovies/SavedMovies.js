/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

function SavedMovies({
  isLoading, handleDeleteMovie, handleFilterMovies, searchFilm,
  handleFilterMoviesType, typeFilmFilter, width, displayMoviesList, isSavedFilm,
}) {
  return (
    <section className="saved-movies">
      <SearchForm
        handleFilterMovies={handleFilterMovies}
        handleFilterMoviesType={handleFilterMoviesType}
        typeFilmFilter={typeFilmFilter}
        searchFilm={searchFilm}
      />
      {
        isLoading ? <Preloader /> : (
          <MoviesCardList
            movies={displayMoviesList}
            width={width}
            handleDeleteMovie={handleDeleteMovie}
            isSavedFilm={isSavedFilm}
            searchFilm={searchFilm}
          />
        )
      }
      {
        displayMoviesList.length === 0 ? <p className="saved-movies__message">У вас нет сохраненных фильмов</p> : ''
      }
    </section>
  );
}

export default SavedMovies;
