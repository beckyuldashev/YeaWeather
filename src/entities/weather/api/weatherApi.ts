import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { FavoritesCityResponse, IFavoritesCity, IWeather } from '../model/types';

const BASE_URL = import.meta.env.VITE_WEATHER_API_BASE_URL;
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getWeatherData: builder.query<IWeather, string>({
      query: (city) => {
        return {
          url: 'weather',
          params: {
            q: city,
            units: 'metric',
            appid: API_KEY,
          },
        };
      },
    }),
    getFavoritesCityData: builder.query<FavoritesCityResponse, null>({
      query: () => {
        return {
          url: 'group',
          params: {
            id: '2643743,1850147,5128638,1512569',
            units: 'metric',
            appid: API_KEY,
          },
        };
      },
    }),
  }),
});

export const { useGetWeatherDataQuery, useGetFavoritesCityDataQuery } = weatherApi;
