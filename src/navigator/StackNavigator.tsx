import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen, PokemonScreen, SearchScreen } from '../screens/index';
import { navigatorStyle } from '../styles/styles';
import { SinglePokemon } from "../interfaces/pokemonInterface";

/* Type of args to each screen */
export type RootStackParams = {
  HomeScreen    : undefined,
  PokemonScreen : {
    singlePokemon: SinglePokemon,
    color: string,
  },
  SearchScreen: undefined,
}

export const StackNavigator = () => {
  const Stack = createStackNavigator<RootStackParams>();
  return (
    <Stack.Navigator screenOptions={navigatorStyle}>
      <Stack.Screen name="HomeScreen" component={HomeScreen}/>
      <Stack.Screen name="PokemonScreen" component={PokemonScreen}/>
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
    </Stack.Navigator>
  )
}