import "./App.css";
import React, { Component } from "react";
import Dashboard from "./components/Dashboard";
class App extends Component {
  render() {
    return (
      <div>
        <h1>
          CMRS
          <hr />
          <Dashboard />
        </h1>
      </div>
    );
  }
}

export default App;
