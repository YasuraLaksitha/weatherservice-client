export function WeatherTitleComponent() {
    return (
        <div className={"relative z-10 flex flex-row gap-x-3 justify-center  py-10"}>
            <img src="/weather.png" alt="" width={45}/>
            <span className={"text-gray-300 text-3xl font-bold"}>
                    {"Weather App"}
                </span>
        </div>
    )
}