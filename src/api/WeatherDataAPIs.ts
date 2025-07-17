import {createAsyncThunk} from "@reduxjs/toolkit";
import {weatherDataBaseURL} from "../config/AxiosConfig.ts";
import type {AxiosResponse} from "axios";

export const fetchWeatherData = createAsyncThunk(
    "FETCH_WEATHER_DATA",
    async(_,thunkAPI)=> {
        try {
           const response: AxiosResponse = await weatherDataBaseURL.get("/fetch-all");
           return response.data;
        }catch (error: any){
            return thunkAPI.rejectWithValue(error.response?.data?.message ?? "Something went wrong");
        }
    }
)