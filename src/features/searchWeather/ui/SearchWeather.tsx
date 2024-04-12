import { useState } from 'react';

import { useAppDispatch } from '@/app/appStore';
import { setSearchTerm } from '@/entities/weather/model/weatherSlice';
import Input from '@/shared/ui/input/Input';
import SearchIcon from '@/shared/icons/SearchIcon';

import cl from './styles.module.css';

export const SearchWeather = () => {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useAppDispatch();
  const onSearchCity = () => {
    console.log(searchValue);
    dispatch(setSearchTerm(searchValue));
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
