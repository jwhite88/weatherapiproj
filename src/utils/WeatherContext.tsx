import React from 'react';

export interface WeatherData {
    temp: number,
    feelsLike: number,
    humidity: number,
    description: string,
    icon: string,
    windSpeed: number,
    dateTxt: string,
    dt?: number,
    city?: string
}

export interface DegreeState {
    degreeForC: string | null,
    setDegreeForC: (newValue: string) => void,
    weatherData: WeatherData[] | null,
    setWeatherData: (weather: WeatherData[]) => void
}

const degreeDefault = {
    degreeForC: null,
    setDegreeForC: () => undefined,
    weatherData: null,
    setWeatherData: () => undefined
}

const WeatherContext = React.createContext<DegreeState>(degreeDefault);

export default WeatherContext;