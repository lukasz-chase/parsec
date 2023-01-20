//axios
import axios from "axios";

const baseUrl = "https://rickandmortyapi.com/api";
//people url
export const charactersUrl = (page, name, status) =>
  `${baseUrl}/character/?page=${page}&name=${name}&status=${status}`;
//locations url
export const locationsUrl = (page, name) =>
  `${baseUrl}/location/?page=${page}&name=${name}`;
//episodes url
export const episodesUrl = (page, name, episode) =>
  `${baseUrl}/episode/?page=${page}&name=${name}&episode=${episode}`;
//specific url
export const specificUrl = (item) => `${baseUrl}/${item}`;

export const getLocation = (id) =>
  axios.get(specificUrl(id)).then((res) => res.data);
