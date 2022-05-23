import React from "react";
import Search from "./Search";

export default function Welcome() {
  return (
    <>
      <h1>Hello dear!</h1>
      <h2>This is a gif searcher</h2>
      <h3>Please enter the keyword:</h3>
      <Search />
    </>
  );
}
