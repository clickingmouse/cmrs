import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import CaptionEditor from "./CaptionEditor";
import Preload from "./Preload";
import clip1 from "../player/SampleVideo_1280x720_5mb.mp4";
const WorkBench = props => {
  const { stream } = props;
  console.log(typeof stream);
  console.log("workbench:stream", stream[0]);
  //const x = stream.media[0];
  //console.log(x);
  const status = props.stream ? "something" : "empty";
  const Streamstatus =
    stream &&
    stream.map(item => {
      return "something";
    });

  return (
    <div>
      <h3>workbench - {Streamstatus}</h3>
      <hr />
      {props.caption}
      {props.video}
      {stream &&
        stream.map((item, index) => {
          return (
            <Grid container key={index}>
              clip - {index} -
              <hr />
              <Grid item xs={1}>
                <Button>Timer</Button>
                <Button>DEL</Button>
              </Grid>
              <Grid item xs={10}>
                <Preload source={item.mediaUrl} />
                <CaptionEditor text="123321123456723443245678910" />
              </Grid>
              <Grid item xs={1}>
                <h5>Caption Position</h5>
                <Button>TOP</Button>
                <Button>LEFT</Button>
                <Button>RIGHT</Button>
                <Button>BOTTOM</Button>
              </Grid>
            </Grid>
          );
        })}
    </div>
  );
};

export default WorkBench;
