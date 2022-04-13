import {API_KEY,API_URL} from './settings';

export default function getTrendingTerms () {
  return fetch(`${API_URL}/trending/searches?api_key=${API_KEY}`)
    .then(response => response.json())
    .then(response => {
      const {data = []} = response;
     return data

    })
}