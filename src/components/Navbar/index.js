import React from "react";
import "./style.css";

function NavBar() {
  return (
    <nav className="navbar sticky-top navbar-dark bg-dark">
        <a className="navbar-brand" href="https://github.com/BarbaraHernandez/clickygame">Click Click Boom</a>
        <p>Dynamic Game Text!</p>
        <p>Dynamic: score | Text: !</p>
    </nav>
  );
}

export default NavBar;