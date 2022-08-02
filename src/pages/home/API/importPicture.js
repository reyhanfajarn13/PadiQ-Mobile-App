import {launchCamera, launchImageLibrary} from 'react-native-image-picker';


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

export default openGallery