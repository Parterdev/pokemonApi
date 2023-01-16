import React, { useContext, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native'
import { Avatar } from '@rneui/themed'
import { PokemonDetail, Sprites } from '../interfaces/pokemonInterface'

interface Props {
  pokemon: PokemonDetail,
  color: string,
}

export const PokemonSpriteItem = ({pokemon, color}:Props) => {

  const _renderItem = (item:string, index:number) => {
    return (
      <View style={{...styles.pokemonContainer, shadowColor: color}}>
      {
        (item) ? 
        <Avatar
          rounded
          size={50}
          source={{
          uri: item,
          }}
        />
        : 
        <Avatar
          //avatarStyle={{backgroundColor: 'red', justifyContent: 'center'}} 
          rounded 
          title="N/A" 
          size={50}
          source={require('../assets/pokedex/blank_img.png')}
        /> 
      }
    </View>
    )
  }
  
  const {
    back_default,
    back_female,
    back_shiny,
    back_shiny_female,
    front_default,
    front_female,
    front_shiny,
    front_shiny_female
  } = pokemon.sprites;

  const spritesArr = [
    back_default,
    back_female,
    back_shiny,
    back_shiny_female,
    front_default,
    front_female,
    front_shiny,
    front_shiny_female
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <FlatList
        data={spritesArr}
        keyExtractor={(item) => item ? item : Math.random().toString()}
        renderItem={({ item, index }) => _renderItem(item, index)}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    flexDirection: 'row'
  },
  pokemonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'red',
    borderRadius: 10,
    overflow: 'hidden',
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 2,
    marginHorizontal: 5,
    marginTop: 5,
    marginBottom: 5,
  }
});

