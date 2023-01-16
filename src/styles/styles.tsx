import { StyleSheet } from 'react-native';

export const generalStyles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 10,
  },
  textTitle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
  }
});

export const navigatorStyle = {
  cardStyle: { backgroundColor: 'skyblue' },
  headerShown: false,
  headerStyle: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.30,
    elevation: 13,
    backgroundColor: 'red'
  },
};