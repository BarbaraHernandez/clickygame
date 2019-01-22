import React from "react";
import "./style.css";

const img1 = <img src="./images/w1.png" alt=""></img>
const img2 = <img src="./images/w2.png" alt=""></img>
const img3 = <img src="./images/w3.png" alt=""></img>
const img4 = <img src="./images/w4.png" alt=""></img>
const img5 = <img src="./images/w5.png" alt=""></img>
const img6 = <img src="./images/w6.png" alt=""></img>
const img7 = <img src="./images/w7.png" alt=""></img>
const img8 = <img src="./images/w8.png" alt=""></img>
const img9 = <img src="./images/w9.png" alt=""></img>
const img10 = <img src="./images/w10.png" alt=""></img>
const img11 = <img src="./images/w11.png" alt=""></img>
const img12 = <img src="./images/w12.png" alt=""></img>

let ImageDisplay = [];


// this function reorders objects



export function Images() {

  (function OrderImages(){

    const MyImages = [
      {img1},
      {img2},
      {img3},
      {img4},
      {img5},
      {img6},
      {img7},
      {img8},
      {img9},
      {img10},
      {img11},
      {img12}
    ];
  
    for (var i = 12; i >= 0; i--) {
      ImageDisplay.push(MyImages[Math.random() * i | 0]);
    }
  })();
  
  return (
    <div className="container" id="image-div">{ImageDisplay[0]}</div>
  );
}

export default Images;