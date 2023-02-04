import { View, Text, StyleSheet, Dimensions, Image, ImageBackground, TouchableOpacity, Linking } from 'react-native'
import React, { useContext } from 'react'
import { NewsContext } from '../API/Context';



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const SingleNews = ({item,index}) => {

    const {dark} = useContext(NewsContext);

  return (  
    <View style={{height: windowHeight, width: windowWidth, transform:[{scaleY:-1}]}}>
      {(!item.urlToImage) ? (
        <Image 
        source={require('../assets/image.jpg')}
        style={{height:'45%', resizeMode:'cover', width: windowWidth}}
        />
      )
      :
      (
        <Image 
        source={{uri:item.urlToImage}}
        style={{height:'45%', resizeMode:'cover', width: windowWidth}}
        />
      )
      }
      <View style={{...styles.description, backgroundColor: dark? '#282C35':'white'}}>
        <Text style={{...styles.title,color:dark?'white':'black'}}>{item.title}</Text>
        <Text style={{...styles.content, color:dark?'white':'black'}}>{item.description}</Text>
        <Text style={{color:'white'}}>
          Short by:-    
          <Text style={{fontWeight:'bold'}}>
            {" "}
            {item.author ?? "Unknown"}
          </Text>
        </Text>
      </View>

      <View
          blurRadius={30}
          style={{...styles.footer,backgroundColor:dark?'black':'#C7C6C6'}}
        >
          <TouchableOpacity onPress={()=>Linking.openURL(item.url)}>
            <View style={{display:'flex', flexDirection:'column'}}>
              <Text style={{fontSize: 14, color:dark?'white':'black', paddingTop:20}}>
                
                { item?.content ? `${item?.content?.slice(0.45)}...` : 'Visit Site to :'}
              </Text> 
              <Text style={{fontSize:15, fontWeight:"bold" ,color:dark?'white':'black', alignContent:'flex-end'}}>
                Read More
              </Text>
            </View>
          </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  description: {
    padding: 15,
    flex: 1,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    paddingBottom: 10,
  },
  content: { fontSize: 18, paddingBottom: 10 },
  footer: {
    paddingBottom:50,
    height: 120,
    width: windowWidth,
    position: "absolute",
    bottom: 0,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
});


export default SingleNews;