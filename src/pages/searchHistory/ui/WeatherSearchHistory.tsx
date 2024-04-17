import { Link } from 'react-router-dom';

import { useAppSelector } from '@/app/appStore';
import HistoryList from '@/widgets/historyList/HistoryList';

import cl from './styles.module.css';

export const WeatherSearchHistoryPage = () => {
  const history = useAppSelector((state) => state.weather.history);

  return (
    <>
      <header className={cl.header}>
        <h1>History</h1>
        <Link to="/" className={cl.link}>
          Return to home page
        </Link>
      </header>
      <HistoryList history={history} />
    </>
  );
};
