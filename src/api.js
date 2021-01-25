const baseUrl = "https://rickandmortyapi.com/api";

//people url
export const charactersUrl = (page) => `${baseUrl}/character/?page=${page}`;
export const specificCharacterUrl = (id) => `${baseUrl}/character/${id}`;

//locations url
export const locationsUrl = (page) => `${baseUrl}/location/?page=${page}`;
export const specificLocationUrl = (id) => `${baseUrl}/location/${id}`;
