import type {WeatherData} from "../model/WeatherData.ts";

const formatCityName = (cityName: string, countryName: string) => `${cityName},${countryName}`

const formatTemperature = (temp: number): string => `${temp}°C`;

const formatHumidity = (humidity: number) => `${humidity}%`;

const formatVisibility = (visibility: number) => `${visibility}km`;

const formatWindDetails = (windSpeed: number, degree: number) => `${windSpeed}m/s ${degree} Degree`;

const formatPressure = (pressure: number) => `${pressure}hPa`;

export const formatedData = (data: WeatherData) => ({
    countryName:formatCityName(data.cityName,data.country),
    temp: formatTemperature(data.temp),
    tempMax: formatTemperature(data.tempMax),
    tempMin: formatTemperature(data.tempMin),
    pressure: formatPressure(data.pressure),
    humidity: formatHumidity(data.humidity),
    visibility: formatVisibility(data.visibility),
    windDetails: formatWindDetails(data.windSpeed, data.windDegree)
})
