import { ImageBackground, StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { splashBackground, logo } from '../../assets'

const RegisScreen = ({navigation}) => {
  return (
      <ImageBackground source={splashBackground} style={styles.background}>   
            <View style={styles.brandView}>
                <Text style={styles.brandViewText}>Welcome<Text style={{fontFamily: 'Roboto',
        fontSize: 23,
        fontWeight: 'bold',
        color:'#ffe77aff',
        fontStyle:'italic',}}> Padi-zen!</Text></Text>
                <Image source={logo}/>     
            </View>
            {/*Form input View*/}
        <View style={{alignItems:'center', marginVertical:100}}>
            <View floatingLabel style={styles.inputViewUsername} >
                    <TextInput  
                    style={styles.inputText}
                    placeholder="Username..." 
                    placeholderTextColor="#ffffff"
                    onChangeText={text => this.setState({email:text})}/>
            </View>
            {/*Form input View*/}
            <View floatingLabel style={styles.inputViewEmail} >
                    <TextInput  
                    style={styles.inputText}
                    placeholder="Email..." 
                    placeholderTextColor="#ffffff"
                    onChangeText={text => this.setState({email:text})}/>
            </View>
            {/*Form input View*/}
            <View floatingLabel style={styles.inputViewPassword} >
                    <TextInput  
                    style={styles.inputText}
                    placeholder="Password..." 
                    placeholderTextColor="#ffffff"
                    onChangeText={text => this.setState({email:text})}
                    secureTextEntry/>
            </View>
            <TouchableOpacity style={styles.regisBtn} 
                onPress={ () => navigation.navigate('LoginScreen')}>
                    <Text style={{color:'white', fontWeight:'bold'}}>Register</Text>
            </TouchableOpacity>
            <Text style={{justifyContent:'center', color:"white"}}>Sudah punya akun ?
             <Text style={{color:'#ffe77aff', fontWeight:'bold'}} 
             onPress={() => navigation.navigate('LoginScreen')}> Sign In</Text></Text>
        </View> 
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
    padding:20
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