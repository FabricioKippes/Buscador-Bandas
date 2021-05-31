import React, { Component } from "react";
import "./App.css";
import ArtistCard from "./artist-cards";
import Error from "./error";

class SearchResult extends Component {
  state = {
    error: null,
    data: {
      similarartists: {
        artist: [],
      },
    },
  };
  componentDidUpdate() {
    let termino = this.props.busqueda;
    this.fetchdata(
      "http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=" +
        termino +
        "&api_key=23b461c44dda5ff385db40cb83c2b3e8&format=json"
    );
  }
  fetchdata = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    if (data.error) {
      this.setState({
        error: true,
        errorMensaje: data.message,
      });
    } else {
      this.setState({
        data: data,
        error: false,
      });
    }
  };
  render() {
    return (
      <React.Fragment>
        {this.state.error && (
          <Error errorMensaje={this.state.errorMensaje}></Error>
        )}
        <div className="container">
          <div className="row">
            {this.state.data.similarartists.artist.map((item, i) => {
              return (
                <ArtistCard
                  img={item.image[2]["#text"]}
                  titulo={item.name}
                  key={i}
                />
              );
            })}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default SearchResult;
