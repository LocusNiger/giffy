const apiKey = "XFqiWoyn4nHms0AxsCQuaepcc2VnKztd";

export default function getGifs({ keyword = "420" } = {}) {
  const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`;
  return fetch(apiUrl) /* Realizo el fetch de la API. Devuelve una promesa => */
    .then((res) => res.json()) /* Transformo la rta. en JSON */
    .then((response) => {
      /* Accedemos al json para mostrar las imagenes. Nos devuelve DATA */
      const { data } = response; /* Data es un array de objetos, y cada obj. es un GIF */
      const gifs = data.map((image) => image.images.downsized_medium.url);
      return gifs;
    });
}
