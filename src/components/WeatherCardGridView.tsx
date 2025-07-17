import type {WeatherData} from "../model/WeatherData.ts";
import {WeatherCardComponent} from "./WeatherCardComponent.tsx";
import {useAppDispatch, useAppSelector} from "../store/Hooks.ts";
import type {RootState} from "../store/ConfigStore.ts";
import {FaExclamationTriangle} from "react-icons/fa";
import {LoaderComponent} from "./LoaderComponent.tsx";
import {useEffect} from "react";
import {fetchWeatherData} from "../api/WeatherDataAPIs.ts";

export function WeatherCardGridView() {
    const {isLoading, error,weatherData} = useAppSelector((state: RootState) => state.weatherData);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchWeatherData())
    }, [dispatch,weatherData]);

    if (error) {
        return (
            <div className='flex justify-center items-center h-[200px] mt-4'>
                <FaExclamationTriangle className='text-slate-800 text-3xl mr-2'/>
                <span className='text-slate-800 font-medium text-lg'>
                    {error}
                </span>
            </div>
        )
    }

    return (
        <div>
            {(isLoading ?
                <div className='flex justify-center items-center h-[200px] mt-4'>
                    <LoaderComponent/>
                </div> :
                <div className="flex justify-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {weatherData?.map((data: WeatherData, index: number) => (
                            <WeatherCardComponent key={index} value={data}/>
                        ))}
                    </div>
                </div>)
            }
        </div>
    )
}