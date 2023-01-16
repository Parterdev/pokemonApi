import React, { useState } from 'react'
import { Animated, StyleSheet, View, ActivityIndicator, StyleProp, ImageStyle } from 'react-native';
import { useAnimated } from '../hooks/useAnimated';

interface Props {
  uri: string,
  style?: StyleProp<ImageStyle>,
}


export const FadeInImage = ({uri, style}:Props) => {

  const {opacityValue, fadeIn} = useAnimated();
  const [isLoaded, setIsLoaded] = useState(true);

  const finishLoading = () => {
    setIsLoaded(false);
    fadeIn();
  }

  return (
    <View style={styles.container}>
      {
        isLoaded &&  
        <ActivityIndicator style={{flex: 1, marginTop: -100}}
          size={70} 
          color='#e8e8e8'
        />
      }
      <Animated.Image 
        source={{uri}}
        onLoadEnd={finishLoading}
        style={{...style as any, opacity: opacityValue}}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center', 
    alignItems: 'center', 
    marginHorizontal: 5
  }
})
