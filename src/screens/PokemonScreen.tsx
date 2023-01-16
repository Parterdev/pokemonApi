import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { ActivityIndicator, Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon  from 'react-native-vector-icons/Ionicons'
import { FadeInImage } from '../components/FadeInImage'
import { RootStackParams } from '../navigator/StackNavigator'
import { usePokemonDetail } from '../hooks/usePokemonDetail';
import { PokemonDetails } from '../components/PokemonDetail'
import { capitalizeWord } from '../helpers/capitalizeWord';

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'>{};

export const PokemonScreen = ({route, navigation}:Props) => {

  const { height:windowHeight } =  Dimensions.get('window');
  const {singlePokemon:pokemon, color}= route.params;
  const {isLoading, pokemonDetail} = usePokemonDetail(pokemon.id);
  
  return (
    <View style={{...styles.container, backgroundColor: color}}>
      <View style={{...styles.firstBox, backgroundColor: color, height: windowHeight * 0.50}}>
        <View style={{height: 60}}>
          <TouchableOpacity activeOpacity={0.2} style={styles.backButtonOpacity}
            onPress={() => navigation.pop()}
          >
            <Icon
              name='arrow-back-outline'
              color={'white'}
              size={40}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.pokemonHeaderTitle}>
          <Text style={styles.pokemonName}>{capitalizeWord(pokemon.name)}</Text>
          <Text style={styles.pokemonName}>{'#'}{pokemon.id}</Text>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            style={styles.pokeBackground}
            source={require('../assets/pokedex/pokebola-blanca.png')}
          />
          <FadeInImage
            uri={pokemon.image}
            style={styles.pokemonImage}
          />
        </View>
      </View>
      <View style={{...styles.secondBox, height: windowHeight * 0.50}}>
        { 
          (isLoading) ?
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}> 
            <ActivityIndicator 
              color={color}
              size={80}
            />
          </View> :
          <PokemonDetails pokemon={pokemonDetail} color={color} />
        }
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  firstBox: {
    zIndex: 999,
    paddingHorizontal: 10,
    backgroundColor: 'white'
  },
  backButtonOpacity: {
    position: 'absolute',
    marginTop: 10,
  },
  pokemonHeaderTitle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignContent: 'flex-start',
    alignItems: 'center',
    zIndex: 999
  },
  pokemonName: {
    fontSize: 45,
    fontFamily: 'FingerPaint-Regular',
    color: 'white',
  },
  pokeBackground: {
    width: 250,
    bottom: -5,
    height: 250,
    opacity: 0.5,
  },
  pokemonImage: {
    width: 300, 
    height: 300,
    bottom: -50,
    position: 'absolute',
  },
  secondBox: {
    overflow: 'hidden',
    borderTopStartRadius: 60,
    borderTopEndRadius: 60,
    backgroundColor: 'white'
  }
})
