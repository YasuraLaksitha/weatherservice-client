import type {WeatherData} from "../model/WeatherData.ts";
import {formatedData, getDate} from "../utils/DataFormatter.ts";
import {useEffect, useState} from "react";
import {pickRandomColor} from "../utils/ColorPicker.ts";
import {WeatherStatesComponentLayoutA} from "./WeatherStatesComponentLayoutA.tsx";
import {WeatherOverviewComponentLayoutA} from "./WeatherOverviewComponentLayoutA.tsx";

type WeatherCardComponentProps = {
    value: WeatherData;
}

export function WeatherCardComponent(props: Readonly<WeatherCardComponentProps>) {
    const [bgColor, setBgColor] = useState<string | undefined>('');
    const weatherData: WeatherData = props.value;
    const {
        countryName,
        temp,
        tempMax,
        tempMin,
        pressure,
        humidity,
        visibility,
        windDetails,
    } = formatedData(weatherData);

    const date: string = getDate();

    useEffect(() => {
        setBgColor(pickRandomColor(weatherData.cityName));
    }, [weatherData.cityName]);

    return (
        <div className={"p-3"}>
            <div className={"sm:max-w-xl shadow-xl overflow-hidden rounded-t-lg transition-shadow duration-300"}>

                <WeatherOverviewComponentLayoutA
                    bgColor={bgColor!}
                    data={{
                        countryName: countryName,
                        cityName: weatherData.cityName,
                        date: date,
                        temp: temp,
                        icon: weatherData.icon,
                        weatherDescription: weatherData.weatherDescription,
                        tempMin: tempMin,
                        tempMax: tempMax
                    }}/>

                <WeatherStatesComponentLayoutA
                    weatherStatus={{
                        pressure: pressure,
                        humidity: humidity,
                        visibility: visibility,
                        windDetails: windDetails,
                        sunrise: weatherData.sunrise,
                        sunset: weatherData.sunset
                    }}
                />

            </div>
        </div>
    );
}
