import React from "react";

/* Componente del gif que renderiza los props que recibe */
export default function Gif({ title, url }) {
  return (
    <div>
      <h4>{title}</h4>
      <img src={url} alt={title} />
    </div>
  );
}
