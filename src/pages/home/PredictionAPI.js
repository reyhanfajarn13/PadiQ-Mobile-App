import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { async } from '@firebase/util';

const PredictionAPI = () => {
    const options={
        title: 'Select Image',
    type: 'library',
    options: {
      maxHeight: 200,
      maxWidth: 200,
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: false
    }
}
    const openGallery = async () =>{
        const image = await launchImageLibrary(options);
        console.log(image)
    }


    const takePhotoOptions={
        title: 'Take Image',
        type: 'capture',
        options: {
          saveToPhotos: true,
          mediaType: 'photo',
          includeBase64: false,
        }
    }

    const takePhoto = async () =>{
        const image = await launchCamera(takePhotoOptions);
        console.log(image)
    }
  return (
    <View >
      <TouchableOpacity  onPress={openGallery} style={styles.btnView}>
        <Text style={{fontWeight:'bold',fontSize:20,color:'#ffffff'}}>Upload</Text>
      </TouchableOpacity>
      <TouchableOpacity  onPress={takePhoto} style={styles.btnView}>
        <Text style={{fontWeight:'bold',fontSize:20,color:'#ffffff'}}>Take Picture</Text>
      </TouchableOpacity>

    </View>
    
  )
}

export default PredictionAPI

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