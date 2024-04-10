import { IFavoritesCity } from '../../model/types';

import cl from './styles.module.css';

const FavoritesCityItem = ({ city, icon, temp, status }: IFavoritesCity) => {
  return (
    <div className={cl.item}>
      <img className={cl.img} src={`https://openweathermap.org/img/w/${icon}.png`} alt={status} />
      <h4 className={cl.city}>{city}</h4>
      <span className={cl.temp}>{temp}&deg;C</span>
    </div>
  );
};

export default FavoritesCityItem;
