import axios from 'axios'



export async function searchCityTemps(city: string, unit: string) {

    console.log('key', process.env.REACT_APP_WEATHER_KEY)

    const temperatureValues = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&unit=${unit}&appid=${process.env.REACT_APP_WEATHER_KEY}`);

  return temperatureValues;
}