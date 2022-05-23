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
    <>
      <input id="searcher" onChange={handleKeyword} />
      <Link to={`/gif/${keyword}`} onClick={handleBlank}>
        BUSCAR
      </Link>
    </>
  );
}
