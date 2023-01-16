import { useEffect, useState } from 'react'
import { PokemonDetail } from '../interfaces/pokemonInterface';
import { pokemonApi } from '../api/pokemonApi';

export const usePokemonDetail = (id:string) => {
  
  const [isLoading, setIsLoading] = useState(true);
  const [pokemonDetail, setPokemonDetail] = useState<PokemonDetail>({} as PokemonDetail);

  const loadPokemonDetail = async() => {
    const resp = await pokemonApi.get<PokemonDetail>(`https://pokeapi.co/api/v2/pokemon/${id}`);
    setPokemonDetail(resp.data);
    setIsLoading(false);
  }

  /* Trigger http request */
  useEffect(() => {
    loadPokemonDetail();
  }, [])

  
  return {
    isLoading,
    pokemonDetail
  }
}
