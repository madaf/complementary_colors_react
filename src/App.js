import React, { Component } from 'react';
import {ColorComponent} from './Component.js';
import {colorsName} from './seed.js';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        colors: colorsName,
        bgColor: ''
    };
    this.handleClick = this.handleClick.bind(this);
}
 
  handleClick(color1, color2) {
    const backgroundColor = "linear-gradient(to right, " + color1 + "," + color2 + ")";
    
    this.setState({ bgColor: backgroundColor });
    console.log(backgroundColor)
  }
  render() {
    const showColors = this.state.colors.map(color => (
  
      <ColorComponent 
        key = {'color-' + color.id}
        id = {color.id}
        color1 = {color.color1}
        color2 = {color.color2}
        onClick = {() => {
          this.handleClick(color.color1, color.color2)
        }}
      />
    
    ))
    return (
      <div style = {{ background: this.state.bgColor }} className="App">
        { showColors }
      </div>
    );
  }
}


