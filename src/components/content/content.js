import React from "react";
import "./content.css";

const content = props => (
    <div className="content">
      <div className="playerContainer">
        <img className=" img-responsive img-thumbnail" alt={props.name} src={props.image} onClick={() => props.memoryClick(props.id)}/>
      </div>
    </div>
  );
  export default content;
  