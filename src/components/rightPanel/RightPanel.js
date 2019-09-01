import React, { Component } from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import { makeStyles } from "@material-ui/core/styles";
import WorkBench from "./WorkBench";
import CaptionEditor from "./CaptionEditor";
const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: "80%",
    backgroundColor: "blue",
    height: "80vh"
  }
});
function RightPanel(props) {
  const classes = useStyles();
  console.log("RightPanelProps", props.stream);
  console.log(typeof props.stream);
  const propsStatus = props ? "have something" : "empty";
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });
  const trackObj = {
    textType: "textType",
    remix: "remixA",
    caption: "a quic fox jump over the lazy dog",
    media: "media",
    mediaUrl: "mediaUrl",
    captionPosition: "center"
  };

  const toggleDrawer = (side, open) => event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };
  const fullList = side => (
    <div
      className={classes.fullList}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      Something
    </div>
  );
  console.log("in leftpanel", props.stream);
  return (
    <div>
      <h2>Right Panel</h2>

      <hr />
      {props.stream.length}
      <hr />
      <Button onClick={toggleDrawer("top", true)}>Open Top</Button>
      <SwipeableDrawer
        anchor="top"
        open={state.top}
        onClose={toggleDrawer("top", false)}
        onOpen={toggleDrawer("top", true)}
      >
        {fullList("top")}
      </SwipeableDrawer>
      {/************************************************************** */}
      <WorkBench track={trackObj} stream={props.stream} />
      <hr />
      <hr />

      <button onClick={props.onPlay}>VIEW FINAL</button>
    </div>
  );
}

export default RightPanel;
