import React from 'react';
import './navbar.css';

const Navbar = props => <div className={props.shakeContent === "true" ? "shakeContainer" : "picContainer"}>{props.pictures}</div>;

export default Navbar;