import React from "react";

/* Componente del gif que renderiza los props que recibe */
export default function Gif({ title, url }) {
  return (
    <div className="w-5/6 flex flex-col justify-around justify-self-center items-center">
      <img src={url} alt={title} className="object-contain rounded-lg min-w-full" />
      <h4 className="font-extralight text-center text-base mt-2">{title}</h4>
    </div>
  );
}
