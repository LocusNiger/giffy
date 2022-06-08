import React, { useEffect, useState } from "react";
import Gif from "./Gif";
import getGifs from "../services/getGifs";

/* Recibe como prop el obj params (wouter). En él se encuentra el keyword */
export default function ListOfGifs({ params }) {
  /* Saco el keyword que recibímos mediante la ruta */
  const { keyword } = params;
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

  /* Si está cargando la lista, muestra el Loader */
  if (loading) {
    return <div className="loader min-h-screen min-w-fit"></div>;
  } else {
    /* sino retorna la lista de gifs */
    return (
      <>
        <p className="text-xl mb-5 md:text-2xl lg:text-3xl">
          These are the results for{" "}
          <span className="text-xl font-black uppercase md:text-2xl lg:text-3xl">'{keyword}'</span>
        </p>
        <div className="flex flex-col gap-2 items-center mb-10 my-5">
          <div className="flex flex-col gap-8 min-w-full justify-center items-center sm:grid sm:grid-cols-2 sm:gap-x-4 lg:grid-cols-3 lg:gap-x-2">
            {gifs.map(({ title, url }) => (
              <Gif title={title} url={url} key={url} />
              /* Recorre el array de gifs y pasa las props al componente Gif */
            ))}
          </div>
        </div>
      </>
    );
  }
}
