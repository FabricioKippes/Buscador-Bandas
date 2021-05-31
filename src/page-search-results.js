import React, { Component } from "react";
import SearchBar from "./components/search-bar";
import SearchResult from "./components/search-results";

class PageSearchResult extends Component {
  state = {
    busqueda: "",
  };
  componentDidMount() {
    let search = this.props.history.location.search
      .substr(1)
      .replace("%20", " ");
    this.setState({
      busqueda: search,
    });
  }
  handleChange = (e) => {
    this.setState({
      busqueda: e.target.value,
    });
    this.props.history.push("/busqueda?" + this.state.busqueda);
  };
  render() {
    return (
      <React.Fragment>
        <SearchBar
          onChange={this.handleChange}
          busqueda={this.state.busqueda}
        />
        <SearchResult busqueda={this.state.busqueda} />
      </React.Fragment>
    );
  }
}

export default PageSearchResult;
