import { Link } from 'react-router-dom';

import HistoryIcon from '@/shared/icons/HistoryIcon';
import { SearchWeather } from '@/features/searchWeather/ui/SearchWeather';

import cl from './styles.module.css';

const Header = () => {
  return (
    <header className={cl.header}>
      <SearchWeather />
      <Link to="/search-history">
        <HistoryIcon />
      </Link>
    </header>
  );
};

export default Header;
