import React from "react";

/* Componente del gif que renderiza los props que recibe */
export default function Gif({ title, url }) {
  return (
    <div className="bg-black bg-opacity-10 backdrop-blur-3xl rounded-xl w-5/6 flex flex-col justify-around justify-self-center items-center">
      <img src={url} alt={title} className="object-contain rounded-xl" />
      <h4 className="font-extralight text-center text-sm">{title}</h4>
    </div>
  );
}
