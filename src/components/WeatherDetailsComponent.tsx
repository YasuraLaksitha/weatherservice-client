import {formatedData} from "../utils/DataFormatter.ts";
import {FaExclamationTriangle} from "react-icons/fa";
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../store/Hooks.ts";
import type {RootState} from "../store/ConfigStore.ts";
import type {WeatherData} from "../model/WeatherData.ts";
import {useEffect} from "react";
import {fetchWeatherData} from "../api/WeatherDataAPIs.ts";
import {LoaderComponent} from "./LoaderComponent.tsx";
import {RiSendPlaneLine} from "react-icons/ri";
import {useAuth0} from "@auth0/auth0-react";

type WeatherDetailsComponentParamProps = {
    cityName: string
}

export function WeatherDetailsComponent() {
    const {cityName} = useParams<WeatherDetailsComponentParamProps>();
    const {isLoading, error, weatherData} = useAppSelector((state: RootState) => state.weather);
    const dispatch = useAppDispatch();
    const {getAccessTokenSilently} = useAuth0();

    useEffect(() => {
        const loadData = async () => {
            const token: string = await getAccessTokenSilently();
            dispatch(fetchWeatherData(token));
        }
        loadData()
            .catch((err) => {
                console.error("Error in loadData:", err);
            });
    }, [dispatch, getAccessTokenSilently]);

    const details = weatherData?.find((d: WeatherData) => d.cityName === cityName);

    if (!details) {
        return (
            <div className="text-white text-center mt-10">
                Weather data not found for <strong>{cityName}</strong>
            </div>
        );
    }

    if (error) {
        return (
            <div className='flex  justify-center items-center h-[200px] mt-4'>
                <FaExclamationTriangle className='text-slate-800 text-3xl mr-2'/>
                <span className='text-slate-800 font-medium text-lg'>
                    {error}
                </span>
            </div>
        )
    }

    const {countryName, temp, tempMax, tempMin, pressure, humidity, visibility, windDetails} = formatedData(details);

    return isLoading ? (
        <div className='flex justify-center items-center h-[200px] mt-4'>
            <LoaderComponent/>
        </div>
    ) : (
        <div className={"min-h-screen flex items-center justify-center bg-gray-900 px-4"}>
            <div className={"w-full max-w-4xl shadow-xl overflow-hidden"}>
                <div className={"overflow-hidden h-72 rounded-t-lg relative " +
                    "bg-[url('https://placehold.co/600x400')] bg-cover bg-center flex items-center justify-center px-1 " +
                    "transition-transform duration-300 hover:scale-105"}>

                    <div className={"grid grid-rows-2 gap-x-20"}>
                        <div className={"flex flex-col py-3"}>
                            <span className={"text-white justify-center flex font-bold text-xl lg:text-2xl"}>
                                {countryName}
                            </span>
                            <span className={"text-white font-semibold text-md justify-center flex"}>
                                {"9.9AM, Feb 8"}
                            </span>
                        </div>

                        <div className={"grid grid-cols-2 gap-x-10 sm:px-10"}>
                            <div className={"flex flex-col justify-center border-r border-white"}>
                                <div>
                                    <img src={`https://openweathermap.org/img/wn/${details.icon}@2x.png`}
                                         alt={details.icon}/>
                                </div>
                                <span className={"text-white font-bold flex text-lg"}>
                                    {details.weatherDescription}
                                </span>
                            </div>

                            <div className={"grid grid-rows-2 gap-y-3"}>
                                <span
                                    className={"text-white justify-center items-center flex font-bold text-3xl md:text-4xl lg:text-5xl"}>
                                    {temp}
                                </span>
                                <div className={"grid justify-center grid-rows-2 self-end"}>
                                    <div className={"text-white font-bold text-sm"}>{"Temp Min: " + tempMin}</div>
                                    <div className={"text-white font-bold text-sm"}>{"Temp Max: " + tempMax}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"grid grid-cols-2 lg:grid-cols-3 bg-slate-600 grid-rows-1 py-5 px-5 rounded-b-lg"}>
                    <div className={"grid grid-rows-3 justify-center gap-y-2 border-r border-white/20 lg:border-none"}>
                        <span className={"text-sm text-white"}><strong>Pressure:</strong> {pressure}</span>
                        <span className={"text-sm text-white"}><strong>Humidity:</strong> {humidity}</span>
                        <span className={"text-sm text-white"}><strong>Visibility:</strong> {visibility}</span>
                    </div>
                    <div className={"hidden lg:grid grid-rows-2 border-x border-white/20"}>
                        <div className={"flex self-end justify-center"}>
                            <RiSendPlaneLine size={30} color={"white"}/>
                        </div>
                        <span className={"flex px-3 items-center text-sm text-white justify-center self-end"}>
                            <strong>{windDetails}</strong>
                        </span>
                    </div>
                    <div className={"grid grid-rows-2 my-2 justify-center mx-3"}>
                        <span className={"text-sm text-white"}><strong>Sunrise:</strong> {details.sunrise}</span>
                        <span className={"text-sm text-white"}><strong>Sunset:</strong> {details.sunset}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
