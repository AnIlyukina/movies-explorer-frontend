import React from "react";
import './Movies.css'
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies(props){
  return(
    <section className="movies">
      <SearchForm/>
      <MoviesCardList
        moviesCard={props.moviesCard}
      />
    </section>
  )
}

export default Movies