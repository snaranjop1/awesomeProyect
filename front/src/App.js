import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="main-container">
        <h1 className="jumbotron">Awesome Proyect</h1>
        <h2>Here goes the content</h2>
      </div>
    );
  }
}

export default App;
