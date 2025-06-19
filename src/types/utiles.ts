export const getTimeFromMins = (filmLength: number) => {
  const hours = Math.trunc(filmLength / 60);
  const minutes = filmLength % 60;
  return hours + " ч " + minutes + " минут ";
};