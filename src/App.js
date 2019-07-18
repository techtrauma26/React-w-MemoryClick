import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Content from './components/Content';
import images from './images.json';
 

class App extends Component {

//use state 
state = {

  //Message on navbar set to correct & incorrect clicks
  messageBanner: '',

  //State scoring
  highScore: 0,
  score: 0,

  //Clicked images - array
  clickedImg: [],

  //Images of all players - use shufflearray ()
  // playerImg: this.shuffleArray(),

  //Shake image on incorrect clicks - set it to false 
  shakeImg: false,

  images
  
};

//Randomize Images 

memoryClick = id => {

  const randomizedImgs = this.shuffleArray(images);
  this.setState({images: randomizedImgs});
  if(this.state.clickedImg.includes(id)) {
    this.setState({ score: 0, clickedImg: [], messageBanner: "Incorrect!", shakeImg: "true"});
  }
  else {
    this.setState({
      clickedImg: this.state.clickedImg.concat([id]),
      score: this.state.score + 1,
      messageBanner: "Correct!",
      shakeImg:"false"
    })
  }
if (this.state.score > this.state.topScore) {
  this.setState({ topScore: this.state.score });
}

}
shuffleArray = (picturesArray) => {
  for (let i = picturesArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [picturesArray[i], picturesArray[j]] = [picturesArray[j], picturesArray[i]];
  }
  return picturesArray;
}
// memoryClick = this.checkClicked.bind(this);


// shuffleArray() {
//   //.slice used when you don't want to alter the original contents, rather just a simple copy as a new array
// const imagesCopy = players.slice();
// const randomizedImgs = [];

// while (imagesCopy.length > 0){
//   randomizedImgs.push(imagesCopy.splice(Math.floor(Math.random() * imagesCopy.length), 1)[0]);
// }
// return randomizedImgs;
// }



// render() {
//   const state = this.state;
//   return (
//     <div>
//       <Navbar
//         score={state.score}
//         messageBanner={state.messageBanner}
//         messageColor={state.messageColor}
//       />
//       {/* <Header /> */}
//       <Content
//         shake={state.shake}
//         pictures={state.images}
//         memoryClick={this.memoryClick}
//       />
//     </div>
//   );
// }
// }



//

render() {
  return (
    <div className="Wimbledon">
      <navbar className="tennisNav">
        
      <p className = "score">Score: {this.state.score} </p>
      <p className="message">{this.state.messageBanner}</p>
      </navbar>
      <h4 className="header">
    React with MemoryClick! 
       <br></br>
       Wimbledon 2019 Edition
      </h4>
      <Navbar
      shakeContent = {this.state.shakeImg}
      pictures=
        {this.state.images.map(picture => (
          <Content
            memoryClick={this.memoryClick}
            id={picture.id}
            image={picture.image}
          />
        ))}
      />

    </div>
  );
};


}






















export default App;
