import React from "react";

export default function Footer() {
  const link = "https://linktr.ee/ivansanchez.dev";
  return (
    <div className="">
      <p className="text-lg text-center">
        Built with <span className="text-white text-xl">♥</span> by{" "}
        <a href={link} target="_blank" rel="noopener noreferrer">
          Iván Sánchez.{" "}
        </a>
        All the credits here.
      </p>
    </div>
  );
}
