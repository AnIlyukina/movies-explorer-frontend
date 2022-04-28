/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unreachable */
/* eslint-disable class-methods-use-this */
import { BASE_URL } from './config';

class MainApi {
  constructor(option) {
    this._baseUrl = option.baseUrl;
    this._headers = option.headers;
  }

  _getServerResponse(response) {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(response);
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      credentials: 'include',
      headers: this._headers,
    })
      .then(this._getServerResponse);
  }

  updateUserInfo(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify(data),
    })
      .then(this._getServerResponse);
  }

  saveMovie(movie) {
    const savedMovie = {
      movieId: movie.id,
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: `https://api.nomoreparties.co/${movie.image.url}`,
      trailerLink: movie.trailerLink,
      thumbnail: `https://api.nomoreparties.co/${movie.image.formats.thumbnail.url}`,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
    };

    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(savedMovie),
    })
      .then(this._getServerResponse);
  }

  deleteMovie(movieId) {
    return fetch(`${this._baseUrl}/movies/${movieId}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: this._headers,
    })
      .then(this._getServerResponse);
  }

  getSavedMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      credentials: 'include',
      headers: this._headers,
    })
      .then(this._getServerResponse);
  }

  register(name, email, password) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({ name, email, password }),
    })
      .then(this._getServerResponse);
  }

  authorize(email, password) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({ email, password }),
    })
      .then(this._getServerResponse);
  }

  getAuthStatus() {
    return fetch(`${this._baseUrl}/users/me`, {
      credentials: 'include',
      headers: this._headers,
    })
      .then(this._getServerResponse);
  }

  logout() {
    return fetch(`${this._baseUrl}/logout`, {
      method: 'POST',
      credentials: 'include',
      headers: this._headers,
    }).then(this._getServerResponse);
  }
}

const api = new MainApi({
  baseUrl: BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default api;
