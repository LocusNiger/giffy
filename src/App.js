import React from "react";
import Logo from "./components/Logo";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import { Route, Link } from "wouter";
import "tailwindcss/tailwind.css";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
      <section className="App-content flex flex-col items-center min-h-screen">
        <Link to="/">
          <Logo />
        </Link>
        {/* route: cuando el path sea X, el componente a renderizar es Y */}
        <Route path="/" component={Home} />
        <Route path="/search/:keyword" component={SearchResults} />
      </section>
    </div>
  );
}

export default App;
