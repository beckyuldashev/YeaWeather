import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import qs from 'qs';

import { useAppSelector } from '@/app/appStore';
import Header from '@/widgets/header/Header';
import FavoritesList from '@/widgets/favoritesList/FavoritesList';
import WeatherItem from '@/entities/weather/ui/weatherItem/WeatherItem';
import {
  useGetWeatherDataQuery,
  useLazyGetWeatherDataQuery,
} from '@/entities/weather/api/weatherApi';
import Spinner from '@/shared/ui/spinner/Spinner';

import cl from './styles.module.css';

export const HomePage = () => {
  const { search } = useLocation();

  const weatherData = useAppSelector((state) => state.weather.weatherData);

  const { isLoading, error } = useGetWeatherDataQuery(
    search ? qs.parse(search.substring(1)).city : 'Moscow',
  );

  const [getWeatherFromSearch] = useLazyGetWeatherDataQuery();

  useEffect(() => {
    if (search) {
      const params = qs.parse(search.substring(1));

      getWeatherFromSearch(params.city);
    }
  }, []);

  return (
    <div className={`container ${cl.wrapper}`}>
      <Header />
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {error ? (
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
