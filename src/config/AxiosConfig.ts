import axios from 'axios'

export const weatherDataBaseURL = axios.create({
    baseURL: `${import.meta.env.VITE_SERVER_URL}/weather`
});