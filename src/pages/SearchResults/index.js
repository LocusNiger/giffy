import React from "react";
import ListOfGifs from "../../components/ListOfGifs";
import { useGifs } from "../../hooks/useGifs";

/* Recibe como prop el obj params (wouter). En él se encuentra el keyword */
export default function SearchResults({ params }) {
  /* Saco el keyword que recibímos mediante la ruta */
  const { keyword } = params;
  /* Recupero loading y gifs del custom hook, y le paso la keyword */
  const { loading, gifs } = useGifs({ keyword });

  return (
    <>{loading ? <div className="loader min-h-screen min-w-fit"></div> : <ListOfGifs gifs={gifs} />}</>
    /* Si está cargando la lista, muestra el Loader. Sino devuelve la lista de gifs*/
  );
}
