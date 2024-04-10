import { useRouteError } from 'react-router-dom';

import cl from './styles.module.css';

export const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className={cl.error}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};
