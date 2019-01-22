import React from "react";
import NavBar from "../Navbar";
import Header from "../Header";
import Images from "../Images";

const wasCut = [];

let score = 0;
let selected;

// function reorder () {
//     var ul = document.querySelector('ul');
//     for (var i = ul.children.length; i >= 0; i--) {
//         ul.appendChild(ul.children[Math.random() * i | 0]);
//     }
// }

// class Game extends Component {
//     state = {
//         score: 0
//     };
// }

function Game() {
  return ( 
  <div>
    <NavBar />
    <Header />
    <Images />
  </div>);
}

export default Game;