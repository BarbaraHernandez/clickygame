import React from "react";
import "./style.css";

function Header() {
  return (
    <header>
      <div className="container" id="header-div">
        <h1>CLICK CLICK BOOM</h1>
        <h2>Click on an image to earn points, but don't click on any more than once!</h2>
      </div>
    </header>
  );
}

export default Header;