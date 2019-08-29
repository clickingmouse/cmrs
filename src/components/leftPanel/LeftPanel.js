import React from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
const LeftPanel = () => {
  function handleSubmit() {
    return 1;
  }

  function handleChange() {
    return 1;
  }
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  //React.useEffect(() => {
  //  setLabelWidth(inputLabel.current.offsetWidth);
  //}, []);
  return (
    <div>
      <h2>Left Panel</h2>
      <Container>
        <form onSubmit={handleSubmit} noValidate>
          <button>Text Style1</button>
          <Button>Text Style1</Button>
          <br />
          <FormControl style={{ minWidth: "100%" }}>
            <InputLabel htmlFor="age-simple">Music</InputLabel>
            <Select
              autoWidth
              value="select sound"
              onChange={handleChange}
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
};
export default LeftPanel;
