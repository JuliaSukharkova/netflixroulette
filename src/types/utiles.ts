export const getTimeFromMins = (runtime: any) => {
  const hours = Math.trunc(runtime / 60);
  const minutes = runtime % 60;
  return hours + "h" + minutes + "min";
};