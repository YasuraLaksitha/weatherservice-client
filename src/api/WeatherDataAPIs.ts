import {createAsyncThunk} from "@reduxjs/toolkit";
import {weatherDataBaseURL} from "../config/AxiosConfig.ts";
import type {AxiosResponse} from "axios";

export const fetchWeatherData = createAsyncThunk(
    "FETCH_WEATHER_DATA",
    async (token: string, thunkAPI) => {
        try {
            const response: AxiosResponse = await weatherDataBaseURL.get("/user/fetch-all", {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
            });
            return response.data;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.response?.data?.message ?? "Something went wrong");
        }
    }
)

weatherDataBaseURL.interceptors.request.use(
    config => {
        console.log('Request: ', config.method?.toUpperCase(), config.url);
        console.log('Headers: ', config.headers);
        if (config.data) console.log('Body:', config.data);

        return config;
    }
)

weatherDataBaseURL.interceptors.response.use(
    response => {
        console.log('Response: ', response.status, response.config.url);
        console.log('Response Correlation ID: ', response.headers['x-correlation-id'])
        console.log('Response Data: ', response.data);

        return response;
    }
)

