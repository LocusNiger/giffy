/* Desestructuración */
const apiKey = "XFqiWoyn4nHms0AxsCQuaepcc2VnKztd";

/* Recibe prop, sino por defecto busca *420* */
export default function getGifs({ keyword = "420" } = {}) {
  const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`;
  return (
    fetch(apiUrl) /* Realizo el fetch de la API. Devuelve una promesa => */
      .then((res) => res.json()) /* Transformo la rta. en JSON */
      /* Accedemos al json para mostrar las imagenes. Nos devuelve DATA */
      .then((response) => {
        const { data } = response;
        /* Data es un array de objetos, y cada obj. es un GIF */
        const gifs = data.map((image) => image.images.downsized_medium.url);
        /* Mapeo el array y le saco el url a c/gif. Queda guardado en gifs */
        return gifs;
        /* la función retorna el arreglo de URL's */
      })
  );
}
