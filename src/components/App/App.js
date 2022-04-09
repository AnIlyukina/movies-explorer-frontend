import './App.css';
import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Main from '../Main/Main';
import Register from '../Register/Register';
// import ProtectedRoute from "./ProtectedRoute";
import Login from '../Login/Login';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ImageFilm from '../../images/image__film.png';
import Profile from '../Profile/Profile';

const moviesCard = [
  {
    id: 1,
    duration: 27,
    image: ImageFilm,
    nameRU: 'В погоне за Бенкси',
  },
  {
    id: 2,
    duration: 27,
    image: ImageFilm,
    nameRU: 'В погоне за Бенкси',
  },
  {
    id: 3,
    duration: 27,
    image: ImageFilm,
    nameRU: 'В погоне за Бенкси',
  },
];

function App() {
  return (
    <div className="body">

      <Route exact path={['/', '/movies', '/saved-movies', '/profile']}>
        <Header />
      </Route>

      <Switch>

        <Route exact path="/">
          <Main />
        </Route>

        <Route path="/sign-up">
          <Register />
        </Route>

        <Route path="/movies">
          <Movies
            moviesCard={moviesCard}
          />
        </Route>

        <Route path="/sign-in">
          <Login />
        </Route>

        <Route path="/profile">
          <Profile />
        </Route>

        <Route path="/saved-movies">
          <SavedMovies
            moviesCard={moviesCard}
          />
        </Route>

      </Switch>

      <Route exact path={['/', '/movies', '/saved-movies']}>
        <Footer />
      </Route>

    </div>
  );
}

export default withRouter(App);
