import React from "react";
import "./card.css";
// import content from '../content';

//\\//\\// EACH CARD HAS IMAGE CONTENT W CLICKEVENT FUNCTION //\\//\\//
const card = props => (
  <div className="card">
    <div className="img-container">
      <img className="img-thumbnail img-responsive" alt={props.name} src={props.image} onClick={() => props.clickPicture(props.id)}/>
    </div>
  </div>
);

export default card;