import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { PokemonBackground } from '../components/PokemonBackground';
import { SinglePokemon } from '../interfaces/pokemonInterface';
import { PokemonCard } from '../components/PokemonCard';
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';
import { Loading } from '../components/Loading';

export const HomeScreen = () => {

  const { loadPokemonData, singlePokemonList } = usePokemonPaginated();

  const _renderItem = (item:SinglePokemon) => {
    return (
      <View testID='dataContainer'>
        <PokemonCard pokemon={item}  />
      </View>
    )
  }

  return (
    <PokemonBackground>
      <View style={styles.container}>
        <FlatList testID='pokemonCard'
          data={singlePokemonList}
          keyExtractor={(item) => item.id} 
          renderItem={({item}) => _renderItem(item)}
          numColumns={2}
          /* Infinite Scroll */
          onEndReached={loadPokemonData}
          onEndReachedThreshold={0.5}
          ListFooterComponent={(<Loading />)}
        />
      </View>
    </PokemonBackground>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center',
  },
});
