import { createBrowserRouter } from 'react-router-dom';

import { ErrorPage } from '@/pages/error/ui/ErrorPage';
import { HomePage } from '@/pages/home/ui/HomePage';
import { SearchHistoryPage } from '@/pages/searchHistory/SearchHistory';

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/search-history',
    element: <SearchHistoryPage />,
  },
]);
