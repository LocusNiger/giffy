import React from "react";
import giffyLogo from "../../assets/Giffy-logo-black.png";
import { useLocation } from "wouter";

export default function Logo() {
  const [location, setLocation] = useLocation();
  const handleClick = () => {
    setLocation("/");
  };
  return (
    <div>
      <div className="max-h-max lg:mt-6">
        <img className="max-w-xs w-40 hover:cursor-pointer" alt="Giffy logo" src={giffyLogo} onClick={handleClick} />
      </div>
    </div>
  );
}
