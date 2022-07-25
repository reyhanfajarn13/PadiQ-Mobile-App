import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, News, Account} from '../pages/index';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const MainApp = () => {
    return (
      <Tab.Navigator screenOptions={{
        headerShown:false,
        tabBarShowLabel: false,
        tabBarStyle:{backgroundColor:'#255045',
            height:60,
            position:'absolute',
            bottom: 16,
            right: 16,
            left: 16,
            borderRadius: 20},
        tabBarActiveTintColor: '#ffe77aff',
        tabBarInactiveTintColor:'#ffffff',

      }} >
          <Tab.Screen name="Home" component={Home} options={{
            tabBarIcon: ({color,size}) =>(
                <Ionicons name="home" color={color} size={size} />
            )
          }} />
          <Tab.Screen name="News" component={News} options={{
            tabBarIcon: ({color,size}) =>(
                <Ionicons name="newspaper" color={color} size={size} />
            )
          }} />
          <Tab.Screen name="Akun" component={Account} options={{
            tabBarIcon: ({color,size}) =>(
                <Ionicons name="people" color={color} size={size} />
            )
          }} />
        </Tab.Navigator>
    )
  }

export default MainApp;