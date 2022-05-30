import React from "react";
import ListOfGifs from "./components/ListOfGifs";
import Welcome from "./components/Welcome";
import { Route } from "wouter";
import "tailwindcss/tailwind.css";

function App() {
  return (
    <div className="flex justify-center items-center bg-blue-200">
      <section className="App-content">
        <Welcome />
        {/* route: cuando el path sea X, el componente a renderizar es Y */}
        <Route path="/gif/:keyword" component={ListOfGifs} />
      </section>
    </div>
  );
}

export default App;
