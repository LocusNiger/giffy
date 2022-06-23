import React from "react";
import Gif from "../Gif";

export default function ListOfGifs({ gifs }) {
  return (
    <>
      <div className="flex flex-col gap-2 items-center">
        <div className="flex flex-col gap-8 min-w-full justify-center items-center sm:grid sm:grid-cols-2 sm:gap-x-4 lg:grid-cols-3 lg:gap-x-2 ">
          {gifs.map(({ title, url }) => (
            <Gif title={title} url={url} key={url} />
            /* Recorre el array de gifs y pasa las props al componente Gif */
          ))}
        </div>
      </div>
    </>
  );
}
