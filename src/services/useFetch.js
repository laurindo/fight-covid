import useSWR from "swr";
import {config} from "../config";

export const useFetch = url => {
  return useSWR(`${config.api}/${url}`, async url => {
    const response = await fetch(url);
    return response.json();
  });
};