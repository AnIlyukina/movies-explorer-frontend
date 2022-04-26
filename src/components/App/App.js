/* eslint-disable no-unused-expressions */
/* eslint-disable no-param-reassign */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-console */
import './App.css';
import React, { useCallback, useEffect, useState } from 'react';
import {
  Route, Switch, withRouter, useHistory,
} from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import Main from '../Main/Main';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import { getAllMovies } from '../../utils/MoviesApi';
import api from '../../utils/MainApi';

function App() {
  const history = useHistory();

  const [loggedIn, setLoggedIn] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const [currentUser, setCurrentUser] = useState({});

  const [searchFilter, setSearchFilter] = useState('');

  const [typeFilmFilter, setTypeFilmFilter] = useState(0);

  const [moviesMessage, setMoviesMessage] = useState('');

  const [searchFilterSavedMovies, setSearchFilterSavedMovies] = useState('');

  const [typeFilmFilterSavedMovies, setTypeFilmFilterSavedMovies] = useState(0);

  const [displayMoviesListSaved, setDisplayMoviesListSaved] = React.useState([]);

  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);

  const [isErrorStatus, setIsErrorStatus] = useState(false);

  const [messageInfoTooltip, setMessageInfoTooltip] = useState('');

  const [movies, setMovies] = React.useState([]);

  const [savedMovies, setSavedMovies] = React.useState([]);

  const [width, setWidth] = React.useState(window.innerWidth);

  const [displayMoviesList, setDisplayMoviesList] = React.useState([]);

  function saveToLocalStorage(films, savedMoviesSaving = false) {
    const paramsToSave = {
      movies: films,
      searchFilter: savedMoviesSaving ? searchFilterSavedMovies : searchFilter,
      typeFilmFilter: savedMoviesSaving ? typeFilmFilterSavedMovies : typeFilmFilter,
    };
    localStorage.setItem(savedMoviesSaving ? 'savedMovies' : 'movies', JSON.stringify(paramsToSave));
  }

  function filterSaveMovies() {
    let filtered = [];
    if (searchFilterSavedMovies) {
      filtered = savedMovies.filter((m) => m.nameRU.toLowerCase()
        .includes(searchFilterSavedMovies.toLowerCase())
        && (typeFilmFilterSavedMovies ? m.duration <= 40 : m.duration > 40));
    } else {
      filtered = savedMovies.filter((m) => (typeFilmFilterSavedMovies
        ? m.duration <= 40 : m.duration > 40));
    }
    setDisplayMoviesListSaved(filtered);
    saveToLocalStorage(filtered, true);
    return displayMoviesList;
  }

  function filterMovies() {
    if (searchFilter) {
      const filtered = movies.filter((m) => m.nameRU.toLowerCase()
        .includes(searchFilter.toLowerCase())
        && (typeFilmFilter ? m.duration <= 40 : m.duration > 40));
      if (filtered.length === 0) {
        setMoviesMessage('По вашему запросу ничего не найдено');
      }
      setDisplayMoviesList(filtered);
      saveToLocalStorage(filtered);
      return displayMoviesList;
    }
    return [];
  }

  function isSavedFilm(id) {
    return savedMovies ? savedMovies.some((m) => m.movieId === id) : true;
  }

  function updateWidth() {
    setWidth(window.innerWidth);
  }

  React.useEffect(() => {
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  });

  function onCloseMessageInfo() {
    setTimeout(() => { setIsInfoTooltipOpen(false); }, 2000);
  }

  function handleSubmitLogin(login, password) {
    setIsLoading(true);
    api
      .authorize(login, password)
      .then((res) => {
        console.log(res);
        setLoggedIn(true);
        history.push('/movies');
        setIsInfoTooltipOpen(true);
        setIsErrorStatus(false);
        setMessageInfoTooltip('Добро пожаловать!!!');
        onCloseMessageInfo();
      })
      .catch((response) => {
        console.log(response);
        setMessageInfoTooltip('Не удалось войти в аккаунт');
        setIsErrorStatus(true);
        setIsInfoTooltipOpen(true);
        onCloseMessageInfo();
        setTimeout(() => { setIsInfoTooltipOpen(false); }, 2000);
      })
      .finally(() => {
        console.log('конец');
        setIsLoading(false);
      });
  }

  function handleSubmitRegister(name, email, password) {
    setIsLoading(true);
    api
      .register(name, email, password)
      .then(() => {
        setIsInfoTooltipOpen(true);
        setMessageInfoTooltip('Вы успешно зарегистрированлись');
        onCloseMessageInfo();
        setIsErrorStatus(false);
      })
      .then(() => {
        handleSubmitLogin(email, password);
      })
      .catch(() => {
        setMessageInfoTooltip('что-то пошло не так');
        setIsErrorStatus(true);
        setIsInfoTooltipOpen(true);
        onCloseMessageInfo();
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function signOut() {
    if (loggedIn) {
      setIsLoading(true);
      api.logout()
        .then(() => {
          setLoggedIn(false);
          setIsInfoTooltipOpen(true);
          setIsErrorStatus(false);
          setMessageInfoTooltip('До свидания!!! Будем ждать вас снова');
          onCloseMessageInfo();
          history.push('/');
        })
        .catch(() => {
          setMessageInfoTooltip('Произошла ошибка');
          setIsErrorStatus(true);
          setIsInfoTooltipOpen(true);
          onCloseMessageInfo();
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      history.push('/');
    }
  }

  function handleUpdateUser(userInfo) {
    setIsLoading(true);
    console.log(userInfo);
    api
      .updateUserInfo(userInfo)
      .then((newUserInfo) => {
        setCurrentUser(newUserInfo);
        setIsInfoTooltipOpen(true);
        setIsErrorStatus(false);
        setMessageInfoTooltip('Мы обновили ваши данные');
        onCloseMessageInfo();
      })
      .catch(() => {
        setMessageInfoTooltip('Не удалось обновить данные');
        setIsInfoTooltipOpen(true);
        setIsErrorStatus(true);
        onCloseMessageInfo();
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  const checkToken = useCallback(() => {
    api
      .getAuthStatus().then((res) => {
        if (res) {
          setLoggedIn(true);
        }
      }).catch(() => {
        setLoggedIn(false);
      });
  }, [history]);

  async function getMovies() {
    const allMovies = await getAllMovies();
    setMovies(allMovies);
    return allMovies;
  }

  async function getSavedMovies() {
    const allSavedMovies = await api.getSavedMovies();
    setSavedMovies(allSavedMovies);
    return allSavedMovies;
  }

  function handleDeleteMovie(movie) {
    const deletedMovie = savedMovies
      .find((item) => (item.movieId === movie.movieId ? movie.movieId : movie.id));
    api
      .deleteMovie(deletedMovie._id)
      .then(() => {
        const newSavedMoviesList = savedMovies
          .filter((film) => film.movieId !== deletedMovie.movieId);
        console.log(newSavedMoviesList);

        const newSavedMoviesListDisplay = displayMoviesListSaved
          .filter((film) => film.movieId !== deletedMovie.movieId);
        setDisplayMoviesListSaved(newSavedMoviesListDisplay);
      })
      .catch((err) => {
        (console.log(err));
      });
  }

  function handleSaveMovie(movie) {
    if (savedMovies.find((savedMovie) => savedMovie.movieId === movie.id)) {
      console.log('d');
      handleDeleteMovie(movie);
    } else {
      api
        .saveMovie(movie)
        .then(() => {
          getSavedMovies();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  useEffect(async () => {
    checkToken();
    if (loggedIn) {
      setIsLoading(true);
      try {
        const user = await api.getUserInfo();
        const allMovies = await getMovies();
        const allSavedMovies = await getSavedMovies();

        setCurrentUser(user);
        setIsInfoTooltipOpen(true);
        setIsErrorStatus(false);
        setMessageInfoTooltip('Добро пожаловать !!! :)');
        onCloseMessageInfo();

        console.log(allMovies);
        console.log(allSavedMovies);

        setMovies(allMovies);
        setSavedMovies(allSavedMovies);

        if (localStorage.getItem('movies')) {
          const saved = JSON.parse(localStorage.getItem('movies'));
          setDisplayMoviesList(saved.movies);
          setSearchFilter(saved.searchFilter);
          setTypeFilmFilter(saved.typeFilmFilter);
        }
        if (localStorage.getItem('savedMovies')) {
          const saved = JSON.parse(localStorage.getItem('savedMovies'));
          setDisplayMoviesListSaved(saved.movies);
          setSearchFilterSavedMovies(saved.searchFilter);
          setTypeFilmFilterSavedMovies(saved.typeFilmFilter);
        } else {
          setDisplayMoviesListSaved(allSavedMovies);
        }

        history.push('/movies');
      } catch (ex) {
        setMessageInfoTooltip('Вы не акторизованы :(');
        setIsInfoTooltipOpen(true);
        setIsErrorStatus(true);
        onCloseMessageInfo();
      } finally {
        setIsLoading(false);
      }
      //   Promise.all([api.getUserInfo(), getMovies(), getSavedMovies()])
      //     .then(([user]) => {
      //       setCurrentUser(user);
      //       setIsInfoTooltipOpen(true);
      //       setIsErrorStatus(false);
      //       setMessageInfoTooltip('Добро пожаловать !!! :)');
      //       onCloseMessageInfo();

      //       if (localStorage.getItem('movies')) {
      //         const saved = JSON.parse(localStorage.getItem('movies'));
      //         setDisplayMoviesList(saved.movies);
      //         setSearchFilter(saved.searchFilter);
      //         setTypeFilmFilter(saved.typeFilmFilter);
      //       }
      //       if (localStorage.getItem('savedMovies')) {
      //         const saved = JSON.parse(localStorage.getItem('savedMovies'));
      //         setDisplayMoviesListSaved(saved.movies);
      //         setSearchFilterSavedMovies(saved.searchFilter);
      //         setTypeFilmFilterSavedMovies(saved.typeFilmFilter);
      //       } else {
      //         setDisplayMoviesListSaved(savedMovies);
      //       }

      //       history.push('/movies');
      //     })
      //     .catch(() => {
      //       setMessageInfoTooltip('Вы не акторизованы :(');
      //       setIsInfoTooltipOpen(true);
      //       setIsErrorStatus(true);
      //       onCloseMessageInfo();
      //     })
      //     .finally(() => setIsLoading(false));
    }
  }, [loggedIn]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="body">

        <Route exact path={['/', '/movies', '/saved-movies', '/profile']}>
          <Header
            loggedIn={loggedIn}
            width={width}
            signOut={signOut}
          />
        </Route>

        <Switch>

          <Route exact path="/">
            <Main />
          </Route>

          <Route path="/sign-up">
            <Register
              handleSubmitRegister={handleSubmitRegister}
              isLoading={isLoading}
            />
          </Route>

          <ProtectedRoute
            exact
            path="/movies"
            component={Movies}
            isLoading={isLoading}
            loggedIn={loggedIn}
            width={width}
            displayMoviesList={displayMoviesList}
            handleSaveMovie={handleSaveMovie}
            handleFilterMovies={setSearchFilter}
            handleFilterMoviesType={setTypeFilmFilter}
            typeFilmFilter={typeFilmFilter}
            isSavedFilm={isSavedFilm}
            searchFilm={searchFilter}
            filterMovies={filterMovies}
            moviesMessage={moviesMessage}
          />

          <ProtectedRoute
            exact
            path="/saved-movies"
            component={SavedMovies}
            width={width}
            isLoading={isLoading}
            loggedIn={loggedIn}
            displayMoviesList={displayMoviesListSaved}
            handleDeleteMovie={handleDeleteMovie}
            handleFilterMovies={setSearchFilterSavedMovies}
            typeFilmFilter={typeFilmFilterSavedMovies}
            handleFilterMoviesType={setTypeFilmFilterSavedMovies}
            isSavedFilm={isSavedFilm}
            searchFilm={searchFilterSavedMovies}
            filterMovies={filterSaveMovies}
          />

          <ProtectedRoute
            exact
            path="/profile"
            component={Profile}
            loggedIn={loggedIn}
            signOut={signOut}
            onUpdateUser={handleUpdateUser}
          />

          <Route path="/sign-in">
            <Login
              handleSubmitLogin={handleSubmitLogin}
              isLoading={isLoading}
            />
          </Route>
          <Route path="/*">
            <NotFound />
          </Route>

        </Switch>

        <InfoTooltip
          isOpen={isInfoTooltipOpen}
          messageInfoTooltip={messageInfoTooltip}
          isErrorStatus={isErrorStatus}
        />

        <Route exact path={['/', '/movies', '/saved-movies']}>
          <Footer />
        </Route>

      </div>

    </CurrentUserContext.Provider>
  );
}

export default withRouter(App);
