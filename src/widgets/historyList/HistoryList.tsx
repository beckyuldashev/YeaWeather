import HistoryItem from '@/pages/searchHistory/ui/historyItem/HistoryItem';
import { IWeatherHistory } from '@/entities/weather/model/types';

import cl from './styles.module.css';

interface HistoryListProps {
  history: IWeatherHistory[];
}

const HistoryList = ({ history }: HistoryListProps) => {
  return (
    <ul className={cl.list}>
      {history.map((item, index) => (
        <HistoryItem key={index} {...item} />
      ))}
    </ul>
  );
};

export default HistoryList;
