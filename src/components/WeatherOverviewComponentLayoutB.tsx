import type {WeatherOverview} from "../model/WeatherOverview.ts";

type WeatherOverviewComponentLayoutBProps = {
    bgColor: string,
    data: WeatherOverview
}

export function WeatherOverviewComponentLayoutB(props: Readonly<WeatherOverviewComponentLayoutBProps>) {
    const weatherData: WeatherOverview = props.data;

    return (
        <div className={`relative overflow-hidden h-full rounded-t-lg ${props.bgColor} bg-cover bg-center flex items-center justify-center px-1 transition-transform duration-300 hover:scale-105`}>

            <div className={'absolute inset-0 bg-[url(/paper_clouds.jpg)] bg-cover bg-center opacity-40 z-0'}/>

            <div className={"relative grid grid-rows-2 gap-x-20"}>
                <div className={"flex flex-col py-3"}>
                    <span className={"text-white justify-center flex font-bold text-xl lg:text-2xl"}>
                        {weatherData.countryName}
                    </span>
                    <span className={"text-white font-semibold text-md justify-center flex"}>
                        {weatherData.date}
                    </span>
                </div>

                <div className={"relative grid pb-6 grid-cols-2 gap-x-10 sm:px-10 "}>
                    <div className={"flex flex-col justify-center border-r border-white"}>
                        <div>
                            <img src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
                                 alt={weatherData.icon}/>
                        </div>
                        <span className={"text-white font-bold flex text-lg px-4 "}>
                            {weatherData.weatherDescription}
                        </span>
                    </div>

                    <div className={"grid grid-rows-2 gap-y-3 pe-3"}>
                        <span className={"text-white justify-center items-center flex font-bold text-3xl md:text-4xl lg:text-5xl"}>
                            {weatherData.temp}
                        </span>
                        <div className={"grid justify-center grid-rows-2 self-end"}>
                            <div className={"text-white font-bold text-sm"}>{"Temp Min: " + weatherData.tempMin}</div>
                            <div className={"text-white font-bold text-sm"}>{"Temp Max: " + weatherData.tempMax}</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}