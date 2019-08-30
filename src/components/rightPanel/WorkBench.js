import React from "react";
import Button from "@material-ui/core/Button";
const WorkBench = props => {
  console.log("workbench", props);
  return (
    <div>
      <h3>workbench</h3>
      <hr />
      <Button>DEL</Button>
      <Button>Caption Position</Button>
      <Button>Timer</Button>
      {props.caption}
      {props.video}
    </div>
  );
};

export default WorkBench;
