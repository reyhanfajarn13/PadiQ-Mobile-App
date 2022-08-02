import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

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

export default takePhoto;