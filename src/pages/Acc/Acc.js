import { StyleSheet,
   Text, View, 
   TouchableOpacity, ScrollView,
  ImageBackground, Dimensions,
  Image} from 'react-native'
import React from 'react'
import { authentication } from '../../../firebase/firebase-config'
import { getAuth, signOut } from "firebase/auth";
import { splashBackground, logo} from '../../assets';


const Account = ({navigation}) => {

  const handleSignOut = () =>{
    signOut(authentication).then(() => {
      alert('Anda Telah Log Out')
      navigation.replace("LoginScreen")
    }).catch((error) => {
      console.log(error)
    });
  }
  return ( 
    
    <View style={styles.container}>
      <TouchableOpacity  onPress={handleSignOut} style={styles.btnView}>
        <Text style={{fontWeight:'bold',fontSize:20,color:'#ffffff'}}>Keluar</Text>
      </TouchableOpacity>
    </View>
    
  )
}

export default Account

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnView:{
    width:"80%",
    backgroundColor:"#255045",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10,
    borderWidth:5,
    borderColor:'#ffffff'
},
brandView:{
  flex:1,
  justifyContent:'flex-start',
  alignItems:'flex-start',
  marginVertical:60,
  marginHorizontal:40
},
})