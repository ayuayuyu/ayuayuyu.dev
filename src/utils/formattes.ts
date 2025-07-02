export const formattedDate = (date: string) => {
  const [year, month, day] = date.split('-');
  return `${year}.${parseInt(month, 10)}.${parseInt(day, 10)}`;
};
