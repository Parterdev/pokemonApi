import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const StickySearchInput = () => {
  return (
    <View style={styles.textInputContainer}>
      <Icon
        color='#065A9C'
        style={{ alignItems: 'center', marginHorizontal: 10 }}
        name='search-outline'
        size={20}
      />
      <Text style={styles.textInput}>
        | Search pokemon by name or id...
      </Text>
    </View>
  )
};


const styles = StyleSheet.create({
  textInputContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
    alignItems: 'center',
    backgroundColor: '#e8e8e8',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    height: 60,
  },
  textInput: {
    color: '#065A9C',
    fontSize: 16,
  }
})

