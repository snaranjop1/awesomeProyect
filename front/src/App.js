import React, { Component } from "react";
import "./App.css";
import Navio from "./Navio";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      data: [],
      dataReady: false
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ url: event.target.value });
  }

  getUrl() {
    let offset = 0;
    let dataEnd = false;

    fetch(this.state.url + "?$limit=1000&$offset=0")
      .then(res => res.json())
      .then(data => this.setState({ data: data, dataReady: true, url: "" }));
  }

  render() {
    return (
      <div id="main-container">
        <h1 className="jumbotron">Datos.gov data recolector</h1>
        <h2 id="title">Enter the datos.gov url you want to visualize</h2>
        <div className="container">
          <form className="form-inline" id="urlform">
            <div className="form-group mb-2">
              <label id="labeldatos">Datos.gov URL</label>
            </div>
            <div className="form-group mx-sm-3 mb-2">
              <input
                onChange={this.handleChange}
                value={this.state.url}
                type="text"
                className="form-control"
                placeholder="url"
              ></input>
            </div>
            <button
              type="button"
              className="btn btn-primary mb-2"
              onClick={() => this.getUrl()}
            >
              Get dataset
            </button>
          </form>
        </div>
        {this.state.dataReady && <Navio data={this.state.data}></Navio>}
      </div>
    );
  }
}

export default App;
