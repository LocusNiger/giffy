import React from "react";
import Gif from "../Gif";

export default function ListOfGifs({ gifs, keyword }) {
  return (
    <>
      <p className="text-xl my-5 md:text-2xl lg:text-3xl">
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
