import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import qs from 'qs';

import { useLazyGetWeatherDataQuery } from '@/entities/weather/api/weatherApi';
import { capitalize } from '@/shared/helpers/capitalize';
import Input from '@/shared/ui/input/Input';
import SearchIcon from '@/shared/icons/SearchIcon';

import cl from './styles.module.css';

export const SearchWeather = () => {
  const [searchValue, setSearchValue] = useState('');
  const [getWeatherFromSearch] = useLazyGetWeatherDataQuery();
  const navigate = useNavigate();

  const onSearchCity = () => {
    if (!searchValue) return;

    getWeatherFromSearch(capitalize(searchValue));
    setSearchValue('');

    const queryString = qs.stringify({
      city: capitalize(searchValue),
    });

    navigate(`?${queryString}`);
  };

  return (
    <div className={cl.search}>
      <Input
        type="search"
        placeholder="Search city"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className={cl.input}
      />
      <button className={cl.btn} onClick={onSearchCity}>
        <SearchIcon width="16px" height="16px" />
      </button>
    </div>
  );
};
