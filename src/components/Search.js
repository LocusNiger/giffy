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
    <div className="relative my-2 box-border">
      <input
        id="searcher"
        onChange={handleKeyword}
        className="w-96 h-10 pl-3 pr-8  plactext-baseeholder-gray-600 border rounded-lg focus:shadow-outline"
        placeholder="Search for GIFs"
      />
      <Link
        to={`/gif/${keyword}`}
        onClick={handleBlank}
        className="absolute inset-y-0 right-0 flex items-center px-4 font-bold text-white bg-black rounded-r-lg hover:bg-yellow-400 hover:border hover:border-black  focus:bg-indigo-700"
      >
        Search
      </Link>
    </div>
  );
}
