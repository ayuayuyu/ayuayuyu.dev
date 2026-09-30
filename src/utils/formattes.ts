export const formattedDate = (date: string) => {
  const [year, month, day] = date.split('-');
  return `${year}.${parseInt(month, 10)}.${parseInt(day, 10)}`;
};

// 西暦の年月を和暦の略記(H16.7 / R2.4)にする。令和は 2019年5月から
export const toWareki = (year: number, month: number) => {
  if (year > 2019 || (year === 2019 && month >= 5)) {
    return `R${year - 2018}.${month}`;
  }
  return `H${year - 1988}.${month}`;
};
