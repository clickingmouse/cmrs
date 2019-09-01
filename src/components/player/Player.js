import React, { useState } from "react";
import clip1 from "./SampleVideo_1280x720_5mb.mp4";
import clip2 from "./Wildlife.ogv";
import someCaption from "./blank.vtt";
const urls = [clip1, clip2];
function Player(props) {
  console.log("PlayerProps---->", props);
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

  const [index, setIndex] = useState(0);

  function handleEnded(e) {
    //track.removeCue(testCue);
    const nextUrlIdx = (index + 1) % urls.length;

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

      //track.addCue(new VTTCue(0.5, video.duration, playCaps[index]));
      //track.addCue(new TextTrackCue(0.5, video.duration, playCaps[index]));

      console.log(video.textTracks);
      //video.textTracks.onchange(() => {
      //  console.log("cue finished xxxxxxxxxxxxxx");
      //});
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
      <h3>Player</h3>
      {play.length}
      {preview}
    </div>
  );
}

export default Player;
