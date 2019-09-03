import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import CaptionEditor from "./CaptionEditor";
import Preload from "./Preload";
import Typography from "@material-ui/core/Typography";
import { Divider } from "@material-ui/core";
export default function WorkBench2(props) {
  const { stream } = props;
  return (
    <div>
      <h5>video</h5>
      <h6>Total videos - {props.stream.length}</h6>
      <hr />
      <hr />
      {stream &&
        stream.map((item, index) => {
          return (
            <Grid container key={index}>
              <Typography>clip - {index + 1} -</Typography>
              <Divider />

              <Grid item xs={12}>
                <Preload source={item.mediaUrl} />
                <CaptionEditor text={item.caption} />
                <Typography>Caption Position</Typography>
                <Button>TOP</Button>
                <Button>LEFT</Button>
                <Button>RIGHT</Button>
                <Button>BOTTOM</Button>
                <Button>Timer</Button>
                <Button>DEL</Button>
              </Grid>
            </Grid>
          );
        })}
    </div>
  );
}
