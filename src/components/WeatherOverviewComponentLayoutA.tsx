import {type NavigateFunction, useNavigate} from "react-router-dom";
import type {WeatherOverview} from "../model/WeatherOverview.ts";

type WeatherOverviewComponentLayoutAProps = {
    bgColor: string,
    data: WeatherOverview
}

export function WeatherOverviewComponentLayoutA(props: Readonly<WeatherOverviewComponentLayoutAProps>) {
    const navigate: NavigateFunction = useNavigate();
    const weatherData: WeatherOverview = props.data;

    return (
        <div onClick={() => navigate(`/${weatherData.cityName}/view`)}
             className={`${props.bgColor} overflow-hidden h-52 relative hover:scale-105 rounded-t-lg transition-transform duration-300 cursor-pointer flex items-center justify-center px-1 `}>

            {/* image overlay */}
            <div className={`absolute opacity-40 inset-0 bg-cover hover:scale-105 bg-center bg-[url('/paper_clouds.jpg')] bg-no-repeat transition-transform duration-300`}/>

            {/* text-group */}
            <div className={"relative z-10 overflow-hidden grid sm:grid-cols-2 grid-rows-2 gap-x-20 group"}>
                <div className={"grid grid-rows-2"}>
                    <span className={"text-white justify-center flex font-bold text-xl lg:text-2xl"}>
                        {weatherData.countryName}
                    </span>
                    <span className={"text-white font-semibold text-md justify-center flex"}>
                        {weatherData.date}
                    </span>
                </div>
                <span className={"text-white justify-center items-center flex font-bold text-3xl md:text-4xl lg:text-5xl"}>
                    {weatherData.temp}
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
                    <div className={"text-white font-bold text-sm"}>{"Temp Min: " + weatherData.tempMin}</div>
                    <div className={"text-white font-bold text-sm"}>{"Temp Max: " + weatherData.tempMax}</div>
                </div>
            </div>
        </div>
    )
}