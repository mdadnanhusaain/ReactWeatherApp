let env = import.meta.env;

let getCity = async (position) => {
  let limit = 1;
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let url = `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=${limit}&appid=${env.VITE_API_KEY}`;
  try {
    let response = await fetch(url);
    let jsonRes = await response.json();
    let city = jsonRes[0].name + "";
    return city;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

let searchPhotos = async (searchQuery) => {
  let url = `https://api.unsplash.com/search/photos?page=1&perPage=1&query=${searchQuery}&client_id=${env.VITE_UNSPLASH}&total=1`;
  let res = await fetch(url);
  let jRes = await res.json();
  let num = Math.floor(Math.random() * 10);
  res = {
    small: jRes.results[num].urls.small,
    full: jRes.results[num].urls.regular,
  };
  return res;
};

let getWeatherByCity = async (city, updateInfo) => {
  let API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${env.VITE_API_KEY}&units=metric`;
  try {
    let response = await fetch(API_URL);
    let jsonResponse = await response.json();
    let weather = await setWeatherInfo(jsonResponse);
    updateInfo(weather);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

let getWeatherByCord = async (position, city, updateInfo) => {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${env.VITE_API_KEY}&units=metric`;
  try {
    let response = await fetch(API_URL);
    let jsonResponse = await response.json();
    let weather = await setWeatherInfo(jsonResponse);
    weather = { ...weather, city: jsonResponse.name };
    updateInfo(weather, city);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

let setWeatherInfo = async (jsonResponse) => {
  const query = jsonResponse.weather[0].description;
  let imgUrl = await searchPhotos(query);
  let weather = {
    city: jsonResponse.name,
    temp: jsonResponse.main.temp,
    minTemp: jsonResponse.main.temp_min,
    maxTemp: jsonResponse.main.temp_max,
    humid: jsonResponse.main.humidity,
    feelsLike: jsonResponse.main.feels_like,
    weather: jsonResponse.weather[0].description,
    small: imgUrl.small,
    full: imgUrl.full,
  };
  return weather;
};

export {
  getCity,
  searchPhotos,
  getWeatherByCity,
  getWeatherByCord,
  setWeatherInfo,
};
