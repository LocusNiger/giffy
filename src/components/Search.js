import React, { useState } from "react";
import { Link } from "wouter";

export default function Search() {
  const [keyword, setKeyword] = useState("CR7");
  /* El input va actualizando el valor de keyword y luego el Link cambia la ruta */
  /* Una vez que cambia la ruta, hace match con wouter */
  const handleKeyword = (e) => {
    setKeyword(e.target.value);
  };
  const handleBlank = () => {
    const searcher = document.getElementById("searcher");
    searcher.value = "";
  };

  return (
    <div className="relative my-2 box-border w-full">
      <input
        id="searcher"
        onChange={handleKeyword}
        className="border w-max h-8 rounded-lg px-2 leading-tight focus:outline-none focus:border-indigo-500"
        placeholder="Search for GIFs"
      />
      <Link
        to={`/search/${keyword}`}
        onClick={handleBlank}
        className="absolute inset-y-0 right-0 flex items-center px-4 h-8 font-bold text-white bg-indigo-500 rounded-r-lg hover:bg-indigo-600  focus:bg-indigo-700"
      >
        Search
      </Link>
    </div>
  );
}
