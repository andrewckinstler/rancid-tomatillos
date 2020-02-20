export const fetchMoviesAPI = () => {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v1/movies')
    .then(response => response.json())
}

export const userSignIn = (user) => {
  const options = {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json'  
    }
  }
  
  return fetch('url', options)
          .then(res => {
            if(!res.ok) {
              throw Error('Failed to sign in.')
            }
            return res.json()})
}