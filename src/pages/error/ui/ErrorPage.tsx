import { useRouteError } from 'react-router-dom';

import cl from './styles.module.css';

type ErrorResponse = {
  data: any;
  status: number;
  statusText: string;
  message?: string;
};

const errorCheck = (error: any): error is ErrorResponse => {
  return 'data' in error && 'status' in error && 'statusText' in error;
};

export const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  if (errorCheck(error)) {
    return (
      <div className={cl.error}>
        <h1>Oops! Page not found</h1>
        <p>Sorry the route you are looking for does not exist.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    );
  } else {
    return null;
  }
};
