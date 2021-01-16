import './App.css';
import Navigation from './Component/Navigation/Navigation';
import Logo from './Component/Logo/Logo';
import ImageLinkForm from './Component/ImageLinkForm/ImageLinkForm';
import Rank from './Component/Rank/Rank'
import Particles from 'react-particles-js';
import { Component } from 'react';
const particleoption ={
  "particles": {
      "number": {
          "value": 100
      },
      "size": {
          "value": 5
      }
  },
  "interactivity": {
      "events": {
          "onhover": {
              "enable": true,
              "mode": "repulse"
          }
      }
  }
}


class App extends Component {
  constructor(){
    super();
    this.state={
      input:'',
    }
  }

  onInputChange=(event)=>{
    console.log(event);
  }
  onButtonSubmit=()=>{
    console.log('click');
  }
  render(){
  return (
    
    <div className="App">
      <Particles className='particles'
    params={particleoption} />
      {/*<h1>Om Namaha Laxmi Narayana</h1>*/}
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
      {/*
      <FaceRecognition />*/}
    </div>
  );
 }
}

export default App;
