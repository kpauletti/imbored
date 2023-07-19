import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const weatherApi = axios.create({ baseURL: 'https://api.openweathermap.org'});

const getWeather = async (lat: string, lon: string) => {

    const params = new URLSearchParams()
    params.append('lat', lat)
    params.append('lon', lon)
    params.append('units', 'imperial')
    params.append('appid', process.env.NEXT_PUBLIC_WEATHER_APP_ID || '')

    const { data } = await weatherApi.get('/data/2.5/weather', { params });
    return data;
}

export const useGetWeather = (lat: string, lon: string) => {
    
    return useQuery(
        ['weather', lat, lon], 
        () => getWeather(lat, lon), 
        { 
            cacheTime: 1000 * 60 * 60 * 2,
            staleTime: 1000 * 60 * 60 * 2,
            enabled: !!lat && !!lon
        }
    );
}