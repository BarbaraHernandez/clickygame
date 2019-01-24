import React from "react";
import "./style.css";

function NavBar(props) {
  return (
    <nav className="navbar sticky-top navbar-dark bg-dark">
        <a className="navbar-brand" href="https://github.com/BarbaraHernandez/clickygame">Click Click Boom</a>
        <p>{props.instruction}</p>
        <p>Score: {props.gameScore} </p>
    </nav>
  );
}

export default NavBar;