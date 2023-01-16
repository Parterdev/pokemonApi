import React, { useEffect, useRef, useState } from 'react'
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { SinglePokemon } from '../interfaces/pokemonInterface'
import { FadeInImage } from './FadeInImage';
import { Spacer } from './Spacer';
import { getImageColors } from '../helpers/getImageColors';
import { capitalizeWord } from '../helpers/capitalizeWord';

interface Props {
  pokemon: SinglePokemon;
}

const {width: windowWidth} = Dimensions.get('screen');

export const PokemonSearchCard = ({pokemon}:Props) => {

  const navigation = useNavigation<StackNavigationProp<any, any>>();

  const [bgColor, setBgColor] = useState('#bdbdbd');

  const isMounted = useRef(true);

  const getImageColor = async (pokemon:SinglePokemon) => {
    const {id, image} = pokemon;
    const { background = '#bdbdbd' } =  await getImageColors(id, image);
    if(!isMounted) return;
    setBgColor(background);
  }
  
  useEffect(() => {
    if(isMounted) {
      getImageColor(pokemon);
    }
    //When component is unmounted
    return () => {
      isMounted.current = false;
    }
  }, [])

  return (
    <View style={styles.container}>
      <TouchableOpacity style={{ ...styles.cardContainer, width: windowWidth * 0.4, backgroundColor: bgColor }} 
        activeOpacity={0.5}
        onPress={() => navigation.navigate('PokemonScreen', {
          singlePokemon: pokemon, 
          color: bgColor
        })}
      >
      <View style={{ flexDirection: 'row', marginHorizontal: 10, flexWrap: 'wrap', margin: 5 }}>
        <Text style={styles.pokemonTitle}>{'#' + pokemon.id}</Text> 
      </View>
      <View style={styles.pokeContainer}>
          <Image
            source={require('../assets/pokedex/pokebola-blanca.png')}
            style={styles.pokemonBackImage}
          />      
      </View>
      <FadeInImage
          uri={pokemon.image}
          style={styles.pokemonImage}
      />
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  cardContainer: {
    borderRadius: 20,
    marginVertical: 10,
    height: 120,
    shadowColor: "black",
    opacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
  pokemonTitle: {
    fontSize: 15,
    fontFamily: 'FingerPaint-Regular',
    color: '#3B3F57',
  },
  pokeContainer: {
    flexDirection: 'row-reverse',
    overflow: 'visible',
    opacity: 0.5,
    position: 'relative',
  },
  pokemonBackImage: {
    alignSelf: 'flex-end',
    borderRadius: 20,
    marginTop: 10,
    width: 80,
    height: 80,
  },
  pokemonImage: {
    position: 'absolute',
    bottom: 0,
    width: 100,
    height: 100
  }
})
