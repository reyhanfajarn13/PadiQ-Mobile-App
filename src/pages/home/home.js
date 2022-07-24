import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { authentication } from '../../../firebase/firebase-config'
import { getAuth, signOut } from "firebase/auth";

const Home = ({navigation}) => {

  const handleSignOut = () =>{
    signOut(authentication).then(() => {
      alert('Anda LogOut')
      navigation.replace("LoginScreen")
    }).catch((error) => {
      console.log(error)
    });
  }
  return (
    <View>
      <Text>Home</Text>
      <Button title='Sign Out' onPress={handleSignOut}/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})