export const formatDate = (date: Date) => {
  const options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  };

  return date.toLocaleTimeString('en-US', options);
};
