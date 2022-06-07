import React from "react";
import ListOfGifs from "./components/ListOfGifs";
import Welcome from "./components/Welcome";
import { Route } from "wouter";
import "tailwindcss/tailwind.css";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
      <section className="App-content flex flex-col items-center min-h-screen justify-center">
        <Welcome />
        {/* route: cuando el path sea X, el componente a renderizar es Y */}
        <Route path="/search/:keyword" component={ListOfGifs} />
      </section>
    </div>
  );
}

export default App;
