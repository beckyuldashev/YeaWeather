import { useNavigate } from 'react-router-dom';

import { IWeatherHistory } from '@/entities/weather/model/types';

import cl from './styles.module.css';

const HistoryItem = ({ city, date }: IWeatherHistory) => {
  const navigate = useNavigate();

  return (
    <li className={cl.item} onClick={() => navigate(`/?city=${city}`, { state: city })}>
      <h3>{city}</h3>
      <p>{date}</p>
    </li>
  );
};

export default HistoryItem;
