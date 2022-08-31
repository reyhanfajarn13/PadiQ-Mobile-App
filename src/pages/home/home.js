import { StyleSheet, Text, View, ImageBackground,
        ScrollView, Dimensions, TouchableOpacity, 
        Image,
        BackHandler} from 'react-native';
import React, { useEffect, useState } from 'react';
import openGallery from './API/importPicture';
import takePhoto from './API/takePicture';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { homeBackground, logo, loginBackground } from '../../assets';
import { authentication } from '../../../firebase/firebase-config';
import MainApp from '../../navigation/TabNavigator';


const Home = ({navigation}) => {
  const [photo, setPhoto] = React.useState(null);
  const [photoShow, setPhotoShow] = React.useState(null); 
  const user = authentication.currentUser;
  {/*Button back disactivated*/}
  /*useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => true)
    return () => backHandler.remove()

  }, [])*/
  
  
  
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#D9D9D9' }}
      showsVerticalScrollIndicator={false}>
       {/*Background View*/ }
      <ImageBackground source={homeBackground} 
      style={{height:Dimensions.get('window').height/3.7}}>
      <View style={{flexDirection:'row'}}>
         <View style={styles.brandView}>
             <Text style={{color:'#ffffff', fontSize:25, fontWeight:'bold'}}>Aplikasi Eksekutif</Text>
             <Text style={{color:'#ffffff', fontSize:20}}>Untuk Padi Anda</Text>
         </View>
         <Image source={logo}  style={{width:60,height:60, marginTop:65, marginRight:50, justifyContent:'space-between', elevation:10}}/>
      </View>
      </ImageBackground>
      {/*Bottom View*/ }
      <View style={styles.bottomView}>
        <View style={{ padding:50 }}>
        {/*ACC SECTION NAME AND PHOTOS*/}
          <View style={styles.nameFormContainer}>
          <TouchableOpacity style={styles.ProfilePicture} onPress={openGallery}>
            <View style={{alignItems:'center'}}>
            <Ionicons name='person-circle-outline' size={63} style={{color:'black'}}/>
            </View>
          </TouchableOpacity>
          <View style={{flexDirection:'column'}}>
              <Text style={{fontSize:30, fontWeight:'bold',
              marginRight:53, marginTop:10, marginBottom:3
              , color:'#338333', fontStyle:'italic'}}>Hai,</Text>
              <Text style={{fontSize:17, marginBottom:30, 
                fontStyle:'italic', color:'black', fontWeight:'bold'}}>{user.email}</Text>
          </View>
          </View>
          
          {/*Predict Button View*/ }
          <TouchableOpacity style={styles.PredictButton} onPress={() => navigation.navigate('PredictionScreen')}>
            <Image source={logo} style={{width:40, height:40, marginTop:5}}/>
            <Text style={{
                         color:'#E8E3DA',
                         justifyContent:'space-between',
                         fontSize:13.5,
                         fontWeight:'bold',
                         marginLeft:20,
                         marginRight:15,
                         marginTop:15,
                         fontFamily:'roboto'
                        }}>Prediksi Penyakit Padi Sekarang
               
            </Text>
            <View style={{alignItems:'flex-end'}}>
            <Ionicons name="camera-outline" color={'#E8E3DA'} size={30} style={{marginTop:8}} />
            </View>
          </TouchableOpacity>
          {/*History Section*/}
          <View style={{flexDirection:'row'}}>
          <Text style={{
                        fontWeight:'bold',
                        color:'black',
                        fontSize:13.5,
                        alignItems:'stretch',
                        marginTop:10,
                        marginLeft:-10
                        }}>Daftar Penyakit
                        </Text>
          <TouchableOpacity style={{alignItems:'flex-end', flexDirection:'row', marginLeft:'15%'}}  onPress={() => navigation.navigate("News")}>
          <Text  style={{
                        color:'#cc7722',
                        fontSize:11,
                        marginTop:13,
                        marginLeft:70
                        }}
                        >Tampilkan Semua</Text>
          <Ionicons name='arrow-forward-circle' size={15} style={{ marginTop:-15, color:'#cc7722'}} />
          </TouchableOpacity>
          </View>
          <ScrollView horizontal>
            <View style={styles.historyContainer}>
              <TouchableOpacity onPress={() => navigation.navigate("News")}>
                <Image style={styles.cardImage} source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Rice_plants_affected_by_tungro_disease1.jpg/640px-Rice_plants_affected_by_tungro_disease1.jpg'}}/>
                <Text style={styles.cardText}>Tungro Padi</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.historyContainer}>
            <TouchableOpacity  onPress={() => navigation.navigate("News")}>
                <Image style={styles.cardImage} source={{uri:'https://medialampung.co.id/wp-content/uploads/2020/09/blas.jpg'}}/>
                <Text style={styles.cardText}>Blas Padi</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.historyContainer}>
            <TouchableOpacity  onPress={() => navigation.navigate("News")}>
                <Image style={styles.cardImage} source={{uri:'https://krishijagran.com/media/42176/pest.png'}}/>
                <Text style={styles.cardText}>Bercak Coklat Daun</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.historyContainer}>
            <TouchableOpacity  onPress={() => navigation.navigate("News")}>
                <Image style={styles.cardImage} source={{uri:'http://www.knowledgebank.irri.org/images/stories/bacterial-leaf-blight-1.JPG'}}/>
                <Text style={styles.cardText}>Hawar Daun</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
          {/*FITUR TAMBAHAN SECTION*/}
          <Text style={{
                        fontWeight:'bold',
                        color:'black',
                        fontSize:13.5,
                        alignItems:'stretch',
                        marginTop:10,
                        marginLeft:-10
                        }}>Fitur Tambahan
                        </Text>
          <View>
            <View style={{flexDirection:'row'}}>
              <TouchableOpacity onPress={() => navigation.navigate('PredictionScreen')}>
              <View style={styles.fiturContainer}>
                <View style={styles.fiturelogocontainer} >
                <Ionicons name='rose' size={40} style={{color:'#E8E3DA', marginVertical:'15%'}}/>
                <Text style={{color:'#E8E3DA', marginTop:-10, fontSize:10, fontWeight:'bold'}}>Prediksi Padi</Text>
                </View>
              </View>
              </TouchableOpacity>
              <View style={styles.fiturContainer}>
                <View style={styles.fiturelogocontainer} >
                <Ionicons name='speedometer' size={40} style={{color:'#E8E3DA', marginVertical:'15%'}}/>
                <Text style={{color:'#E8E3DA', marginTop:-10, fontSize:10, fontWeight:'bold'}}>Pantau Sawah</Text>
                </View>
              </View>
              <View style={styles.fiturContainerAdd}>
              <View style={styles.fiturelogocontainer} >
                <Ionicons name='add-circle' size={50} style={{color:'#E8E3DA', marginVertical:'15%'}}/>
                <Text style={{color:'#E8E3DA', marginTop:-10, fontSize:10, fontWeight:'bold'}}></Text>
                </View>
              </View> 
            </View>
            <View style={{flexDirection:'row'}}>
              <View style={styles.fiturContainerAdd}>
              <View style={styles.fiturelogocontainer} >
                <Ionicons name='add-circle' size={50} style={{color:'#E8E3DA', marginVertical:'15%'}}/>
                <Text style={{color:'#E8E3DA', marginTop:-10, fontSize:10, fontWeight:'bold'}}></Text>
                </View>
              </View>
              <View style={styles.fiturContainerAdd}>
              <View style={styles.fiturelogocontainer} >
                <Ionicons name='add-circle' size={50} style={{color:'#E8E3DA', marginVertical:'15%'}}/>
                <Text style={{color:'#E8E3DA', marginTop:-10, fontSize:10, fontWeight:'bold'}}></Text>
                </View>
              </View>
              <View style={styles.fiturContainerAdd}>
              <View style={styles.fiturelogocontainer} >
                <Ionicons name='add-circle' size={50} style={{color:'#E8E3DA', marginVertical:'15%'}}/>
                <Text style={{color:'#E8E3DA', marginTop:-10, fontSize:10, fontWeight:'bold'}}></Text>
                </View>
              </View> 
            </View>
          </View>
        </View>
      </View>
    </ScrollView>

  )
}

