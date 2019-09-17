import React, { Component } from "react";
import navio from "navio";

class Navio extends Component {
  componentDidMount() {
    this.update();
  }

  update() {
    console.log("We got the data", this.props.data);
    let nav = navio(this.myDiv, 600);
    nav.data(this.props.data);
    nav.addAllAttribs();
  }

  render() {
    return <div ref={myDiv => (this.myDiv = myDiv)}></div>;
  }
}

export default Navio;
