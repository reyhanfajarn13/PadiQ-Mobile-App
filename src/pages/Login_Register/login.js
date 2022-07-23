import { StyleSheet, Text, View, 
    ScrollView, ImageBackground, 
    Dimensions, Image, TextInput, 
    TouchableOpacity, Button
} from 'react-native'
import React from 'react'
import { loginBackground, logo } from '../../assets'



const LoginScreen = ({navigation}) => {
  return (

    <ScrollView 
    style={{flex:1, backgroundColor:'#255045'}}
    showsVerticalScrollIndicator={false}>
        <ImageBackground source={loginBackground}
        style={{height:Dimensions.get('window').height/2.5, opacity:0.9}}>      
            <View style={styles.brandView}>
                <Image source={logo}/> 
                <Text style={styles.brandViewText}>Padi-Q</Text>
            </View>
        </ImageBackground>
        {/*Bottm View*/ }
        <View style={styles.bottomView}>
             {/*Welcome View*/ }
             <View style={{padding: 40}}>
                <Text style={{color:'#ffffff', fontSize:34, fontFamily:'Roboto', fontWeight:'bold'}}>Login</Text>
                <Text style={{color:'#ffffff'}}>Belum punya akun?
                    <Text style={{color:'#ffe77aff', fontStyle:'italic', fontWeight:'bold'}}
                    onPress={ () => navigation.navigate('RegisScreen')}> Daftar</Text>
                </Text>
                {/*Form input View*/}
                <View floatingLabel style={styles.inputView} >
                    <TextInput  
                    style={styles.inputText}
                    placeholder="Username..." 
                    placeholderTextColor="#ffffff"
                    onChangeText={text => this.setState({email:text})}/>
                </View>
                <View style={styles.inputViewPassword} >
                    <TextInput  
                    secureTextEntry
                    style={styles.inputText}
                    placeholder="Password..." 
                    placeholderTextColor="#ffffff"
                    onChangeText={text => this.setState({password:text})}/>
                </View>
                <TouchableOpacity>
                    <Text style={styles.forgot}>Lupa Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginBtn} 
                onPress={ () => navigation.navigate('MainApp')}>
                    <Text style={styles.loginText}>LOGIN</Text>
                </TouchableOpacity>
             </View>
        </View>
    </ScrollView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    brandView:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }, 
    brandViewText:{
        color:'#ffffff',
        fontSize:40,
        fontWeight:'bold',
        fontStyle:'italic',
        textTransform:'capitalize'
    },
    bottomView:{
        flex:1.5,
        backgroundColor:'#255045',
        bottom:50,
        borderTopStartRadius:60,
        borderTopEndRadius:60
    },
    inputView:{
        marginTop:50,
        width:"100%",
        backgroundColor:"#649e94",
        shadowOpacity:0.5,
        borderRadius:25,
        borderWidth:2,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20,
        borderColor:'#ffffff',
      },
      inputViewPassword:{
        width:"100%",
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
      inputText:{
        height:50,
        color:"white"
      },
      forgot:{
        justifyContent:'center',
        alignItems:'center',
        paddingLeft:110,
        color:"white",
        fontSize:11
      },
      loginBtn:{
        width:"80%",
        backgroundColor:"#649e94",
        marginLeft:35,
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        marginBottom:10
      },
      loginText:{
        color:"white",
        fontWeight:'bold'
      }
})