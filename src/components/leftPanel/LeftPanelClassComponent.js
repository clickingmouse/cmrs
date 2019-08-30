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
      music: "",
      caption: "",
      media: "",
      captionPosition: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //console.log(props);
  //props.something();

  //function handleSubmit() {
  //  return 1;
  //}
  handleSubmit() {}
  handleChange(e) {
    console.log(e);
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
          <form onSubmit={this.handleSubmit} noValidate>
            <button>Text Style1</button>
            <Button
              onClick={this.handleChange}
              variant="contained"
              color="primary"
              className={"button1"}
            >
              Text Style I
            </Button>
            <Button variant="contained" color="primary" className={"button2"}>
              Text Style II
            </Button>
            <br />
            <FormControl style={{ minWidth: "100%" }}>
              <InputLabel htmlFor="age-simple">Music</InputLabel>
              <Select
                autoWidth
                value="select sound"
                onChange={this.handleChange}
                inputProps={{
                  name: "age",
                  id: "age-simple"
                }}
              >
                <MenuItem style={{ width: "100vh" }} value={10}>
                  Ten
                </MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <hr />
            <TextField
              id="standard-textarea"
              label="With placeholder multiline"
              placeholder="Placeholder"
              fullWidth
              multiline
              margin="normal"
              variant="outlined"
              rows="4"
              className="textArea"
              margin="normal"
            />
            <hr />
            <Button>add</Button>
          </form>
        </Container>
      </div>
    );
  }
}
export default LeftPanel;
