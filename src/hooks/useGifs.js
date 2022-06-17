import { useState, useEffect } from "react";
import getGifs from "../services/getGifs";

/* Custom hook para volver a utilizar lógica */
/* Recibe un keyword, sino por defecto es null */
export function useGifs({ keyword } = { keyword: null }) {
  const [gifs, setGifs] = useState([]);
  /* useState para manejar el loader de la lista de gifs. Por defecto en false */
  const [loading, setLoading] = useState(false);
  useEffect(
    function() {
      /* Antes de comenzar la búsqueda de gifs, el loader pasa a true */
      setLoading(true);
      /* Recuperamos la keyword del localStorage (si no mandan keyword) */
      const keywordToUse = keyword || localStorage.getItem("lastKeyword") || "random";
      /* useEffect llama a la fción. getGifs y le pasa el keyword a buscar */
      getGifs({ keyword: keywordToUse }).then((gifs) => {
        setGifs(gifs);
        /* Seteo en gifs el arreglo de urls */
        setLoading(false);
        /* Cuando carga la lista, el loader pasa a false de nuevo */
        localStorage.setItem("lastKeyword", keyword);
        /* Cuando ya está hecha la búsqueda, se guarda en localStorage */
      });
    },
    [keyword]
    /* Keyword -> dependencia de useEffect. Se vuelve a renderizar cuando cambie */
  );
  return { loading, gifs };
}
