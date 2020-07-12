export const API = {
  all: () => "world/total",
  country: (country) => `total/country/${country}`,
  date: (country, from, to) => `country/${country}?from=${from}&to=${to || from}`
};