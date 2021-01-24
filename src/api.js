const baseUrl = "https://swapi.dev/api/";

//people url
export const peopleUrl = () => `${baseUrl}people/`;
export const specificPersonUrl = (id) => `${peopleUrl}${id}`;

//films url
export const filmsUrl = () => `${baseUrl}films/`;
export const specificFilmUrl = (id) => `${filmsUrl}${id}`;

//Star ships url
export const starShipsUrl = () => `${baseUrl}starships/`;
export const specificStarShipUrl = (id) => `${starShipsUrl}${id}`;

//Vehicles url
export const vehiclesUrl = () => `${baseUrl}vehicles/`;
export const specificVehiclesUrl = (id) => `${vehiclesUrl}${id}`;

//species url
export const speciesUrl = () => `${baseUrl}species/`;
export const specificSpecieUrl = (id) => `${speciesUrl}${id}`;

//planets url
export const planetsUrl = () => `${baseUrl}planets/`;
export const specificPlanetUrl = (id) => `${planetsUrl}${id}`;
