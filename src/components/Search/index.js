import React, { useState } from "react";
import { useLocation } from "wouter";

export default function Search() {
  const [keyword, setKeyword] = useState("Messi");
  const [path, pushLocation] = useLocation();
  console.log(path);
  /* El input va actualizando el valor de keyword y luego el hook 'pushLocation' cambia la ruta */
  const handleKeyword = (e) => {
    setKeyword(e.target.value);
  };
  const handleSubmit = (e) => {
    /* PreventDefault para que el submit no recargue la página */
    e.preventDefault();
    /* Una vez que cambia la ruta, hace match con wouter */
    pushLocation(`/search/${keyword}`);
  };
  /* Para limpiar el input despues de una búsqueda */
  const handleBlank = () => {
    const searcher = document.getElementById("searcher");
    searcher.value = "";
  };

  return (
    <div className="relative my-2 box-border w-full">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="searcher"
          onChange={handleKeyword}
          className="border w-4/5 h-8 rounded-lg px-2 leading-tight focus:outline-none focus:border-indigo-500"
          placeholder="Search for GIFs"
        />
        <button
          onClick={handleBlank}
          className="absolute inset-y-0 right-0 flex items-center justify-center px-4 h-8 font-bold w-4/12 text-white bg-indigo-500 rounded-r-lg hover:bg-indigo-600  focus:bg-indigo-700"
        >
          Search
        </button>
      </form>
    </div>
  );
}
