import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IWeather, IWeatherHistory } from './types';

interface State {
  weatherData: IWeather | null;
  history: IWeatherHistory[];
}

const initialState: State = {
  weatherData: null,
  history: [],
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setWeatherData: (state, action: PayloadAction<IWeather>) => {
      state.weatherData = action.payload;
    },
    setHistory: (state, action: PayloadAction<IWeatherHistory>) => {
      state.history.unshift(action.payload);
    },
  },
});

export const { setWeatherData, setHistory } = weatherSlice.actions;

export default weatherSlice.reducer;
