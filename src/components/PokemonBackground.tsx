import { StyleSheet, Image, View, TouchableOpacity, Text } from 'react-native';
import React from 'react';
import { StickySearchInput } from './StickySearchInput';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { generalStyles } from '../styles/styles';

export type RootStackParamList = {
  SearchScreen: undefined,
}

interface Props {
  children: JSX.Element | JSX.Element[],
}

export const PokemonBackground = ({children}:Props) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        activeOpacity={0.5} 
        style={{ zIndex: 999 }}
        onPress={() => navigation.navigate("SearchScreen")}
      >
        <StickySearchInput />
      </TouchableOpacity>
      <View style={{position: 'absolute', flexDirection: 'row', paddingHorizontal: 10}}>
        <Text style={[styles.textHeader, generalStyles.globalMargin,]}>
          Pokemon List
        </Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/pokedex/pokebola-blanca.png')}
          style={styles.imageBackground}
        />
      </View>
      {children}
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C04C4B',
  },
  imageContainer: {
    marginTop: -150,
    marginRight: -50,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  imageBackground: {
    position: 'relative',
    opacity: 0.5,
    height: 300, 
    width: 300, 
  },
  textHeader: {
    flex: 1,
    color: 'white', 
    justifyContent: 'flex-start',
    fontFamily: 'Pokemon-Hollow',
    fontSize: 45, 
    marginTop: 120,
  }
})