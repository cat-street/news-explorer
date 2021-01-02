const getDateString = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}-${month}-${day}`;
};

const calculateDate = (days) => {
  const utc = Date.now() - days * 24 * 60 * 60 * 1000;
  return new Date(utc);
};

export { getDateString, calculateDate };
