import type {WeatherData} from "../model/WeatherData.ts";

const formatCityName = (cityName: string, countryName: string) => `${cityName},${countryName}`

const formatTemperature = (temp: number): string => `${temp}°C`;

const formatHumidity = (humidity: number) => `${humidity}%`;

const formatVisibility = (visibility: number) => `${visibility}km`;

const formatWindDetails = (windSpeed: number, degree: number) => `${windSpeed}m/s ${degree} Degree`;

const formatPressure = (pressure: number) => `${pressure}hPa`;

export const formatedData = (data: WeatherData) => ({
    countryName: formatCityName(data.cityName, data.country),
    temp: formatTemperature(data.temp),
    tempMax: formatTemperature(data.tempMax),
    tempMin: formatTemperature(data.tempMin),
    pressure: formatPressure(data.pressure),
    humidity: formatHumidity(data.humidity),
    visibility: formatVisibility(data.visibility),
    windDetails: formatWindDetails(data.windSpeed, data.windDegree)
})

export const getDate = () => {
    const date = new Date();

    let hours: number = date.getHours();
    let mins: string | number = date.getMinutes();
    const suffix: string = hours > 12 ? 'Am' : 'Pm';

    hours = hours % 12 || 12;
    mins = mins < 0 ? '0' + mins : mins;

    const months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const month:string = months[date.getMonth()];
    const day:number = date.getDate();

    return `${hours}.${mins}${suffix}, ${month} ${day}`;
}