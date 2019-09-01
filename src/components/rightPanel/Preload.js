import React from "react";
import Container from "@material-ui/core/Container";
const Preload = props => {
  return (
    <div style={{ width: "auto" }}>
      <Container>
        <video controls src={props.source} preload="metadata" width="100%" />
      </Container>
    </div>
  );
};

export default Preload;
