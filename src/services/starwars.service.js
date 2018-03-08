export const BASE_URL = 'https://swapi.co/api/';

export const StarWarsRequest = (requestUrl) => {
  if (requestUrl && requestUrl.length) {
    return fetch(`${BASE_URL}${requestUrl}`)
      .catch(err => err)
      .then(res => res.json())
  } else {
    return
  }
}
