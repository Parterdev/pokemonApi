import { usePokemonPaginated } from "../../src/hooks/usePokemonPaginated";
import { renderHook } from '@testing-library/react-hooks';
import { PokemonResPaginated } from '../../src/interfaces/pokemonInterface';
import { SinglePokemon as MockSinglePokemon } from '../../__mock__/SinglePokemon';
import { pokemonApi } from "../../src/api/pokemonApi";

describe('useFetch custom hook test', () => {

  beforeEach(() => {
    //Mocking
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve([MockSinglePokemon])
    })) as jest.Mock;
  });
  
  it('Should return initial state', () => {
    const { result } = renderHook(() => pokemonApi.get<PokemonResPaginated>('https://pokeapi.co/api/v2/pokemon?limit=40'));
    const {singlePokemonList, isLoading} = usePokemonPaginated();

    console.log("D", singlePokemonList);
    console.log("L", isLoading);

    //Matchers
    expect(result).toEqual({})
    expect(singlePokemonList).toEqual({});
    expect(isLoading).toBe(true);
  });

  test('Should return a single pokemon and isLoading prop in false', async () => {
    const { result, waitForNextUpdate } = renderHook(() => pokemonApi.get<PokemonResPaginated>('https://pokeapi.co/api/v2/pokemon?limit=40'));
    
    //Before stract information
    await waitForNextUpdate();

    const {singlePokemonList, isLoading} = usePokemonPaginated();
    console.log("Changed data",      singlePokemonList);
    console.log("Changed isLoading", isLoading);

    //Matchers
    expect(singlePokemonList.length).toBe(1);
    expect(isLoading).toBe(false);

  });



});