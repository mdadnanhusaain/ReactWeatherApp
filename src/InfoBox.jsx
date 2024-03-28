import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import "./InfoBox.css";

export default function InfoBox({ info }) {
  return (
    <div className="infoBox">
      <div className="cardContainer">
        <Card sx={{ width: 345 }} className="Card">
          <CardMedia
            sx={{ height: 140 }}
            image={info.small}
            title={info.weather}
            component="img"
          />
          <CardContent>
            <Typography variant="h5" component="div">
              {info.city}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <span>
                <sup>
                  <i>{info.weather}</i>
                </sup>
              </span>
              <div>
                Temperature : <b>{info.temp}&deg;</b>
              </div>
              <div>
                Humidity : <b>{info.humid}%</b>
              </div>
              <div>
                Feels Like :<b>{info.feelsLike}&deg;</b>
              </div>
              <div>
                Max Temperature : <b>{info.maxTemp}&deg;</b>
              </div>
              <div>
                Min Temperature : <b>{info.minTemp}&deg;</b>
              </div>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
