import moment from "moment";

export const getDate = value => {
  const m = moment(value).utcOffset(0);
  m.set({hour:0,minute:0,second:0,millisecond:0});
  return m.toISOString();
};

export const formatDate = (value, format = "MM/DD/YYYY") => {
  return moment(value).utcOffset(0).format(format);
};

export const getCurrentDate = (value) => {
  return getDate(moment(value).utcOffset(0).add(1, 'd'));
};