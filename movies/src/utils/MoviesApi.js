import { movies_url } from "./constants";

export const getMovies = () => {
  return fetch(`${movies_url}/beatfilm-movies`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then(checkResponse);
};

const checkResponse = (res) =>
  res.ok ? res.json() : Promise.reject(`Error ${res.statusText}`);
