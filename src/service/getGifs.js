const apiKey = 'kBjItj1ZRK9ENAzGCSsH29vBYqKNeY3v'

export default function getGifs ({keyword = 'morty'}) {
  return fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=25&offset=0&rating=G&lang=en`)
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