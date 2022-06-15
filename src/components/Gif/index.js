import React from "react";
import { Link } from "wouter";

/* Componente del gif que renderiza los props que recibe */
export default function Gif({ title, url }) {
  return (
    <div className="w-5/6 flex flex-col justify-around justify-self-center items-center">
      <Link to={`/gif/${title}`}>
        <img
          src={url}
          alt={title}
          className="object-contain rounded-lg min-w-full hover:brightness-50 hover:transition-all hover:duration-200 hover:ease-in-out"
        />
        <h4 className="font-extralight text-center text-base mt-2">{title}</h4>
      </Link>
    </div>
  );
}