export default Home

const styles = StyleSheet.create({
  bottomView:{
    flex:1,
    backgroundColor:'#D9D9D9',
    bottom:50,
    borderTopStartRadius:60,
    borderTopEndRadius:60
  },
  brandView:{
    flex:1,
    justifyContent:'flex-start',
    alignItems:'flex-start',
    marginVertical:60,
    marginHorizontal:40
  },
  PredictButton:{
    backgroundColor:'#338333',
    flexDirection:'row',
    opacity:0.9,
    height:50,
    justifyContent:'center',
    borderRadius:8,
    width:326,
    marginLeft: -15,
    borderColor:'#b0b3b8',
    borderWidth:1.5,
    shadowColor:'black',
    shadowOffset:{width:0, height:2},
    shadowOpacity:1,
    shadowRadius:2,
    elevation:10
  },
  nameFormContainer:{
    flexDirection:'row',
    justifyContent:'flex-end',
    alignItems:'flex-end',
    marginHorizontal:50,
    height:70
  },
  ProfilePicture:{
    justifyContent:'space-between',
    backgroundColor:'white',
    borderColor:'#b0b3b8',
    borderRadius:100,
    borderWidth:2,
    width: 70,
    height: 70,
    marginBottom:20,
    marginRight:30,
    elevation:10,
  },
  historyContainer:{
    flex:1,
    width: 150,
    height: 100,
    marginBottom:10,
    marginRight:10,
    marginTop:10,
    borderRadius:20,
    backgroundColor:'#e5e4e2',
    elevation:8,
    shadowColor:'black',
  },
  cardImage:{
    width:'100%',
    height:70,
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    borderBottomRightRadius:15,
    resizeMode:'cover'
  },
  cardText:{
    fontSize:15,
    marginHorizontal:'6%',
    color:'#255045',
    fontWeight:'bold',
    marginVertical:'2%',
    fontStyle:'italic'
  },
  fiturContainer:{
    width: 80,
    height: 80,
    marginBottom:10,
    marginRight:25,
    marginTop:10,
    borderRadius:20,
    backgroundColor:'#559E55',
    elevation:8,
    shadowColor:'black',
  },
  fiturContainerAdd:{
    opacity:0.6,
    width: 80,
    height: 80,
    marginBottom:10,
    marginRight:25,
    marginTop:10,
    borderRadius:20,
    backgroundColor:'#559E55',
    elevation:8,
    shadowColor:'black',
  },
  fiturelogocontainer:{
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
  },
  fiturPict:{
    width:'100%',
    height:'60%',
    resizeMode:'cover',
    marginVertical:'20%'
  }
})