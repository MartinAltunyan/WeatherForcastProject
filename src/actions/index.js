import axios from "axios";


const API_KEY="d5b44a7ead7a29ad2b779d6fefb1b5cf";
const API_KEY_GOOGLE='AIzaSyAaReInr43kcsS2-TM6WffA1F8_3fQhrCU';

const ROOT_URL=`https://api.openweathermap.org/data/2.5/forecast?`

//convension
//our Actions needs to be same type as Reducers
export const FETCH_WEATHER="FEATCH_WEATHER"




export function fetchWeather(city){
    const url=`${ROOT_URL}q=${city},us&appid=${API_KEY}`;
    const request = axios.get(url)


  return {
        type:FETCH_WEATHER,
        payload:request
    }
}  

