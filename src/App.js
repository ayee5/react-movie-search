import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchText: ''
    };
  }

  changetext(e) {
    this.setState({
      searchText: e.target.value
    });
  }

  render() {
    return (
      <div className="App">
      <h1>Movie Search App</h1>
      <input
        type="text"
        onChange={(e) => this.changetext(e)}/>
        <p>{this.state.searchText}</p>
      </div>
    );
  }
}

export default App;
