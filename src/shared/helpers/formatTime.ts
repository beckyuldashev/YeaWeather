export const formatTime = (unixTime: number): string => {
  const date = new Date(unixTime * 1000);

  const options: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  };

  return date.toLocaleTimeString('en-US', options);
};
