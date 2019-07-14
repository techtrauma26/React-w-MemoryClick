import React from "react";
import "./Content.css";

const Content = props => (
    <div className="content">
      <div className="playerContainer">
        <img className=" img-responsive img-thumbnail" alt={props.name} src={props.image} onClick={() => props.memoryClick(props.id)}/>
      </div>
    </div>
  );
  export default Content;
  