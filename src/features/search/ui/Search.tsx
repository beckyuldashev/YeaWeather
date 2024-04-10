import { useAppDispatch, useAppSelector } from '@/app/appStore';
import { setSearchTerm } from '@/entities/weather/model/weatherSlice';
import Input from '@/shared/ui/input/Input';
import SearchIcon from '@/shared/icons/SearchIcon';

import cl from './styles.module.css';

export const Search = () => {
  const searchTerm = useAppSelector((state) => state.weather.searchTerm);
  const dispatch = useAppDispatch();
  const changeSearchTerm = (value: string) => {
    dispatch(setSearchTerm(value));
  };

  return (
    <div className={cl.search}>
      <Input
        type="search"
        placeholder="Search city"
        value={searchTerm}
        onChange={(e) => changeSearchTerm(e.target.value)}
        className={cl.input}
      />
      <button className={cl.btn}>
        <SearchIcon width="16px" height="16px" />
      </button>
    </div>
  );
};
