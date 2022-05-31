import React from "react";
import Search from "./Search";

export default function Welcome() {
  return (
    <div className="border-2 border-black bg-yellow-400 p-5 flex flex-col gap-2 justify-center items-center font-mono rounded-lg">
      <h1 className="text-xl">HEY! This is a gif searcher</h1>
      <h3>Please enter the keyword:</h3>
      <Search />
    </div>
  );
}
