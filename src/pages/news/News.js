import { StyleSheet, Text, View, 
  SectionList, SafeAreaView, 
  Image, ScrollView, ImageBackground,
   Dimensions, TextInput, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import { homeBackground, logo } from '../../assets';
import { async } from '@firebase/util';



const newsSections = [
{id: '0', text:'Tungro Padi', image:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Rice_plants_affected_by_tungro_disease1.jpg/640px-Rice_plants_affected_by_tungro_disease1.jpg'},
{id: '1', text:'Blas Padi', image:'https://medialampung.co.id/wp-content/uploads/2020/09/blas.jpg'},
{id: '2', text:'Bercak Coklat Daun', image:'https://krishijagran.com/media/42176/pest.png'},
{id: '3', text:'Hawar Daun', image:'http://www.knowledgebank.irri.org/images/stories/bacterial-leaf-blight-1.JPG'}  
]

const News = () => {
  const [search,setSearch] = useState('')
  const [filteredDataSource, setFilteredDataSource] = useState(newsSections)
 

  useEffect(() => {
      if(search === ''){
       setFilteredDataSource(newsSections)
      }else{
        setFilteredDataSource(
          newsSections.filter(
            (item) => 
              item.text.toLowerCase().indexOf(search.toLowerCase()) > -1
          )
        )
      }
    }, [search])
  

  
  const renderItemText = ({item}) =>{
    return (
      <ScrollView >
      <View style={{flexDirection:'column', marginLeft:10, marginBottom:'40%', marginRight:10, marginTop:'5%', elevation:10, borderColor:'white', borderWidth:5, borderRadius:20}}>
        <Image source={{uri:item.image}} style={{maxWidth:'100%', height:'35%', borderTopLeftRadius:20, borderTopRightRadius:20, resizeMode:'cover'}}/>
        <View style={styles.row}>
        <Text style={styles.ItemText}>{item.text}</Text>
        </View>
      </View>
      </ScrollView>
    )
  }
  return (
   
      <SafeAreaView style={{flex:1}} > 
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
        <View style={{ padding:10 }}>
          <View style={{alignItems:'center', marginTop:10}}>
          <View floatingLabel style={styles.inputViewSearch}>
            <TextInput style={styles.inputText}
            placeholder="Cari Artikel"
            placeholderTextColor="#fff"
            inlineImageLeft='username'
            inlineImagePadding={2}
            value={search}
            onChangeText={text => setSearch(text)}
              />
          </View>
          </View>
        <FlatList 
            data={filteredDataSource}
            renderItem={renderItemText}
            keyExtractor={(item)=>item.id}
        />
        </View>
        </View>

        
    </SafeAreaView>
  


    
  )
}

export default News

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  row:{
    marginBottom:10,
    backgroundColor:'#255045',
    width:'100%',
    height: 300,
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
  },
  header:{
    padding: 15,
    marginBottom: 5,
    backgroundColor: '#255045',
    color:'white',
    fontWeight:'bold',
    fontSize:20,
  },
  ItemText:{
    color:'white',
    fontSize:25,
    fontWeight:'bold',
    margin:10
  },
  brandView:{
    flex:1,
    justifyContent:'flex-start',
    alignItems:'flex-start',
    marginVertical:60,
    marginHorizontal:40
  },
  bottomView:{
    flex:1,
    backgroundColor:'#D9D9D9',
    bottom:50,
    borderTopStartRadius:60,
    borderTopEndRadius:60
  },
  inputViewSearch:{
    width:"90%",
    backgroundColor:"#338333",
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
  }
})