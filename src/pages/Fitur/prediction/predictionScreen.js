import {
  SafeAreaView,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  Platform,
  Dimensions,
  useColorScheme,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {splashBackground } from '../../../assets';
import axios from 'axios';
import React, {useEffect, useState }from 'react';
import Config from 'react-native-config';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker'


axios.interceptors.request.use(
  async config => {
    let request = config;
    request.headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };
    request.url = configureUrl(config.url);
    return request;
  },
  error => {
    throw error
  },
);

export const {height, width} = Dimensions.get('window');

export const configureUrl = url => {
  let authUrl = url;
  if (url && url[url.length - 1] === '/') {
    authUrl = url.substring(0, url.length - 1);
  }
  return authUrl;
};

const options = {
  mediaType: 'photo',
  quality: 1,
  width: 150,
  height: 150,
  includeBase64: true,
};

 
const PredictionScreen = () => {
  const [result, setResult] = useState('');
  const [label, setLabel] = useState('');
  const [image, setImage] = useState('');
  
  const getPredication = async params => {
    return new Promise((resolve, reject) => {
      var bodyFormData = new FormData();
      bodyFormData.append('file', params);
      const url = Config.URL;
      return axios
        .post(url, bodyFormData)
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          setLabel('Failed to predicting.');
          reject('err', error);
        });
    });
  };

  const openCamera = async () => {
    launchCamera(options, async response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const uri = response?.assets[0]?.uri;
        const path = Platform.OS !== 'ios' ? uri : 'file://' + uri;
        getResult(path, response);
      }
    });
  };

  const clearOutput = () => {
    setResult('');
    setImage('');
  };

  const getResult = async (path, response) => {
    setImage(path);
    setLabel('Predicting...');
    setResult('');
    const params = {
      uri: path,
      name: response.assets[0].fileName,
      type: response.assets[0].type,
    };
    const res = await getPredication(params);
    if (res?.data?.class) {
      setLabel(res.data.class);
      setResult(res.data.confidence);
    } else {
      setLabel('Failed to predict');
    }
  };

  const openLibrary = async () => {
    launchImageLibrary(options, async response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const uri = response.assets[0].uri;
        const path = Platform.OS !== 'ios' ? uri : 'file://' + uri;
        getResult(path, response);
      }
    });
  };
  
  return (
    <View style={styles.outer}>
      <ImageBackground 
        blurRadius={10}
        source={splashBackground}
        style={{height:height, width:width}}
        />
      <Text style={styles.title}>{'PadiQ \nAplikasi Prediksi'}</Text>
      <TouchableOpacity onPress={clearOutput} style={styles.clearStyle}>
        <Image source={{uri: 'clean'}} style={styles.clearImage} />
      </TouchableOpacity>
      {(image?.length && (
        <Image source={{uri: image}} style={styles.imageStyle} />
      )) ||
        null}
      {(result && label && (
        <View style={styles.mainOuter}>
          <Text style={[styles.space, styles.labelText]}>
            {'Label: \n'}
            <Text style={styles.resultText}>{label}</Text>
          </Text>
          <Text style={[styles.space, styles.labelText]}>
            {'Akurasi: \n'}
            <Text style={styles.resultText}>
              {parseFloat(result).toFixed(2) + '%'}
            </Text>
          </Text>
        </View>
      )) ||
        (image && <Text style={styles.emptyText}>{label}</Text>) || (
          <Text style={styles.emptyText}>
            Gunakan tombol dibawah untuk prediksi penyakit padi.
          </Text>
        )}
      <View style={styles.predictBtn}>
    <TouchableOpacity 
      style={styles.btnStyle}
      activeOpacity={0.9} 
      onPress={openLibrary}>
      <Text style={styles.predictText}>Import Foto</Text>
    </TouchableOpacity>
    <TouchableOpacity 
      style={styles.btnStyle} 
      onPress={openCamera}>
      <Text style={styles.predictText}>Ambil Foto</Text>
    </TouchableOpacity>
    </View>
    </View>
  )
}

export default PredictionScreen

const styles = StyleSheet.create({
  title: {
    alignSelf: 'center',
    position: 'absolute',
    fontSize: 30,
    top:40,
    fontWeight:'bold',
    color: '#fff',
  },
  clearImage: {height: 40, width: 40, tintColor: '#FFF'},
  mainOuter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    top: height / 1.6,
    alignSelf: 'center',
  },
  outer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  predictBtn:{
  bottom:80,
  justifyContent:'space-between',
  flexDirection:"row",
  position:'absolute'
  },
  btnStyle: {
    backgroundColor:"#649e94",
    opacity: 0.8,
    marginHorizontal: 30,
    padding: 20,
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: '#FFF',
  },
  predictText:{
    color:'white',
    fontWeight:'bold'
  },
  imageStyle: {
    marginBottom: 50,
    width: width / 1.5,
    height: width / 1.5,
    borderRadius: 20,
    position: 'absolute',
    borderWidth: 0.3,
    borderColor: '#FFF',
    top: height / 4.5,
  },
  clearStyle: {
    position: 'absolute',
    top: 100,
    right: 30,
    tintColor: 'black',
    zIndex: 10,
  },
  space: {marginVertical: 10, marginHorizontal: 10},
  labelText: {color: '#fff', fontSize: 20, fontWeight:'bold'},
  resultText: {fontSize: 32, fontWeight:'bold'},
  imageIcon: {height: 40, width: 40, tintColor: '#000'},
  emptyText: {
    position: 'absolute',
    top: height / 1.6,
    alignSelf: 'center',
    color: '#fff',
    fontSize: 20,
    maxWidth: '70%',
    fontWeight:'bold'
  },
})