import { StyleSheet, Text, View, ImageBackground,
        ScrollView, Dimensions, TouchableOpacity, 
        Image} from 'react-native';
import React from 'react';
import openGallery from './API/importPicture';
import takePhoto from './API/takePicture';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { homeBackground, logo, loginBackground } from '../../assets';

const Home = ({navigation}) => {
  const [photo, setPhoto] = React.useState(null);
  const [photoShow, setPhotoShow] = React.useState(null); 
  
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
          </TouchableOpacity>
          <View style={{flexDirection:'column'}}>
              <Text style={{fontSize:15, fontWeight:'bold', color:'black',
              marginRight:53, marginTop:10, marginBottom:3}}>Agus Budiono</Text>
              <Text style={{fontSize:13, marginBottom:30, fontStyle:'italic'}}>agusbudiono@gmail.com</Text>
          </View>
          </View>
          
          {/*Predict Button View*/ }
          <TouchableOpacity style={styles.PredictButton} onPress={takePhoto}>
            <Image source={logo} style={{width:40, height:40, marginTop:5}}/>
            <Text style={{
                         color:'#ffffff',
                         justifyContent:'space-between',
                         fontSize:13.5,
                         fontWeight:'bold',
                         marginLeft:20,
                         marginRight:15,
                         marginTop:15
                        }}>Prediksi Penyakit Padi Sekarang
               
            </Text>
            <View style={{alignItems:'flex-end'}}>
            <Ionicons name="camera-outline" color={'#ffffff'} size={30} style={{marginTop:8}} />
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
                        }}>Riwayat Penelurusan
                        </Text>
          <TouchableOpacity>
          <Text  style={{
                        color:'#cc7722',
                        fontSize:11,
                        alignItems:'flex-end',
                        marginTop:13,
                        marginLeft:70
                        }}
                        >Tampilkan Semua</Text>
          <Ionicons name='arrow-forward-circle' size={15} style={{marginLeft:165, marginTop:-15, color:'#cc7722'}} />
          </TouchableOpacity>
          </View>
          <ScrollView horizontal>
            <View style={styles.historyContainer}></View>
            <View style={styles.historyContainer}></View>
            <View style={styles.historyContainer}></View>
            <View style={styles.historyContainer}></View>
            <View style={styles.historyContainer}></View>
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
              <View style={styles.fiturContainer}></View>
              <View style={styles.fiturContainer}></View>
              <View style={styles.fiturContainer}></View> 
            </View>
            <View style={{flexDirection:'row'}}>
              <View style={styles.fiturContainer}></View>
              <View style={styles.fiturContainer}></View>
              <View style={styles.fiturContainer}></View> 
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
    elevation:10
  },
  historyContainer:{
    width: 150,
    height: 100,
    marginBottom:10,
    marginRight:10,
    marginTop:10,
    borderRadius:20,
    backgroundColor:'#338333',
    elevation:8,
    shadowColor:'black',
  },
  fiturContainer:{
    width: 80,
    height: 80,
    marginBottom:10,
    marginRight:25,
    marginTop:10,
    borderRadius:20,
    backgroundColor:'#338333',
    elevation:8,
    shadowColor:'black',
  }
})