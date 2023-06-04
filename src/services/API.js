export const API = {
  all: () => "",
  country: (country) => `${country}`,
  countries: () => `countries`,
  date: (country, from) => `${country}/${from}`
};

/*
all Data
{
  "data": [
    {
      "uid": 11,
      "uf": "Rondônia",
      "state": "RO",
      "cases": 0,
      "deaths": 0,
      "suspects": 61,
      "refuses": 2,
      "broadcast": false,
      "comments": "",
      "datetime": "2020-03-18T23:00:00.000Z"
    },
    {
      "uid": 12,
      "uf": "Acre",
      "state": "AC",
      "cases": 0,
      "deaths": 0,
      "suspects": 12,
      "refuses": 0,
      "broadcast": false,
      "comments": "",
      "datetime": "2020-03-18T23:00:00.000Z"
    },
    {
      "uid": 13,
      "uf": "Amazonas",
      "state": "AM",
      "cases": 1,
      "deaths": 0,
      "suspects": 18,
      "refuses": 26,
      "broadcast": false,
      "comments": "",
      "datetime": "2020-03-18T23:00:00.000Z"
    }
   ]
}
*/