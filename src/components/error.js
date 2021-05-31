import React, { Component } from "react";

function Error(props) {
  return (
    <React.Fragment>
      <div className="row centrar">
        <div className="col-md 12">
          <strong>Error: {props.errorMensaje}</strong>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Error;
