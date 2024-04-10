import FavoritesCityItem from '@/entities/weather/ui/favoritesCityItem/FavoritesCityItem';

import cl from './styles.module.css';
import { useGetFavoritesCityDataQuery } from '@/entities/weather/api/weatherApi';
import Spinner from '@/shared/ui/spinner/Spinner';

const FavoritesList = () => {
  const { data, isLoading, error } = useGetFavoritesCityDataQuery(null);

  return isLoading ? (
    <Spinner />
  ) : (
    <ul className={cl.favorites}>
      {data?.list.map(({ id, main, name, weather }) => (
        <li key={id}>
          <FavoritesCityItem
            temp={main.temp}
            city={name}
            icon={weather[0].icon}
            status={weather[0].main}
          />
        </li>
      ))}

      {error && <h1>Произошла ошибка при загрузке: {error.status}</h1>}
    </ul>
  );
};

export default FavoritesList;
