import React, { Component } from "react";
import "./App.css";
import Navio from "./Navio";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      id: "",
      titulo: "",
      visitas: "",
      descargas: "",
      fechaultact: "",
      data: [],
      dataReady: false
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ url: event.target.value });
  }

  getUrlId(url) {
    const urlsplited = url.split("/");
    const idtemp = urlsplited[4].split(".")[0];
    console.log(idtemp);
    return idtemp;
  }

  getUrl() {
    fetch(this.state.url + "?$limit=100000&$offset=0")
      .then(res => res.json())
      .then(data => {
        this.setState({
          data: data,
          dataReady: true,
          id: this.getUrlId(this.state.url)
        });
        console.log(this.state.id);
        this.getdatainfo();
      });
  }

  getdatainfo() {
    fetch(
      "https://www.datos.gov.co/resource/r2nq-5bst.json?id=" + this.state.id
    )
      .then(res => res.json())
      .then(data =>
        this.setState({
          titulo: data[0].titulo,
          visitas: data[0].visitas,
          descargas: data[0].descargas,
          fechaultact: data[0].fecha_de_ltima_actualizaci_n,
          url: ""
        })
      );
  }

  renderInfo() {
    return (
      <div className="col">
        <div className="row">
          <p id="info">
            <span id="infolabel">Titulo del dataset:</span>
          </p>
        </div>
        <div className="row">
          <p id="info">{this.state.titulo}</p>
        </div>
        <div className="row">
          <p id="info">
            <span id="infolabel"># de visitas:</span>
          </p>
        </div>
        <div className="row">
          <p id="info">{this.state.visitas}</p>
        </div>
        <div className="row">
          <p id="info">
            <span id="infolabel"># de decargas:</span>
          </p>
        </div>
        <div className="row">
          <p id="info">{this.state.descargas}</p>
        </div>
        <div className="row">
          <p id="info">
            <span id="infolabel">Fecha de ultima act.:</span>
          </p>
        </div>
        <div className="row">
          <p id="info">{this.state.fechaultact}</p>
        </div>
      </div>
    );
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
              onClick={() => {
                this.getUrl();
              }}
            >
              Get dataset
            </button>
          </form>
        </div>
        <div className="container" id="naviocontainer">
          <div className="row">
            <div className="col">{this.renderInfo()}</div>
            <div className="col">
              {this.state.dataReady && <Navio data={this.state.data}></Navio>}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
