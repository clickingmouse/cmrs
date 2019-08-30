import React, { Component } from "react";
import LeftPanel from "./leftPanel/LeftPanel";
import RightPanel from "./rightPanel/RightPanel";
import Grid from "@material-ui/core/Grid";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: {
        textType: "",
        music: "",
        caption: "",
        media: "",
        captionPosition: ""
      }
    };
    // This binding is necessary to make `this` work in the callback
    this.something = this.something.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
          <Grid item sm={5}>
            <LeftPanel x={this.something} />
          </Grid>

          <Grid item sm={7}>
            <RightPanel />
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default Dashboard;
