import React, { Component } from "react";
import navio from "navio";

class Navio extends Component {
  componentDidMount() {
    this.update();
  }

  update() {
    new navio(this.myDiv, 600);
  }

  render() {
    return <div ref={myDiv => (this.myDiv = myDiv)}></div>;
  }
}

export default Navio;
