import { useState } from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import RecyclingIcon from "@mui/icons-material/Recycling";

export default function MUI() {
  let [click, setClick] = useState(0);

  let handleClick = () => {
    console.log("Button was clicked");
    setClick(click + 1);
  };
  return (
    <>
      <h1>Material UI Demo</h1>
      <Button
        variant="contained"
        startIcon={<DeleteIcon />}
        endIcon={<RecyclingIcon />}
      >
        Delete
      </Button>
      <br /> <br />
      {/* <Button variant="contained" color="primary">
        Default
      </Button>{" "}
      &nbsp;
      <Button variant="contained" color="secondary">
        Default
      </Button>{" "}
      &nbsp;
      <Button variant="contained" color="success">
        Default
      </Button>{" "}
      &nbsp;
      <Button variant="contained" color="error">
        Default
      </Button> */}
      <br /> <br />
      {/* <Button variant="contained" size="small">Click Me</Button> &nbsp;
      <Button variant="contained" size="medium">Click Me</Button> &nbsp;
      <Button variant="contained" size="large">Click Me</Button>  */}
    </>
  );
}
