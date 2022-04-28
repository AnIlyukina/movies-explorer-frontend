/* eslint-disable import/named */
import { MOVIES_API } from './config';

const getServerResponse = (response) => {
  if (response.ok) {
    return response.json();
  }
  return Promise.reject(new Error(`Ошибка: ${response.status}`));
};

export const getAllMovies = () => fetch(MOVIES_API, {
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then((res) => getServerResponse(res));

export default getAllMovies;
