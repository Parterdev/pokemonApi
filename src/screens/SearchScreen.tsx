import React, { useEffect, useState } from 'react'
import { FlatList, Platform, StyleSheet, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Loading } from '../components/Loading';
import { PokemonSearchCard } from '../components/PokemonSearchCard';
import { SearchInput } from '../components/SearchInput';
import { usePokemonSearch } from '../hooks/usePokemonSearch';
import { SinglePokemon } from '../interfaces/pokemonInterface';

export const SearchScreen = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPokemon, setFilteredPokemon] = useState<SinglePokemon []>([]);
  const {isLoading, singlePokemonList} = usePokemonSearch();
  const {top} = useSafeAreaInsets();

  //Push filtered array with searchTerm
  useEffect(() => {
    if (searchTerm.length > 1) {
      if (isNaN(Number(searchTerm))) {
        setFilteredPokemon(
          singlePokemonList.filter(
            pokemon => pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
          ).slice(0, 4),
        );
      } else {
        const pokemonId = singlePokemonList.find(pokemon => pokemon.id === searchTerm);
        setFilteredPokemon(
          (pokemonId) ? [pokemonId] : []
        )
      }
    } else if (searchTerm.length === 0) {
      setFilteredPokemon([]);
    }
  }, [searchTerm])

  
  const _renderItem = (item:SinglePokemon) => {
    return (
      <PokemonSearchCard pokemon={item}/>
    )
  }
  
  if (isLoading) {
    return (
      <Loading />
    )
  }


  return (
    <View style={{...styles.container}}>
      <SearchInput
        onDebounce={(value) => setSearchTerm(value)}
        style={{
          top: (Platform.OS == 'ios' ? top + 10 : top )
        }}
      />
      <View style={{...styles.listHeaderContainer}}>
        <Text style={{fontSize: 25, color: 'white', fontFamily: 'Pokemon-Solid'}}>{searchTerm}</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <FlatList
          data={filteredPokemon}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => _renderItem(item)}
          showsVerticalScrollIndicator={false}
          numColumns={2}
        />
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C04C4B',
  },
  listHeaderContainer: {
    //backgroundColor: 'red', 
    marginHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'flex-start',
  }
})
