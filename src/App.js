import React, { Component } from 'react';
import Frame from './Frame';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      heading: ''
    }    
  }

  updateHeading = (val) => {
    this.setState({
      heading: val
    });
    console.log(`From App: ${JSON.stringify(this.state)}`);
    
  }

  getData(val){
    console.log(`Reacting from child component ${val}`);
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.state.heading}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Frame title={this.props.title} sendData={this.getData} heading={this.updateHeading} fresh={this.state.heading}/>
      </div>
    );
  }
}

export default App;
