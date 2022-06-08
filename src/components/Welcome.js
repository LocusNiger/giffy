import React from "react";
import Search from "./Search";

export default function Welcome() {
  return (
    <div className="bg-black bg-opacity-10 backdrop-blur-3xl rounded-xl font-sans box-border lg:hover:ring transition-all ease-in-out delay-75 duration-200 flex flex-col justify-evenly items-start min-h-full  max-w-sm w-5/6 h-52 p-6">
      <h1 className="text-2xl font-medium">
        <span className="text-2xl font-black">HEY!</span> This is a{" "}
      </h1>
      <h2 className="text-3xl font-black">GIF SEARCHER</h2>
      <h3 className="text-xl font-medium">Please enter the keyword:</h3>
      <Search />
    </div>
  );
}
