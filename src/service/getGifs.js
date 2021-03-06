import {API_KEY,API_URL} from './settings';

export default function getGifs ({limit=15,  keyword = 'morty', rating='g', page=0}) {
  return fetch(`${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&${limit}=25&offset=${page * limit}&rating=${rating}&lang=en`)
    .then(response => response.json())
    .then(response => {
      const {data = []} = response;
      if(Array.isArray(data)) {
        return data.map(item => ({
          id: item.id,
          title: item.title,
          url: item.images.downsized_medium.url
        }))
      }

    })
}