import { createBrowserRouter } from 'react-router-dom';

import { ErrorPage } from '@/pages/error/ui/ErrorPage';
import { HomePage } from '@/pages/home/ui/HomePage';
import { WeatherSearchHistoryPage } from '@/pages/searchHistory/WeatherSearchHistory';

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/search-history',
    element: <WeatherSearchHistoryPage />,
  },
]);
