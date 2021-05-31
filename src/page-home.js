import React, { Component } from "react";
import "./components/page-home.css";
import logo from "./logo.svg";
class PageHome extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push("/busqueda?" + this.state.busqueda);
  };
  handleChange = (e) => {
    this.setState({
      busqueda: e.target.value,
    });
  };
  state = {
    busqueda: "",
  };
  render() {
    return (
      <div className="container">
        <div className="row centrado">
          <div className="col-md-6 centrar">
            <img src={logo} alt="" id="logo" />
            <form
              className="form-inline"
              onSubmit={this.handleSubmit}
              name="Form"
            >
              <div className="busqueda">
                <input
                  type="text"
                  id="buscar"
                  name="busqueda"
                  value={this.props.busqueda}
                  placeholder="Escribi el grupo"
                  onChange={this.handleChange}
                />
              </div>
              <div className="actions">
                <button className="btng" type="sumbit">
                  Buscar artistas similares
                </button>
                <button className="btng">Pagina FindRock</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default PageHome;
