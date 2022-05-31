import React from "react";
import Search from "./Search";

export default function Welcome() {
  return (
    <div className="hover:ring transition-all ease-in-out delay-75 duration-200 bg-black bg-opacity-10 backdrop-blur-3xl rounded-xl p-5 flex flex-col gap-2 justify-center font-sans my-10 max-w-max">
      <h1 className="text-4xl font-medium">
        <span className="text-4xl font-black">HEY!</span> This is a{" "}
      </h1>
      <h2 className="text-5xl font-black">GIF SEARCHER</h2>
      <h3 className="text-xl font-medium">Please enter the keyword:</h3>
      <Search />
    </div>
  );
}
