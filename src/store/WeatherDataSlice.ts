import type {WeatherData} from "../model/WeatherData.ts";
import {createSlice} from "@reduxjs/toolkit";
import {fetchWeatherData} from "../api/WeatherDataAPIs.ts";

type WeatherDataStateProps = {
    weatherData?: [WeatherData],
    isLoading?: boolean,
    error?: string,
    message?: string
}

const initWeatherDataState: WeatherDataStateProps = {
    weatherData: undefined,
    isLoading: undefined,
    error: undefined,
    message: undefined
}

const weatherDataSlice = createSlice({
    name: "WEATHER_DATA_SLICE",
    initialState: initWeatherDataState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchWeatherData.pending, state => {
                state.isLoading = true;
            })
            .addCase(fetchWeatherData.rejected, (state,action) => {
                state.isLoading = false;
                state.error = action.error.message
            })
            .addCase(fetchWeatherData.fulfilled, (state,action) => {
                state.isLoading = false;
                state.weatherData = action.payload.weatherApiResponseList
            })
    }
})

export default weatherDataSlice.reducer;

