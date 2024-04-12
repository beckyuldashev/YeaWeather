import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IWeather } from './types';

interface State {
  weatherData: IWeather | null;
  searchTerm: string;
}

const initialState: State = {
  weatherData: null,
  searchTerm: 'Moscow',
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
