import React, { useState } from "react";
import clip1 from "./SampleVideo_1280x720_5mb.mp4";
import clip2 from "./Wildlife.ogv";
import someCaption from "./blank.vtt";
const urls = [clip1, clip2];
function Player(props) {
  console.log("PlayerProps---->", props);
  const { play } = props;
  if (play) {
    console.log("play", typeof play);
  } else {
    console.log("=================empty");
  }
  const playUrls = [];
  play.map(item => {
    playUrls.push(item.mediaUrl);
  });
  console.log("++++++++++>>>>", playUrls);
  //urls[0] = props.play[0].mediaUrl;
  //urls[1] = props.play[0].mediaUrl
  //const urls[2]
  console.log(playUrls);

  const [index, setIndex] = useState(0);

  function handleEnded(e) {
    const nextUrlIdx = (index + 1) % urls.length;

    setIndex(nextUrlIdx);
  }
  function addCaption() {
    setTimeout(() => {
      var video = document.getElementById("video"),
        track;
      var track = video.addTextTrack("subtitles", "just a test", "en");
      //make it visible
      track.mode = "showing";

      // add some cues to show the text
      track.addCue(new VTTCue(0.5, 5, "My first Cue"));
      track.addCue(new VTTCue(5.1, 9.5, "My <u>underlined</u> Cue"));
      track.addCue(
        new VTTCue(9.6, 14.8, "My <c.small>small classname</c> Cue")
      );
      //track.addCue(new VTTCue(0, 12, "[Test]"));
      console.log(video);
    }, 300);
    setTimeout(() => {
      var cue = new VTTCue(2, 15, "Cool text to be displayed");
      let textTrackElem = document.getElementById("texttrack");
      console.log(">>>>>>>>--->>>>>>>>", textTrackElem);
    }, 500);
    //textTrackElem[0].addCue(cue);
    //textTrackElem.oncuechange = (event) => {
    //  let cues = event.target.track.activeCues;
    //});
    setTimeout(() => {
      const cue = new VTTCue(10, 15, "asdfghjkl");
      //const tracks = document.querySelector(".video").textTracks;
      //tracks[0].addCue(cue);
    }, 500);
    ////////
    var cue = new VTTCue(2, 15, "Cool text to be displayed");
    //var tracks = document.querySelector("video").textTracks;
    //tracks[0].addCue(cue);
  }

  return (
    <div>
      <h3>Player</h3>
      {play &&
        play.map(item => {
          return <div>play stream</div>;
        })}
      <video
        id="video"
        controls
        muted
        autoPlay
        width="250"
        preload="metadata"
        onEnded={handleEnded}
        src={urls[index]}
      >
        <track
          id="track"
          src={someCaption}
          default
          label="English"
          kind="captions"
          srclang="en"
        />
      </video>
      {addCaption()}
    </div>
  );
}

export default Player;
