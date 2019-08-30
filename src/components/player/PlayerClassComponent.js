import React, { Component } from "react";
import clip1 from "./SampleVideo_1280x720_5mb.mp4";
import clip2 from "./Wildlife.ogv";
const urls = [clip1, clip2];

class PlayerClassComponent extends Component {
  constructor() {
    super();
    this.state = {
      currentUrlIdx: 1
    };
    this.handleEnded = this.handleEnded.bind(this);
  }

  handleEnded(e) {
    const nextUrlIdx = (this.state.currentUrlIdx + 1) % urls.length;
    this.setState({ currentUrlIdx: nextUrlIdx });
  }
  render() {
    return (
      <div>
        <video
          controls
          src={urls[this.state.currentUrlIdx]}
          autoPlay
          onEnded={this.handleEnded}
          width="250"
        />
      </div>
    );
  }
}

export default PlayerClassComponent;
