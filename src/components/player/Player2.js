import React, { useState } from "react";
import someCaption from "./blank.vtt";

export default function Player2(props) {
  console.log("PlayerProps---->", props);
  const [index, setIndex] = useState(0);
  const [CurrentCue, setCue] = useState({});
  const { play } = props;
  var testCue = {};

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
    const z = e.target;
    console.log("video ended", testCue);
    //track.removeCue(testCue);
    var currentTrack = z.textTracks[0];
    var activeCue = currentTrack.activeCues[0];
    console.log("activeCue ", activeCue);
    console.log(currentTrack);
    currentTrack.removeCue(testCue);
    const nextUrlIdx = (index + 1) % playUrls.length;

    setIndex(nextUrlIdx);
  }
  function handleCueChange() {
    console.log("xxxxxxxxxxxxxxxzzzzzzzzzz");
  }

  function handleLoadedData() {
    console.log("video loaded, adding caption...");
    var video = document.getElementById("video"),
      track;
    //var track = video.addTextTrack("captions", "just a test", "en");
    console.log(video.textTracks);
    track = video.textTracks[0];
    //make it visible
    //track.mode = "showing";
    //console.log(video.TextTrack);
    testCue = new VTTCue(0.5, video.duration - 2, playCaps[index]);
    //setCue(testCue);

    track.addCue(testCue);
    console.log(video.textTracks);
    var y = video.textTracks[0];
    var activeCue = y.activeCues[0];
    console.log(video.textTracks);
    console.log(y);
    track.onCueChange = function() {
      console.log("cue finished, changing xxxxxxxxxxxxxx");
    };
  }

  function addCaption() {
    setTimeout(() => {
      console.log("======================================");
      var video = document.getElementById("video"),
        track;
      video.onloadeddata = function() {
        alert("Browser has loaded the current frame");
        var track = video.addTextTrack("captions", "just a test", "en");
        //make it visible
        track.mode = "showing";
        console.log(video);
        console.log("video length----=====>", video.duration);
        testCue = new VTTCue(0.5, video.duration - 2, playCaps[index]);
        //setCue(testCue);
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
        console.log(video);
      };

      //track.removeCue(testCue);
    }, 1000);
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
          preload="auto"
          onEnded={handleEnded}
          onLoadedData={handleLoadedData}
          src={playUrls[index]}
        >
          <track
            id="track"
            default
            label="English"
            kind="captions"
            srclang="en"
            onCueChange={() => {
              console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
            }}
          />
        </video>
        {/*addCaption()*/}
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
