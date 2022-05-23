import "./App.css";
import React from "react";
import ListOfGifs from "./components/ListOfGifs";
import Welcome from "./components/Welcome";
import { Route } from "wouter";

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Welcome />
        {/* route: cuando el path sea X, el componente a renderizar es Y */}
        <Route path="/gif/:keyword" component={ListOfGifs} />
      </section>
    </div>
  );
}

export default App;
