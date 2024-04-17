import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { useAppSelector } from '@/app/appStore';
import Header from '@/widgets/header/Header';
import FavoritesList from '@/widgets/favoritesList/FavoritesList';
import WeatherItem from '@/entities/weather/ui/weatherItem/WeatherItem';
import {
  useGetWeatherDataQuery,
  useLazyGetWeatherDataQuery,
} from '@/entities/weather/api/weatherApi';
import Spinner from '@/shared/ui/spinner/Spinner';
import { getParam } from '@/shared/helpers/getParam';

import cl from './styles.module.css';

export const HomePage = () => {
  const { search } = useLocation();

  const weatherData = useAppSelector((state) => state.weather.weatherData);

  const { isLoading, error } = useGetWeatherDataQuery(search ? getParam(search, 'city') : 'Moscow');

  const [getWeatherFromSearch] = useLazyGetWeatherDataQuery();

  useEffect(() => {
    if (search) {
      getWeatherFromSearch(getParam(search, 'city'));
    }
  }, []);

  return (
    <div className={`container ${cl.wrapper}`}>
      <Header />
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {error && 'status' in error ? (
            <h1>Произошла ошибка при загрузке: {error.status}</h1>
          ) : (
            <WeatherItem weatherData={weatherData} />
          )}
          <FavoritesList />
        </>
      )}
    </div>
  );
};
