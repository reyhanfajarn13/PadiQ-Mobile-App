import { StyleSheet, Text, View, 
  ImageBackground, Image
} from 'react-native'
import React, {useEffect} from 'react'
import { splashBackground, logo } from '../../assets';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Splash = ({ navigation }) => {
 useEffect(() => {
    setTimeout( () => {
      navigation.replace('LoginScreen');
    }, 3000) 
  }, [navigation]);
  return (
      <ImageBackground source={splashBackground} style={styles.background}>
        <Image source={logo} style={styles.logo}/>
        <View style={styles.view}><Text style={styles.text}>Padi-Q</Text></View>
        <View><Text style={{fontFamily: 'Roboto',
        fontSize: 20,
        fontWeight: 'bold',
        color:'#ffe77aff',
        fontStyle:'italic'}}><Text style={{fontFamily: 'Roboto',
        fontSize: 23,
        fontWeight: 'bold',
        color:'#ffffff'}}>#</Text>
        AplikasiParaPetani</Text></View>
      </ImageBackground>
  )
}

export default Splash

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center'
  },
  logo:{
    height:100,
    width:100
  },
  view:{
    height:40,
    justifyContent:'center'
  },
  text:{
    fontFamily: 'Roboto',
    fontSize: 30,
    fontWeight: 'bold',
    color:'#ffffff',
    fontStyle:'italic'
  }
})