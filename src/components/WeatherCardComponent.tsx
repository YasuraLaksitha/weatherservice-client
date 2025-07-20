import type {WeatherData} from "../model/WeatherData.ts";
import {RiSendPlaneLine} from "react-icons/ri";
import {formatedData, getDate} from "../utils/DataFormatter.ts";
import {type NavigateFunction, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {pickRandomColor} from "../utils/ColorPicker.ts";

type WeatherCardComponentProps = {
    value: WeatherData;
}

export function WeatherCardComponent(weatherDetails: Readonly<WeatherCardComponentProps>) {
    const [bgColor, setBgColor] = useState<string|undefined>('');
    const weatherData: WeatherData = weatherDetails.value;
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

    const date:string = getDate();
    const navigate: NavigateFunction = useNavigate();

    useEffect(() => {
        setBgColor(pickRandomColor(weatherData.cityName));
    }, [weatherData.cityName]);

    return (
        <div className={"p-3"}>
            <div className={"sm:max-w-xl shadow-xl overflow-hidden rounded-t-lg transition-shadow duration-300"}>
                <div onClick={() => navigate(`/${weatherData.cityName}/view`)}
                     className={`${bgColor} overflow-hidden h-52 relative hover:scale-105 rounded-t-lg transition-transform duration-300 cursor-pointer flex items-center justify-center px-1 `}>

                    <div className={`absolute opacity-40 inset-0 bg-cover hover:scale-105 bg-center bg-[url('/paper_clouds.jpg')] bg-no-repeat transition-transform duration-300`}/>

                    <div className={"relative z-10 overflow-hidden grid sm:grid-cols-2 grid-rows-2 gap-x-20"}>
                        <div className={"grid grid-rows-2"}>
                            <span className={"text-white justify-center flex font-bold text-xl lg:text-2xl"}>
                                {countryName}
                            </span>
                            <span className={"text-white font-semibold text-md justify-center flex"}>
                                {date}
                            </span>
                        </div>
                        <span
                            className={"text-white justify-center items-center flex font-bold text-3xl md:text-4xl lg:text-5xl"}>
                            {temp}
                        </span>

                        <div className="text-white flex items-center gap-2 self-center font-bold justify-center text-lg pb-2 md:pb-0 md:ps-3">
                            <img
                                src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
                                alt={weatherData.icon}
                                width={50}
                                height={50}
                            />
                            <span>{weatherData.weatherDescription}</span>
                        </div>

                        <div className={"grid justify-center grid-rows-2 self-end"}>
                            <div className={"text-white font-bold text-sm"}>{"Temp Min: " + tempMin}</div>
                            <div className={"text-white font-bold text-sm"}>{"Temp Max: " + tempMax}</div>
                        </div>
                    </div>
                </div>

                <div className={"relative grid grid-cols-2 lg:grid-cols-3 bg-slate-600 grid-rows-1 py-5 px-5 rounded-b-lg"}>
                    <div className={"grid grid-rows-3 gap-y-2  border-r border-white/20 lg:border-none"}>
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
                    <div className={"hidden lg:grid grid-rows-2 border-x border-white/20"}>
                        <div className={"flex self-end justify-center"}>
                            <RiSendPlaneLine size={30} color={"white"}/>
                        </div>
                        <span className={"flex px-3 items-center text-sm text-white justify-center self-end"}>
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
