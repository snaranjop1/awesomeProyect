import React, { Component } from "react";
import "./App.css";
import Navio from "./Navio";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      data: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ url: event.target.value });
  }

  getUrl(url) {
    fetch(url)
      .then(res => res.json())
      .then(data => console.log(data));
  }

  render() {
    return (
      <div id="main-container">
        <h1 className="jumbotron">Datos.gov data recolector</h1>
        <div className="container">
          <form className="form-inline">
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
              type="submit"
              className="btn btn-primary mb-2"
              onClick={() => this.getUrl(this.state.url)}
            >
              Get dataset
            </button>
          </form>
        </div>
        <Navio data={this.state.data} />
      </div>
    );
  }
}

export default App;
