import React from "react";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import WorkBench2 from "./WorkBench2";
const RightFnPanel = props => {
  return (
    <div>
      <Container>
        <f6>RightFnPanel</f6>
        <hr />
        <button onClick={props.onPlay}>PREVIEW</button>
        <WorkBench2 stream={props.stream} />
      </Container>
    </div>
  );
};

export default RightFnPanel;
