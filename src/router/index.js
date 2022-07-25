import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, News, Splash, Account, LoginScreen, RegisScreen} from '../pages/index';
import MainApp from '../navigation/TabNavigator';


const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName='Splash'>
        <Stack.Screen name="Splash" component={Splash} options={{headerShown : false}} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown : false}} />
        <Stack.Screen name="RegisScreen" component={RegisScreen} options={{headerShown : false}} />
        <Stack.Screen name="MainApp" component={MainApp} options={{headerShown : false}} />    
      </Stack.Navigator>
  )
}

export default Router

const styles = StyleSheet.create({})