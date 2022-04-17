/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-console */
import './App.css';
import React from 'react';
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

  const [loggedIn, setLoggedIn] = React.useState(false);

  const [isLoading, setIsLoading] = React.useState(false);

  const [currentUser, setCurrentUser] = React.useState({});

  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = React.useState(false);
  const [messageInfoTooltip, setMessageInfoTooltip] = React.useState('');

  const [movies, setMovies] = React.useState([]);

  function handleSubmitLogin(login, password) {
    setIsLoading(true);
    api
      .authorize(login, password)
      .then((res) => {
        console.log(res);
        setLoggedIn(true);
        history.push('/movies');
        setIsInfoTooltipOpen(true);
        setMessageInfoTooltip('Вы успешно вошли в аккаунт');
      })
      .catch((err) => {
        setMessageInfoTooltip(err.message);
        setIsInfoTooltipOpen(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleSubmitRegister(name, email, password) {
    setIsLoading(true);
    api
      .register(name, email, password)
      .then((res) => {
        console.log(res);
        setIsInfoTooltipOpen(true);
        setMessageInfoTooltip('Вы успешно зарегистрированлись');
      })
      .then(() => {
        handleSubmitLogin(email, password);
      })
      .catch((err) => {
        console.log('cxv');
        setMessageInfoTooltip(err.message);
        setIsInfoTooltipOpen(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function signOut() {
    localStorage.removeItem('jwt');
    history.push('/sign-in');
    setLoggedIn(false);
    localStorage.clear();
  }

  function closeAllPopups() {
    setIsInfoTooltipOpen(false);
  }

  function handleUpdateUser(user) {
    setIsLoading(true);
    api
      .saveUserData(user)
      .then((newUserInfo) => {
        setCurrentUser(newUserInfo);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  React.useEffect(() => {
    getMovies();
    console.log(movies);
  }, []);

  function сheckToken() {
    React.useCallback(() => {
      api
        .getAuthStatus().then((res) => {
          if (res) {
            setLoggedIn(true);
          }
        }).catch(() => {
          setLoggedIn(false);
        });
    }, [history]);
  }

  React.useEffect(() => {
    сheckToken();
    if (loggedIn) {
      setIsLoading(true);
      Promise.all([api.getUserInfo(), getAllMovies()])
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          setMessageInfoTooltip(err.message);
          setIsInfoTooltipOpen(true);
        })
        .finally(() => setIsLoading(false));
    }
  }, [loggedIn]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="body">

        <Route exact path={['/', '/movies', '/saved-movies', '/profile']}>
          <Header
            loggedIn={loggedIn}
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
            movies={movies}
            isLoading={isLoading}
            loggedIn={loggedIn}

          />

          <ProtectedRoute
            exact
            path="/saved-movies"
            component={SavedMovies}
            movies={movies}
            isLoading={isLoading}
            loggedIn={loggedIn}
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
          onClose={closeAllPopups}
        />

        <Route exact path={['/', '/movies', '/saved-movies']}>
          <Footer />
        </Route>

      </div>

    </CurrentUserContext.Provider>
  );
}

export default withRouter(App);
