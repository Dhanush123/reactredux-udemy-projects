import axios from "axios";

const API_KEY = "9a865f388a7a82af09812eb68b363182";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = "FEATCH_WEATHER";

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);
    console.log("weather request:",request);
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}