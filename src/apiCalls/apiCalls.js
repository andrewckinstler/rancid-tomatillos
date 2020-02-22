export const fetchMoviesAPI = async () => {
  return await fetch('https://rancid-tomatillos.herokuapp.com/api/v1/movies')
  .then(res => {
    if(!res.ok) {
      throw Error('Failed to retrieve movies.')
    }
    return res.json()})
}

// Currently has user ID hard coded, but needs to be updated to be dynamic
export const fetchRatingsAPI = async () => {
  return await fetch('https://rancid-tomatillos.herokuapp.com/api/v1/users/24/ratings')
  .then(res => {
    if(!res.ok) {
      throw Error('Failed to get ratings.')
    }
    return res.json()})
}

export const userSignIn = (user) => {
  const url = 'https://rancid-tomatillos.herokuapp.com/api/v1/login'
  const options = {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json'  
    }
  }
  
  return fetch(url, options)
          .then(res => {
            if(!res.ok) {
              throw Error('Failed to sign in.')
            }
            return res.json()})
}