import React, { Component } from 'react';
import './App.css';
import navbar from './components/navbar';
import content from './components/content';
import card from "./components/card";
import wrapper from "./components/wrapper";
import cards from "./cards.json";

class App extends Component {

//use state 
state = {

  //Message on navbar set to correct & incorrect clicks


  //State scoring
  highScore: 10,
  score: 0,

  //Clicked images - array
  clickedImg: [],

  //Images of all players - use shufflearray ()
  playerImg: [],
  
  //Shake image on incorrect clicks - set it to false 
  shakeImg: false,

}

}





















export default App;
