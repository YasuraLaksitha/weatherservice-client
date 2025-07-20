import {RiSendPlaneLine} from "react-icons/ri";
import type {WeatherStates} from "../model/WeatherStates.ts";

type WeatherStatesComponentLayoutAProps = {
    weatherStatus: WeatherStates
}

export function WeatherStatesComponentLayoutA(props: Readonly<WeatherStatesComponentLayoutAProps>) {

    const details: WeatherStates = props.weatherStatus;

    return (
        <div className={"relative grid grid-cols-2 lg:grid-cols-3 bg-slate-600 grid-rows-1 py-5 px-5 rounded-b-lg"}>
            <div className={"grid grid-rows-3 gap-y-2  border-r border-white/20 lg:border-none"}>
                <span className={"text-sm text-white"}>
                     <strong>Pressure:</strong> {details.pressure}
                </span>
                <span className={"text-sm text-white"}>
                    <strong>Humidity:</strong> {details.humidity}
                </span>
                <span className={"text-sm text-white"}>
                    <strong>Visibility:</strong> {details.visibility}
                </span>
            </div>

            <div className={"hidden lg:grid grid-rows-2 border-x border-white/20"}>
                <div className={"flex self-end justify-center"}>
                    <RiSendPlaneLine size={30} color={"white"}/>
                </div>
                <span className={"flex px-3 items-center text-sm text-white justify-center self-end"}>
                    <strong>{details.windDetails}</strong>
                </span>
            </div>

            <div className={"grid grid-rows-2 my-2 justify-end mx-3"}>
                <span className={"text-sm text-white"}>
                     <strong>Sunrise:</strong> {details.sunrise}
                </span>
                <span className={"text-sm text-white"}>
                    <strong>Sunset:</strong> {details.sunset}
                </span>
            </div>
        </div>
    )
}