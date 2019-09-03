import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
// state = {
//   textType: "",
//   remix: "",
//   caption: "",
//   media: "",
//   mediaUrl: "",
//   captionPosition: ""
// };

const LeftFnPanel = props => {
  //console.log("------------->", props);
  const [input, setInput] = useState({
    textType: "font place holder",
    remix: "remix placeholder",
    caption: "",
    media: "",
    mediaUrl: "",
    captionPosition: "position placeholder"
  });

  const [fileReset, setFileReset] = useState(0);
  var myRef = React.createRef();

  function handleCaptionChange(e) {
    setInput({
      ...input,
      [e.target.id]: e.target.value
    });
  }
  function handleFile(e) {
    console.log(e.target.files[0]);
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      setInput({
        ...input,
        media: file,
        mediaUrl: reader.result
      });
    };
    reader.readAsDataURL(file);
  }

  return (
    <div>
      <Container>
        <h6>Left Fn Component</h6>
        <form
          onSubmit={e => {
            e.preventDefault();
            //console.log("adding");
            //console.log(input);
            props.onSubmit(input);
            setInput({
              ...input,
              media: null,
              mediaUrl: "",
              caption: ""
            });
            console.log(document.getElementById("media"));
            //e.media.value = null;
            //myRef.value = null;
            setFileReset(1);
            console.log("after reset", input);
            //resetFile();
          }}
        >
          <TextField
            id="caption"
            label="Type Caption here"
            placeholder="Placeholder"
            fullWidth
            multiline
            margin="normal"
            variant="outlined"
            rows="4"
            className="textArea"
            value={input.caption}
            onChange={handleCaptionChange}
          />
          <input
            accept="image/*, video/*"
            className=""
            id="media"
            type="file"
            onChange={handleFile}
            key={fileReset}
          />

          <Button
            className="btn"
            id="submit"
            type="submit"
            variant="contained"
            color="secondary"
          >
            ADD
          </Button>
        </form>
      </Container>
    </div>
  );
};
export default LeftFnPanel;
