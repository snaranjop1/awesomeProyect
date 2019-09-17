import React, { Component } from "react";
import navio from "navio";

class Navio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  onChange() {
    const nv = new navio(this.myDiv, 600);

    nv.data(this.state.data);

    nv.addAllAttribs();
  }

  render() {
    return (
      
    );
  }
}

export default Navio;
