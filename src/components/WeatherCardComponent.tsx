import type {WeatherData} from "../model/WeatherData.ts";
import { RiSendPlaneLine } from "react-icons/ri";
import {
    formatHumidity,
    formatPressure,
    formatTemperature,
    formatVisibility,
    formatWindDetails
} from "../utils/DataFormatter.ts";

type WeatherCardComponentProps = {
    value: WeatherData;
}

export function WeatherCardComponent(weatherDetails: Readonly<WeatherCardComponentProps>) {
    const weatherData: WeatherData = weatherDetails.value;

    const temp: string = formatTemperature(weatherData.temp);
    const tempMax: string = formatTemperature(weatherData.tempMax);
    const tempMin: string = formatTemperature(weatherData.tempMin);
    const pressure: string = formatPressure(weatherData.pressure);
    const humidity: string = formatHumidity(weatherData.humidity);
    const visibility: string = formatVisibility(weatherData.visibility);
    const windDetails: string = formatWindDetails(weatherData.windSpeed, weatherData.windDegree);

    return (
        <div className={"p-3"}>
            <div className={"max-w-xl shadow-xl overflow-hidden transition-shadow duration-300"}>
                <div className={"overflow-hidden h-52 rounded-t-lg relative " +
                    "bg-[url('https://placehold.co/600x400')] bg-cover bg-center hover:scale-105 " +
                    "transition-transform duration-300 cursor-pointer flex items-center justify-center"}>

                    <div className={"grid grid-cols-2 grid-rows-2 gap-x-20"}>
                        <div className={"grid grid-rows-2"}>
                            <span className={"text-white font-bold text-2xl"}>{weatherData.cityName}</span>
                            <span
                                className={"text-white ms-5 font-semibold text-md items-center"}>{"9.9Am,Feb 8"}</span>
                        </div>
                        <span className={"text-white font-bold text-5xl"}>{temp}</span>

                        <span className={"text-white font-bold self-end text-md"}>{weatherData.weatherDescription}</span>

                        <div className={"grid grid-rows-2 self-end"}>
                            <div className={"text-white font-bold text-sm"}>{"Temp Min: " + tempMin}</div>
                            <div className={"text-white font-bold text-sm"}>{"Temp Max: " + tempMax}</div>
                        </div>
                    </div>
                </div>

                <div className={"grid grid-cols-3 bg-slate-600 grid-rows-1 py-5 px-5 rounded-b-lg"}>
                    <div className={"grid grid-rows-3 gap-y-2"}>
                        <span className={"text-sm text-white"}>
                             <strong>Pressure:</strong> {pressure}
                        </span>
                        <span className={"text-sm text-white"}>
                            <strong>Humidity:</strong> {humidity}
                        </span>
                        <span className={"text-sm text-white"}>
                            <strong>Visibility:</strong> {visibility}
                        </span>
                    </div>
                    <div className={"grid grid-rows-2 border-x border-white/20"}>
                        <div className={"flex self-end justify-center"}>
                            <RiSendPlaneLine size={30} color={"white"}/>
                        </div>
                        <span className={"flex items-center text-sm text-white justify-center self-end"}>
                            <strong>{windDetails}</strong>
                        </span>
                    </div>
                    <div className={"grid grid-rows-2 my-2 justify-end mx-3"}>
                        <span className={"text-sm text-white"}>
                             <strong>Sunrise:</strong> {weatherData.sunrise}
                        </span>
                        <span className={"text-sm text-white"}>
                             <strong>Sunset:</strong> {weatherData.sunset}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
