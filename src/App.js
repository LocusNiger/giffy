import React from "react";
import ListOfGifs from "./components/ListOfGifs";
import Welcome from "./components/Welcome";
import { Route, Link } from "wouter";
import "tailwindcss/tailwind.css";
import Logo from "./assets/Giffy-logo-black.png";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
      <section className="App-content flex flex-col items-center min-h-screen">
        <Link to="/">
          <div className="max-h-max">
            <img className="max-w-xs w-40 hover:cursor-pointer" alt="Giffy logo" src={Logo} />
          </div>
        </Link>
        {/* route: cuando el path sea X, el componente a renderizar es Y */}
        <Route path="/" component={Welcome} />
        <Route path="/search/:keyword" component={ListOfGifs} />
      </section>
    </div>
  );
}

export default App;
