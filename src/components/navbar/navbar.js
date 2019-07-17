import React from './node_modules/react';
import './Navbar.css';

const Navbar = props => <div className={props.shakeContent === "true" ? "shakeContainer" : "picContainer"}>{props.pictures}</div>;

export default Navbar;