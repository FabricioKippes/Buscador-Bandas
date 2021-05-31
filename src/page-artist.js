import React, { Component } from "react";
import SearchBar from "./components/search-bar";
import SimilarArtist from "./components/similar-artist";
import Error from "./components/error";
import "./components/artist-card.css";

class PageArtist extends Component {
  state = {
    data: {
      artist: {
        image: [
          { "#text": "" },
          { "#text": "" },
          { "#text": "" },
          { "#text": "" },
        ],
        similar: {
          artist: [
            {
              name: "",
              url: "",
              image: [
                { "#text": "" },
                { "#text": "" },
                { "#text": "" },
                { "#text": "" },
              ],
            },
          ],
        },
      },
    },
  };
  componentDidUpdate(prevsProps) {
    if (this.props.location !== prevsProps.location) {
      this.fetchdata();
    }
  }
  changeHandle = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  fetchdata = async () => {
    let artista = this.props.history.location.search.substr(1);
    let url =
      "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=" +
      artista +
      "&api_key=23b461c44dda5ff385db40cb83c2b3e8&format=json";
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
  componentDidMount() {
    this.fetchdata();
  }
  render() {
    return (
      <React.Fragment>
        <SearchBar
          onChange={this.changeHandle}
          busqueda={this.state.busqueda}
        />
        {this.state.error && (
          <Error errorMensaje={this.state.errorMensaje}></Error>
        )}
        <div className="container">
          <div className="row centrar">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <img
                src={this.state.data.artist.image[2]["#text"]}
                alt=""
                className="pic-artist margenes50"
              />
              <h2>{this.state.data.artist.name}</h2>
              <p>
                Por el momento estamos experimentando problemas y no se
                encuentra disponible ninguna informacion sobre el artista.
                Muchas gracias por la paciencia.
              </p>
            </div>
          </div>
          <div className="row centrar">
            <SimilarArtist data={this.state.data.artist.similar.artist} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PageArtist;
