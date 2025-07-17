import {configureStore} from "@reduxjs/toolkit";
import weatherDataReducer from "../store/WeatherDataSlice.ts"

export const Store = configureStore({
    reducer: {
        weatherData: weatherDataReducer
    }
});

export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch