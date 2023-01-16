import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'

export const Loading = () => {
  return (
    <View style={styles.activityContainer}>
      <ActivityIndicator
        color='white'
        size={70}
      />
      <Text style={{ textAlign: 'center', fontFamily: 'FingerPaint-Regular' }}>Fetching data...</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  activityContainer: {
    flex: 1, 
    justifyContent: 'center', 
    backgroundColor: '#C04C4B'
  },
})
