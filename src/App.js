import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Frame from './Frame';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      avatar : 'http://placehold.it/128x128',
      text: ''
    }
  }

  changeUserAvatar = (avatar) => {
    let text = `{avatar} state change triggered from Child Component: ${avatar}`;
    this.setState({
        avatar,
        text
    });
  }

  render() {
    return (
      <div className="App">
        <p> Hello from Parent Component </p>
        <div className="Image">
          <img src={this.state.avatar}/>
        </div>
        <Frame onChangeUserAvatar={this.changeUserAvatar} consoleText={this.state.text} />
      </div>
    );
  }
}

App.propTypes = {
  name: PropTypes.string.isRequired
}

export default App;
