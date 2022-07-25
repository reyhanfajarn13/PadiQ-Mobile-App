import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PredictionAPI from './PredictionAPI';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Home = ({navigation}) => {
  const [photo, setPhoto] = React.useState(null);
  const [photoShow, setPhotoShow] = React.useState(null);
  
  return (
    <View >
      <Text>Home</Text>
      <PredictionAPI />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})