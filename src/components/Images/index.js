import React from "react";
import "./style.css";

function Wire(props) {
  return (    
    <img onClick={() => props.handleOnClick(props.id)} alt="" src={props.image} />
  );
}

export default Wire;