import React, { useEffect, useRef, useState } from 'react'
import { SinglePokemon, PokemonResPaginated, Result } from '../interfaces/pokemonInterface';
import { pokemonApi, baseUrl } from '../api/pokemonApi'

export const usePokemonPaginated = () => {

  const [singlePokemonList, setSinglePokemonList] = useState<SinglePokemon[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  /* Get the first Pokemon data (1...40 records, 41..) */
  const recordPageUrl = useRef(baseUrl);

  const loadPokemonData = async() => {
    setIsLoading(true);
    const res = await pokemonApi.get<PokemonResPaginated>(recordPageUrl.current);
    recordPageUrl.current = res.data.next;
    mapPokemonList(res.data.results);
  };

  /* Build single Pokemon information */
  const mapPokemonList = (pokemonList:Result[]) => {
    const newPokemonList: SinglePokemon[] = pokemonList.map(({name, url}) => {
      /* Structure to get ID from: https://pokeapi.co/api/v2/pokemon/25/ */
      let extractUrlInfo = url.split('/');
      let id = extractUrlInfo[extractUrlInfo.length - 2];
      let image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
      return {
        id, 
        name,
        image,
      }
    });

    /* Update state */
    setSinglePokemonList([...singlePokemonList, ...newPokemonList]);
    setIsLoading(false);
  };

  useEffect(() => {
    loadPokemonData();
  }, []);

  return {
    isLoading,
    loadPokemonData,
    singlePokemonList
  }
}
