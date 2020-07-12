import axios from "axios";
import {config} from "../config";

const errorMessage = error => ({error: error.message});

const requestData = (method, url) => {
  return new Promise((resolve, reject) => {
    axios({
      method,
      url: `${config.api}/${url}`
    })
    .then(response => resolve(response))
    .catch(error => reject(errorMessage(error)));
  });
};

export const API = {
  getBy: (type, value) => requestData("get", `${type}/${value}`).catch(error => error),
  getByDate: (type, value, from, to) => requestData("get", `${type}/${value}?${from}&${to}`).catch(error => error),
  getCountries: () => requestData("get", "countries").catch(error => error),
  getTotalByCountry: country => requestData("get", "total/country/", country).catch(error => error),
  getTotalCases: () => requestData("get", "world/total").catch(error => error),

  all: () => "world/total",
  country: (country) => `total/country/${country}`,
  date: (country, from, to) => {
    return `country/${country}?from=${from}&to=${to || from}`;
  }
};