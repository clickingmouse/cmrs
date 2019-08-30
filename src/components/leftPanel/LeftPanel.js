import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  }
}));
/////////////////////////////////////////////////////////
//
//
//
////////////////////////////////////////////////////////
class LeftPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textType: "",
      remix: "",
      caption: "",
      media: "",
      mediaUrl: "",
      captionPosition: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  //console.log(props);
  //props.something();

  //function handleSubmit() {
  //  return 1;
  //}
  handleSubmit() {}

  handleFile(e) {
    console.log(e.target.files[0]);
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      this.setState(
        {
          media: file,
          mediaUrl: reader.result
        },
        () => {
          console.log(this.state);
        }
      );
    };
    reader.readAsDataURL(file);
  }

  handleSelect(e) {
    e.preventDefault();
    console.log(e.target.value);
    this.setState(
      {
        remix: e.target.value
      },
      () => {
        console.log(this.state);
      }
    );
    //    console.log(this.state);
  }
  handleClick(e) {
    //console.log(e.currentTarget.value);
    this.setState(
      {
        [e.currentTarget.id]: e.currentTarget.value
      },
      () => {
        console.log(this.state);
      }
    );
    //console.log(this.state);
  }

  handleChange(e) {
    console.log(e.target.id);
    this.setState({
      [e.target.id]: e.target.value
    });
    console.log(this.state);
    return 1;
  }
  /*
  function handleClick(e) {
    e.preventDefault();
    props.x();
    console.log("click");
    return 1;
  }*/
  //  const inputLabel = React.useRef(null);
  //const [labelWidth, setLabelWidth] = React.useState(0);
  //React.useEffect(() => {
  //  setLabelWidth(inputLabel.current.offsetWidth);
  //}, []);
  render() {
    return (
      <div>
        <h2>Left Panel</h2>
        <Container>
          <form
            onSubmit={e => {
              e.preventDefault();
              console.log("add to work");
              console.log(this.state);
              this.props.onSubmit(this.state);
            }}
            noValidate
          >
            <Button
              id="textType"
              value="styleI"
              variant="contained"
              color="primary"
              className={"button1"}
              onClick={this.handleClick}
            >
              Text Style I
            </Button>
            <Button
              id="textType"
              value="styleII"
              variant="contained"
              color="primary"
              className={"button2"}
              onClick={this.handleClick}
            >
              Text Style II
            </Button>
            <br />
            <FormControl style={{ minWidth: "100%" }}>
              <InputLabel htmlFor="age-simple">Music</InputLabel>
              <Select
                id="music"
                autoWidth
                value={this.state.remix}
                onChange={this.handleSelect}
              >
                <MenuItem id="item" style={{ width: "100vh" }} value={"remix1"}>
                  Remix #1
                </MenuItem>
                <MenuItem value={"remix2"}>Remix #2</MenuItem>
                <MenuItem value={"remix3"}>Remix #3</MenuItem>
              </Select>
            </FormControl>
            <hr />
            <TextField
              id="caption"
              label="With placeholder multiline"
              placeholder="Placeholder"
              fullWidth
              multiline
              margin="normal"
              variant="outlined"
              rows="4"
              className="textArea"
              value={this.state.caption}
              onChange={this.handleChange}
            />
            <hr />
            <input
              accept="image/*, video/*"
              className=""
              id="media"
              type="file"
              onChange={this.handleFile}
            />
            <hr></hr>
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
  }
}
export default LeftPanel;
