import { Link } from 'react-router-dom';

import HistoryIcon from '@/shared/icons/HistoryIcon';

import cl from './styles.module.css';
import { Search } from '@/features/search/ui/Search';

const Header = () => {
  return (
    <header className={cl.header}>
      <Search />
      <Link to="/search-history">
        <HistoryIcon />
      </Link>
    </header>
  );
};

export default Header;
