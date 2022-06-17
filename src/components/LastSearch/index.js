import React from "react";
import ListOfGifs from "../ListOfGifs";
import { useGifs } from "../../hooks/useGifs";

export default function LastSearch({ params }) {
  const { keyword } = params;
  const { loading, gifs } = useGifs();
  return (
    <>
      <div>Last search: {keyword}</div>
      {loading ? <div className="loader min-h-screen min-w-fit"></div> : <ListOfGifs gifs={gifs} keyword={keyword} />}
    </>
  );
}
