import axios from 'axios';

export const pokemonApi = axios.create();
export const baseUrl = 'https://pokeapi.co/api/v2/pokemon?limit=40';