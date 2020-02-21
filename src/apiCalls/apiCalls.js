export const fetchMoviesAPI = async () => {
  return await fetch('https://rancid-tomatillos.herokuapp.com/api/v1/movies')
    .then(response => response.json())
}

// Currently has user ID hard coded, but needs to be updated to be dynamic
export const fetchRatingsAPI = async () => {
  return await fetch('https://rancid-tomatillos.herokuapp.com/api/v1/users/24/ratings')
    .then(response => response.json())
}