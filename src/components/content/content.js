import React from "react";
import "./content.css";

const Content = props => (
    <div className="icontent">
      <div className="playerContainer">
        <img className=" img-responsive img-thumbnail" alt={props.name} src={props.image} onClick={() => props.memoryClick(props.id)}/>
      </div>
    </div>
  );
  export default Content;
  