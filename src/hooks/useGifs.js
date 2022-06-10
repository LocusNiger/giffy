import { useState, useEffect } from "react";
import getGifs from "../services/getGifs";

/* Custom hook para volver a utilizar lógica */
export default function useGifs({ keyword }) {
  const [gifs, setGifs] = useState([]);
  /* useState para manejar el loader de la lista de gifs. Por defecto en false */
  const [loading, setLoading] = useState(false);
  useEffect(
    function () {
      /* Antes de comenzar la búsqueda de gifs, el loader pasa a true */
      setLoading(true);
      /* useEffect llama a la fción. getGifs y le pasa el keyword a buscar */
      getGifs({ keyword }).then((gifs) => {
        setGifs(gifs);
        /* Seteo en gifs el arreglo de urls */
        setLoading(false);
        /* Cuando carga la lista, el loader pasa a false de nuevo */
      });
    },
    [keyword]
    /* Keyword -> dependencia de useEffect. Se vuelve a renderizar cuando cambie */
  );
  return { loading, gifs };
}
