import React, { Component } from "react";
import LeftPanel from "./leftPanel/LeftPanel";
import RightPanel from "./rightPanel/RightPanel";
import Grid from "@material-ui/core/Grid";
import Player from "./player/Player";
import PlayerClassComponent from "./player/PlayerClassComponent";
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stream: [],
      play: []
    };
    // This binding is necessary to make `this` work in the callback
    this.something = this.something.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
  }
  handlePlay() {
    console.log("playing");
    this.setState({ play: [...this.state.stream] });
  }
  handleSubmit(newWork) {
    console.log("inserting ...", newWork);

    this.setState(
      {
        stream: [...this.state.stream, newWork]
      },
      () => {
        console.log("added to stream");
        console.log(this.state);
        console.log(typeof this.state.stream);
      }
    );
  }

  handleChange = e => {
    console.log(e);
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  userInput() {}
  something() {
    console.log("something");
  }
  render() {
    return (
      <div>
        <h5>Dashboard</h5>
        <Grid container>
          <Grid item sm={4}>
            <LeftPanel x={this.something} onSubmit={this.handleSubmit} />
          </Grid>

          <Grid item sm={4}>
            <RightPanel stream={this.state.stream} onPlay={this.handlePlay} />
          </Grid>

          <Grid item sm={4}>
            Viewer
            <hr />
            <Player play={this.state.play} />
            {/*<PlayerClassComponent />*/}
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default Dashboard;
