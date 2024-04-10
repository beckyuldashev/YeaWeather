import { combineReducers } from '@reduxjs/toolkit';

import weatherReducer from '@/entities/weather/model/weatherSlice';
import { weatherApi } from '@/entities/weather/api/weatherApi';

export const rootReducer = combineReducers({
  weather: weatherReducer,
  [weatherApi.reducerPath]: weatherApi.reducer,
});
