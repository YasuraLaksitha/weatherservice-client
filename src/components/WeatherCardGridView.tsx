import {weatherData} from "../customData/CustomData.ts";
import type {WeatherData} from "../model/WeatherData.ts";
import {WeatherCardComponent} from "./WeatherCardComponent.tsx";

export function WeatherCardGridView() {

    return(
        <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {weatherData?.map((data: WeatherData, index: number) => (
                    <WeatherCardComponent key={index} value={data} />
                ))}
            </div>
        </div>
    )
}