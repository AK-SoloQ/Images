import React, { Component } from 'react';
import './App.css';
import Getscreen from './Getscreen'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { images: null }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(images => this.setState({ images }));
  }
  render() { 
    return <Getscreen images= {this.state.images} />
  }
}
 
export default App;

