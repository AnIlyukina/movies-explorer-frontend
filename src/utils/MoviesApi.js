const getServerResponse = (response) => {
  if (response.ok) {
    return response.json();
  }
  return Promise.reject(new Error(`Ошибка: ${response.status}`));
};

export const getAllMovies = () => fetch('https://api.nomoreparties.co/beatfilm-movies', {
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then((res) => getServerResponse(res));

export default getAllMovies;
