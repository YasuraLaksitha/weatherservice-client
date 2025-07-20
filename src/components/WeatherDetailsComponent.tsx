import {formatedData, getDate} from "../utils/DataFormatter.ts";
import {FaExclamationTriangle} from "react-icons/fa";
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../store/Hooks.ts";
import type {RootState} from "../store/ConfigStore.ts";
import type {WeatherData} from "../model/WeatherData.ts";
import {useEffect, useState} from "react";
import {fetchWeatherData} from "../api/WeatherDataAPIs.ts";
import {LoaderComponent} from "./LoaderComponent.tsx";
import {useAuth0} from "@auth0/auth0-react";
import {pickRandomColor} from "../utils/ColorPicker.ts";
import {WeatherStatesComponentLayoutB} from "./WeatherStatesComponentLayoutB.tsx";
import {WeatherTitleComponent} from "./WeatherTitleComponent.tsx";
import {WeatherOverviewComponentLayoutB} from "./WeatherOverviewComponentLayoutB.tsx";

type WeatherDetailsComponentParamProps = {
    cityName: string
}

export function WeatherDetailsComponent() {
    const {cityName} = useParams<WeatherDetailsComponentParamProps>();
    const [bgColor, setBgColor] = useState<string | undefined>('');
    const {isLoading, error, weatherData} = useAppSelector((state: RootState) => state.weather);
    const dispatch = useAppDispatch();
    const {getAccessTokenSilently} = useAuth0();

    const date: string = getDate();

    useEffect(() => {
        const loadData = async () => {
            const token: string = await getAccessTokenSilently();
            dispatch(fetchWeatherData(token));
        }
        loadData()
            .catch((err) => {
                console.error("Error in loadData:", err);
            });

        setBgColor(pickRandomColor(cityName!));

    }, [dispatch, getAccessTokenSilently, cityName]);

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
            <div className='flex justify-center items-center h-[200px] mt-4'>
                <FaExclamationTriangle className='text-slate-800 text-3xl mr-2'/>
                <span className='text-slate-800 font-medium text-lg'>
                    {error}
                </span>
            </div>
        )
    }

    const {countryName, temp, tempMax, tempMin, pressure, humidity, visibility, windDetails} = formatedData(details);

    return isLoading ? (
        <div className='theme-dark-bg flex justify-center items-center min-h-screen mt-4'>
            <LoaderComponent/>
        </div>
    ) : (
        <div className={"theme-dark-bg min-h-screen "}>

            <WeatherTitleComponent/>

            <div className={"relative z-10 flex items-center justify-center  px-4"}>
                <div className={"w-full max-w-4xl shadow-xl rounded-t-lg overflow-hidden"}>

                    <WeatherOverviewComponentLayoutB
                        bgColor={bgColor!}
                        data={{
                            countryName: countryName,
                            cityName: cityName!,
                            date: date,
                            temp: temp,
                            icon: details.icon,
                            weatherDescription: details.weatherDescription,
                            tempMin: tempMin,
                            tempMax: tempMax
                        }}/>

                    <WeatherStatesComponentLayoutB
                        weatherStatus={{
                            pressure: pressure,
                            humidity: humidity,
                            visibility: visibility,
                            windDetails: windDetails,
                            sunrise: details.sunrise,
                            sunset: details.sunset
                        }}
                    />
                </div>
            </div>

        </div>
    );
}
