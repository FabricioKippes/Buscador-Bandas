import React, { Component } from "react";
import ArtistCard from "./artist-cards";

class SimiliarArtist extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row centrar margenes50">
          <div className="col-md-12">
            <h5>Artistas Similares</h5>
            <hr />
          </div>
        </div>
        <div className="row centrar">
          {this.props.data.slice(0, 4).map((item, i) => {
            return (
              <ArtistCard
                img={item.image[2]["#text"]}
                titulo={item.name}
                key={i}
              />
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}
export default SimiliarArtist;
