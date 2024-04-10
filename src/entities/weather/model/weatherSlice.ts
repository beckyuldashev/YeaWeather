import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IWeather } from './types';

interface State {
  weatherData: IWeather;
  searchTerm: string;
}

const initialState: State = {
  weatherData: {
    weather: [
      {
        id: 501,
        main: 'Rain',
        description: 'moderate rain',
        icon: '10d',
      },
    ],
    main: {
      temp: 298.48,
      feels_like: 298.74,
      humidity: 64,
    },
    wind: {
      speed: 0.62,
    },
    name: 'no name',
    dt: 1661870592,
    sys: {
      type: 2,
      id: 2075663,
      country: 'IT',
      sunrise: 1661834187,
      sunset: 1661882248,
    },
    timezone: 7200,
    id: 3163858,
  },
  searchTerm: '',
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setWeatherData: (state, action: PayloadAction<IWeather>) => {
      state.weatherData = action.payload;
    },
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { setWeatherData, setSearchTerm } = weatherSlice.actions;

export default weatherSlice.reducer;
