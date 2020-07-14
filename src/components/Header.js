import React from "react";
import Navigation from "./Navigation";
import "../assets/css/header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <h1>TRISHA SHANG</h1>
      </div>
      <Navigation />
    </div>
  )
}

export default Header;
