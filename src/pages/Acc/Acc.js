import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React from 'react'
import { authentication } from '../../../firebase/firebase-config'
import { getAuth, signOut } from "firebase/auth";

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
    <View>
      <Text>Account</Text>
      <TouchableOpacity  onPress={handleSignOut} style={styles.btnView}>
        <Text style={{fontWeight:'bold',fontSize:20,color:'#ffffff'}}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Account

const styles = StyleSheet.create({
  btnView:{
    width:"80%",
    backgroundColor:"#255045",
    marginLeft:35,
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10,
    borderWidth:5,
    borderColor:'#ffffff'
}
})