import { ImageBackground, StyleSheet, Text, View, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, {useState, useEffect} from 'react'
import { splashBackground, logo } from '../../assets'
import { authentication} from '../../../firebase/firebase-config'
import { createUserWithEmailAndPassword } from "firebase/auth";



const RegisScreen = ({navigation}) => {

  //Text input state
  const [NamePassword,setNamePassword] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [isSecureEntry, setIsSecureEntry] = useState(true)


  useEffect(() => {
    const unsubscribe = authentication.onAuthStateChanged(user => {
      if (user) {
        navigation.replace("LoginScreen")
      }
    })

    return unsubscribe
  }, [])

  const handleSignUp = async() => { 
    if (password === NamePassword && password.length > 5) {
    await createUserWithEmailAndPassword(authentication, email, password)
    .then((userCredentials) => {
        const user = userCredentials.user;
        console.log('Registered with:', user.email);
    })
    .catch((err) => {
      if(err.code === 'auth/email-already-in-use'){
        alert('Email sudah digunakan!')
      }
      if(err.code === 'auth/invalid-email'){
        alert('Alamat email tidak valid.')
      }
    })
    }
    else{
      alert('Password tidak cocok & kurang dari 6 karakter')
    }
  }



  return (
      <ImageBackground source={splashBackground} style={styles.background}>  
      <ScrollView> 
            <View style={styles.brandView}>
                <Text style={styles.brandViewText}>Welcome<Text style={{
                  fontFamily: 'Roboto',
                  fontSize: 23,
                  fontWeight: 'bold',
                  color:'#ffe77aff',
                  fontStyle:'italic',}}> Padi-zen!</Text></Text>
                <Image source={logo} style={{opacity:0.9}}/>     
            </View>
            {/*Form input View*/}
        <View style={{alignItems:'center', marginVertical:100}}>
            <View floatingLabel style={styles.inputViewUsername} >
                    <TextInput  
                    style={styles.inputText}
                    placeholder="Email..." 
                    placeholderTextColor="#ffffff"
                    keyboardType='email-address'
                    value={email}
                    onChangeText={text => setEmail(text)}/>
            </View>
            {/*Form input View*/}
            <View floatingLabel style={styles.inputViewEmail} >
                    <TextInput  
                    style={styles.inputText}
                    placeholder="Password..." 
                    placeholderTextColor="#ffffff"
                    value={password}
                    onChangeText={text => 
                      setPassword(text)}
                    maxLength={15}
                    secureTextEntry={isSecureEntry}
                    />
            </View>
            {/*Form input View*/}
            <View floatingLabel style={styles.inputViewPassword} >
                    <TextInput  
                    style={styles.inputText}
                    placeholder="Konfirmasi Password..." 
                    placeholderTextColor="#ffffff"
                    onChangeText={text => setNamePassword(text)}
                    maxLength={15}
                    secureTextEntry={isSecureEntry}
                    />
            </View>
            <TouchableOpacity style={styles.regisBtn} 
                onPress={handleSignUp}>
                    <Text style={{color:'white', fontWeight:'bold'}}>DAFTAR</Text>
            </TouchableOpacity>
            <Text style={{justifyContent:'center', color:"white"}}>Sudah punya akun ?
             <Text style={{color:'#ffe77aff', fontWeight:'bold'}} 
             onPress={() => navigation.navigate('LoginScreen')}> Login</Text></Text>
        </View> 
        </ScrollView>
      </ImageBackground>
      
        
  )
}

export default RegisScreen

const styles = StyleSheet.create({
    background: {
    flex: 1
  },
  brandViewText:{
    color:'#ffffff',
    fontSize:23,
    marginBottom:10,
    fontWeight:'bold',
    textTransform:'capitalize'
},
brandView:{
    flex:1,
    justifyContent:'flex-start',
    marginTop:50,
    alignItems:'center',
    
},
inputViewUsername:{
    width:"80%",
    backgroundColor:"#649e94",
    shadowOpacity:0.5,
    borderRadius:25,
    borderColor:'#ffffff',
    borderWidth:2,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputViewEmail:{
    width:"80%",
    backgroundColor:"#649e94",
    shadowOpacity:0.5,
    borderRadius:25,
    borderColor:'#ffffff',
    borderWidth:2,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20,
  },
inputViewPassword:{
    width:"80%",
    backgroundColor:"#649e94",
    shadowOpacity:0.5,
    borderRadius:25,
    borderColor:'#ffffff',
    borderWidth:2,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  regisBtn:{
    width:"60%",
    backgroundColor:"#649e94",
    marginLeft:5,
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  inputText:{
    height:50,
    color:"white"
  }
})