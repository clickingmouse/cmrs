import React, { useState } from "react";
import someCaption from "./blank.vtt";

export default function Player2(props) {
  console.log("PlayerProps---->", props);
  const [index, setIndex] = useState(0);

  const { play } = props;

  const playUrls = [];
  const playCaps = [];
  const playAudio = [];
  play.map(item => {
    //console.log(">>>>>>>>>>>>", item);
    playUrls.push(item.mediaUrl);
    playCaps.push(item.caption);
    playAudio.push(item.remix);
  });

  function handleEnded(e) {
    //track.removeCue(testCue);
    const nextUrlIdx = (index + 1) % playUrls.length;

    setIndex(nextUrlIdx);
  }

  function addCaption() {
    setTimeout(() => {
      var video = document.getElementById("video"),
        track;
      var track = video.addTextTrack("captions", "just a test", "en");
      //make it visible
      track.mode = "showing";
      //console.log("video length----=====>", video.duration);
      const testCue = new VTTCue(0.5, video.duration - 2, playCaps[index]);
      track.addCue(testCue);

      console.log(video.textTracks);
      track.onCueChange = () => {
        console.log("cue finished xxxxxxxxxxxxxx");
      };
      console.log(track.onCueChange());
      console.log(track.textTracks);
      //console.log(track.onCueChange);

      const textTracks = video.textTracks[0];
      var activeCue = textTracks.activeCues[0];
      console.log(activeCue);
      console.log("+++++++++++++++", video.textTracks);
      console.log(textTracks);
      var currentCue = track.activeCues[0];

      //track.removeCue(testCue);

      console.log(video);
    }, 300);
    ////////
  }

  const preview =
    play.length > 0 ? (
      <div>
        <p>preview on</p>
        <h6>play stream</h6>

        <video
          id="video"
          controls
          muted
          autoPlay
          width="250"
          preload="metadata"
          onEnded={handleEnded}
          src={playUrls[index]}
        >
          <track
            id="track"
            src={someCaption}
            default
            label="English"
            kind="captions"
            srclang="en"
            onCueChange={() => {
              console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
            }}
          />
        </video>
        {addCaption()}
      </div>
    ) : (
      <h6>preview off</h6>
    );

  return (
    <div>
      <h6>Player</h6>
      {play.length}
      {preview}
    </div>
  );
}
