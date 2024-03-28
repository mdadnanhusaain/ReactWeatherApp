import "./SearchBox.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import { useEffect, useState } from "react";
import { getCity, getWeatherByCord, getWeatherByCity } from "./helper";

let INIT_CITY = "Ranchi";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  let inputHandler = (event) => {
    setCity(event.target.value);
  };

  let formSubmit = async (event) => {
    try {
      event.preventDefault();
      setCity("");
      let weather = await getWeatherByCity(city, updateInfo);
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    async function firstCall() {
      let city = await navigator.geolocation.getCurrentPosition(
        async (position) => await getCity(position)
      );
      await navigator.geolocation.getCurrentPosition(
        async (position) => await getWeatherByCord(position, city, updateInfo)
      );
    }
    firstCall();
  }, []);

  return (
    <div className="SearchBox">
      <form onSubmit={formSubmit} autoComplete="off">
        <TextField
          id="outlined-basic"
          label="City"
          variant="outlined"
          size="small"
          value={city}
          onChange={inputHandler}
          required
        />{" "}
        &nbsp;
        <Button type="submit" variant="contained" size="">
          Search
        </Button>
        {error && (
          <Alert className="error" severity="error" style={{ width: "20rem" }}>
            No Such Place Found!!!
          </Alert>
        )}
      </form>
    </div>
  );
}
