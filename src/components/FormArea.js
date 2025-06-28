import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Fab from "@mui/material/Fab";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Zoom from "@mui/material/Zoom";

function FormArea(props) {
  const [feedBack, setFeedBack] = useState({
    username: "",
    feedback: "",
    rating: "",
    timing: "",
  });
  const [notFocus, setFocus] = useState(false);
  const [notView, setView] = useState(false);
  const [isZoom, setZoom] = useState(false);
  function viewField() {
    setView(true);
    setZoom(true);
  }
  function changeFocus() {
    setFocus(true);
  }
  function normalState() {
    setFocus(false);
  }

  function userAreaChange(e) {
    const { name, value, type, checked } = e.target;
    setFeedBack((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
            ? new Date().toLocaleTimeString("en-US", { hour12: false })
            : ""
          : value,
    }));
  }

  function FormChange(e) {
    e.preventDefault();
    props.onGet(feedBack);
    setFeedBack({
      username: "",
      feedback: "",
      rating: "",
      timing: "",
    });
    setFocus(false);
  }

  return (
    <>
      <form onSubmit={FormChange}>
        <div style={{ display: notView ? "block" : "none" }} className="input">
          <Zoom in={isZoom}>
            <Box sx={{ width: "100%", maxWidth: "100%" }} autoComplete="off">
              <TextField
                color="primary"
                onChange={userAreaChange}
                name="username"
                value={feedBack.username}
                className="inputTextField"
                label="Name"
                helperText="Please enter your name"
                fullWidth
                required
              />
            </Box>
          </Zoom>
        </div>
        <div className="inputText">
          <Zoom in={true}>
            <Box sx={{ width: 500, maxWidth: "100%" }} autoComplete="off">
              <TextareaAutosize
                className="textarea"
                onChange={userAreaChange}
                aria-label="empty textarea"
                placeholder={notFocus ? "Enter Feedback" : "Feedback*"}
                value={feedBack.feedback}
                name="feedback"
                minRows={5}
                style={{ width: "100%" }}
                required
                onClick={viewField}
                onFocus={changeFocus}
                onBlur={normalState}
              />
            </Box>
          </Zoom>
        </div>
        <div
          style={{ display: notView ? "block" : "none" }}
          className="inputCheck"
        >
          <Zoom in={isZoom}>
            <Box sx={{ minWidth: 420 }}>
              <FormControl fullWidth>
                <InputLabel id="rating-label">Rating</InputLabel>
                <Select
                  labelId="rating-label"
                  id="check"
                  value={feedBack.rating}
                  label="Rating"
                  onChange={userAreaChange}
                  name="rating"
                >
                  <MenuItem value={1}>Bad</MenuItem>
                  <MenuItem value={2}>Not Bad</MenuItem>
                  <MenuItem value={3}>Good</MenuItem>
                  <MenuItem value={4}>Excellent</MenuItem>
                  <MenuItem value={5}>Superb</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Zoom>
        </div>
        <div
          style={{ display: notView ? "block" : "none" }}
          className="inputTime"
        >
          <Zoom in={isZoom}>
            <FormGroup>
              <FormControlLabel
                style={{ color: "#333" }}
                required
                control={<Checkbox />}
                label="just for note the time"
                onChange={userAreaChange}
                checked={!!feedBack.timing}
                name="timing"
              />
            </FormGroup>
          </Zoom>
        </div>
        <div
          style={{ display: notView ? "block" : "none" }}
          className="inputSubmit"
        >
          <Zoom in={isZoom}>
            <Fab variant="extended" color="primary" size="medium" type="submit">
              <span>
                submit{" "}
                <em>
                  <i className="fa fa-plus" aria-hidden="true"></i>
                </em>
              </span>
            </Fab>
          </Zoom>
        </div>
      </form>
    </>
  );
}

export default FormArea;
