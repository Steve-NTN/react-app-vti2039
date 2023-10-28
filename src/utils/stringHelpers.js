export const formatDatetime = (datetime) => {
  const data = new Date(datetime);
  return `${data.getDate()}/${data.getMonth()}/${data.getFullYear()}`;
};
