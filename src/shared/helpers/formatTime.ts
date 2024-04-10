export const formatTime = (unixTime: number): string => {
  const date = new Date(unixTime * 1000);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  return hours + ':' + minutes + ':' + seconds;
};
