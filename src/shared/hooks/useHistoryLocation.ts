import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useHistoryLocation = () => {
  const { state } = useLocation();

  useEffect(() => {
    console.log(state);
  }, [state]);
};
