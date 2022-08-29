import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React from 'react'
import { splashBackground, logo } from '../../assets'

const WelcomeScreen = ({navigation}) => {
  return (
    <ImageBackground source={splashBackground} style={styles.background}>
      <View style={{flexDirection:'column', justifyContent:"space-between"}}>
        <Text style={styles.upText}>Cari tahu penyakit pada tanaman padi anda dengan
        <Text style={{color:'#ffe77aff', fontStyle:'italic', fontSize:30, fontWeight:'800'}}> Padi-Q</Text>
        </Text>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.downText}>Padi-Q dapat mendeteksi penyakit pada padi anda.
              Anda hanya perlu mengambil gambar padi,
              dan biarkan aplikasi menunjukkan keajaiban!
        </Text>
      </View>
      <TouchableHighlight style={styles.button} underlayColor='#ffe77aff' onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.btnText} >Mulai!</Text>
      </TouchableHighlight>
      
    </ImageBackground>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center'
  },
  upText:{
    color:'#ffffff',
    fontSize:28,
    fontWeight:'bold',
    marginBottom:30,
    marginLeft:35,
    marginRight:35,
    alignItems:'center'
  },
  logo:{
    marginHorizontal:150,
    marginBottom:30,
    alignItems:'center'
  },
  downText:{
    marginLeft:35,
    marginRight:35,
    color:'#ffffff',
    fontSize:15,
    alignItems:'center'
  },
  button:{
    width:'60%',
    height:'6%',
    alignItems:'center',
    marginTop:50,
    marginBottom:-50,
    borderRadius:10,
    backgroundColor:'#ffe77aff',
    elevation:10
  },
  btnText:{
    alignItems:'center',
    justifyContent:"center",
    marginTop:5,
    fontSize:25,
    fontWeight:'900',
    marginBottom:10,
    color:'#255045'
  }
})