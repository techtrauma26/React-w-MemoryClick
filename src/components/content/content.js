import React from "react";
import "./Content.css";

const Content = props => (
    <div className="content">
      <div className="img-container">
        <img className="img-thumbnail img-responsive" alt={props.name} src={props.image} onClick={() => props.memoryClick(props.id)}/>
      </div>
    </div>
  );
  export default Content;
  