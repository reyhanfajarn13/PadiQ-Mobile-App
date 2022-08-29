import { StyleSheet, Text, View, SectionList, SafeAreaView, Image, ScrollView } from 'react-native'
import React from 'react'

const newsSections = [
{
    id:'0',
    title: 'Daftar Penyakit Tersedia',
    data:[
      {id: '0', text:'Tungro Padi', image:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Rice_plants_affected_by_tungro_disease1.jpg/640px-Rice_plants_affected_by_tungro_disease1.jpg'},
      {id: '1', text:'Blas Padi', image:'https://medialampung.co.id/wp-content/uploads/2020/09/blas.jpg'},
      {id: '2', text:'Brown Spot Padi', image:'https://krishijagran.com/media/42176/pest.png'},
      {id: '3', text:'Bacterial Light', image:'http://www.knowledgebank.irri.org/images/stories/bacterial-leaf-blight-1.JPG'}
    ]
}
]

const News = () => {
  const renderItemText = (item) =>{
    return (
      <ScrollView>
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
       
      <SafeAreaView style={{flex:1}}>
        <SectionList 
            style={styles.container}
            sections={newsSections}
            renderItem={({item}) => renderItemText(item) }
            renderSectionHeader={( {section} ) =>(
                <Text style={styles.header}>{section.title}</Text>
        )}
        keyExtractor={(item) => item.id}
        />
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
  }
})