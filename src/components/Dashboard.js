import React, { Component } from "react";
import LeftPanel from "./leftPanel/LeftPanel";
import RightPanel from "./rightPanel/RightPanel";
import Grid from "@material-ui/core/Grid";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h5>Dashboard</h5>
        <Grid container>
          <Grid item sm={5}>
            <LeftPanel />
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
