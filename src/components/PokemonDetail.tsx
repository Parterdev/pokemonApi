import React from 'react'
import { ScrollView, StyleSheet, View, Text, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { PokemonDetail, Type } from '../interfaces/pokemonInterface';
import { capitalizeWord } from '../helpers/capitalizeWord';
import { PokemonDetailTitle } from './PokemonDetailTitle';
import { PokemonSpriteItem } from './PokemonSpriteItem';
import { PokemonMoves } from './PokemonMoves';


interface Props {
  pokemon: PokemonDetail,
  color: string,
}


export const PokemonDetails = ({pokemon, color}:Props) => {
  const _renderItem = ({type}:Type, index:number) => {
    return (
      <View style={{flexDirection: 'row', justifyContent:  'space-between'}}>
        <Text style={{fontWeight: 'bold', fontSize: 20, color: 'black', marginHorizontal: 5}}>
          <Text style={{color}}>{index+1}{'.-'}</Text>{capitalizeWord(type.name)}{' '}
        </Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{ ...styles.textInputContainer, backgroundColor: color }}>
          <Icon
            name='flask-outline'
            color={'white'}
            size={30}
          />
          <Text style={{ color: 'white', fontSize: 20, marginHorizontal: 10, fontFamily: 'FingerPaint-Regular', }}>
            {'Types'}
          </Text>
        </View>
        <View style={{ height: 30, flexDirection: 'row' }}>
          <FlatList
            data={pokemon.types}
            keyExtractor={(item) => item.slot.toString()}
            renderItem={({ item, index }) => _renderItem(item, index)}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <PokemonDetailTitle text='Weight' color={color} />
        <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black', marginHorizontal: 5 }}>{pokemon.weight}{'Kg'}</Text>
        <PokemonDetailTitle text='Sprites' color={color} />
        <PokemonSpriteItem pokemon={pokemon} color={color} />
        <PokemonDetailTitle text='Moves' color={color} />
        <PokemonMoves pokemon={pokemon} color={color} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //paddingTop: 20,
    paddingHorizontal: 10
  },
  textInputContainer: {
    paddingVertical:  20,
    marginHorizontal: -10,
    paddingHorizontal: 10,
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    alignItems: 'center',
    borderTopStartRadius: 60,
    borderTopEndRadius: 60,
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
    flex: 1, 
    flexDirection: 'row'
  },
})
