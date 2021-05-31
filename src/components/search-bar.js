import React, { Component } from "react";
import "./search-bar.css";
import logo from "../logo.svg";
import { Link } from "react-router-dom";
class SearchBar extends React.Component {
  state = {
    busqueda: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleClick = (e) => {
    e.preventDefault();
  };
  handleSubmit = (e) => {
    e.preventDefault();
  };
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-2">
            <Link to="/">
              <img src={logo} alt="" className="logo-barra" />
            </Link>
          </div>
          <div className="col-md-4">
            <form className="row g-3" onSubmit={this.handleSubmit} name="Form">
              <div className="busqueda">
                <input
                  type="text"
                  id="buscar"
                  name="busqueda"
                  value={this.props.busqueda}
                  placeholder="Escribi el grupo"
                  onChange={this.props.onChange}
                />
              </div>
            </form>
          </div>
        </div>
        <hr />
      </React.Fragment>
    );
  }
}
export default SearchBar;
