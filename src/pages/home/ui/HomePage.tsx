import { useAppSelector } from '@/app/appStore';
import Header from '@/widgets/header/Header';
import FavoritesList from '@/widgets/favoritesList/FavoritesList';
import WeatherItem from '@/entities/weather/ui/weatherItem/WeatherItem';
import { useGetWeatherDataQuery } from '@/entities/weather/api/weatherApi';
import Spinner from '@/shared/ui/spinner/Spinner';

import cl from './styles.module.css';

export const HomePage = () => {
  const searchTerm = useAppSelector((state) => state.weather.searchTerm);
  const weatherData = useAppSelector((state) => state.weather.weatherData);
  const { isLoading, error } = useGetWeatherDataQuery(searchTerm);

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
