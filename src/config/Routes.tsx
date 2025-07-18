import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import {WeatherCardGridView} from "../components/WeatherCardGridView.tsx";
import {WeatherDetailsComponent} from "../components/WeatherDetailsComponent.tsx";

export const AppRoutes =  createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                index: true,
                element: <WeatherCardGridView/>
            },
            {
                path: '/:cityName/view',
                element: <WeatherDetailsComponent/>
            }
        ]
    }
])