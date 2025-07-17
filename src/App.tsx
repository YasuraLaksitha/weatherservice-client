import {WeatherCardComponent} from "./components/WeatherCardComponent.tsx";
import {weatherData} from "./customData/CustomData.ts";

function App() {
  return (
    <>
      <WeatherCardComponent value={weatherData}/>
    </>
  )
}

export default App
