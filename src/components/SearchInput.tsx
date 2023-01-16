import React, { useEffect, useState } from 'react'
import { StyleProp, StyleSheet, Text, TextInput, View, ViewStyle } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { useDebouncerSearch } from '../hooks/useDebouncerSearch';

interface Props {
  style?: StyleProp<ViewStyle>,
  onDebounce?: (value:string) => void,
}

export const SearchInput = ({style, onDebounce}:Props) => {

  const [textValue, setTextValue] = useState('');

  const { debouncerText } = useDebouncerSearch(textValue);

  useEffect(() => {
    //console.log("D", debouncerText);
    onDebounce!(debouncerText);
  }, [debouncerText])

  //console.log("T", textValue);

  return (
    <View style={{...styles.container, ...style as any}}>
      <View style={styles.textInputContainer}>
        <Icon
          color='#065A9C'
          style={{ alignItems: 'center', marginHorizontal: 10 }}
          name='search-outline'
          size={20}
        />
        <TextInput
          style={styles.textInput}
          placeholderTextColor='#065A9C'
          placeholder='| Search pokemon by name or id...'
          autoCapitalize='none'
          autoCorrect={false}
          value={textValue}
          onChangeText={setTextValue}
        />
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: 'grey',
  },
  textInputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
    alignItems: 'center',
    backgroundColor: '#e8e8e8',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  textInput: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    color: '#065A9C',
    fontSize: 16,
  }

})
