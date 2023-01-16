import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { PokemonDetail } from '../interfaces/pokemonInterface';

interface Props {
  pokemon: PokemonDetail;
  color: string;
}

export const PokemonMoves = ({pokemon, color}:Props) => {
  return (
    <ScrollView style={styles.typesContainer}>
      {
        pokemon.moves.map(({move}) => (
          <View key={move.name} style={{flexDirection: 'row', alignItems: 'center', marginVertical: 5}}>
            <Icon
              name='disc-outline'
              color={color}
              size={30}
            />
            <Text style={{color: 'black', fontSize: 20, marginHorizontal: 10, fontFamily: 'FingerPaint-Regular',}}>{move.name}</Text>
          </View>
        ))
      }
      <View style={{marginBottom: 50}}></View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  typesContainer: {
    flex: 1,
    //backgroundColor: 'indigo', 
  },
})

