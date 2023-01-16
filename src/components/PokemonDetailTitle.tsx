import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  text: string,
  color: string,
}

export const PokemonDetailTitle = ({text, color}:Props) => {
  return (
    <View style={{...styles.container, backgroundColor: color}}>
        <Icon
          name='flask-outline'
          color={'white'}
          size={30}
        />
        <Text style={{ color: 'white', fontSize: 20, marginHorizontal: 10, fontFamily: 'FingerPaint-Regular', }}>
          {text}
        </Text>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    alignItems: 'center',
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
    height: 40, 
    flexDirection: 'row'
  }
})