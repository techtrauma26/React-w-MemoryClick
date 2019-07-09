import React from 'react';
import './navbar.css';

const navbar = props => (
  <div className="navbar ">
    <div>React with ClickMemory</div>
    <div className={props.navMessageColor}>{props.navMessage}</div>
    <div>
      Score: {props.score} <span className="pipe">|</span> High Score: {props.highScore}
    </div>
  </div>
);

export default navbar;