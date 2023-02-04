import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native'
import React, { useContext } from 'react'
import { NewsContext } from '../API/Context'
import {categories,sources} from '../API/api';
import Carousel from 'react-native-snap-carousel';
import Search from '../components/Search';

const DiscoverScreen = () => {

  const {setcategory, setsourcefetchNews, fetchNews,fetchNewsFromSource,dark} = useContext(NewsContext);
  const windowWidth = Dimensions.get('window').width;
  const SLIDE_WIDTH = Math.round(windowWidth/3.5);


  return (
    <View style={styles.discover}>
      {/*search*/}
      <Search/>

      {/*categories*/}
      <Text style={{...styles.subtitle, color:dark?'white':'black', paddingTop:55}}>Categories</Text>
      <Carousel
        layout={'default'}
        data={categories}
        renderItem={(item,index)=>(
          <TouchableOpacity 
            style={styles.category} 
            onPress={()=>fetchNews(item.item.name)}
          >
            <Image source={{uri: item.item.pic}} style={styles.categoryImage}/>
            <Text style={{...styles.name,color:dark?'white':'black'}}>{item.item.name}</Text>
          </TouchableOpacity>
        )}
        sliderWidth={windowWidth}
        itemWidth={SLIDE_WIDTH}
        activeSlideAlignment={"start"}
        inactiveSlideOpacity={1}
        inactiveSlideScale={1}
      />


      {/*sources*/}
        <Text style={{...styles.subtitle, color:dark?'white':'black'}}>
          Sources
        </Text>
        <View style={styles.sources}>
          {sources?.map((s)=>(
            <TouchableOpacity
              onPress={()=>fetchNewsFromSource(s.domain)}
              key={s.id}
              style={styles.sourceContainer}
            >
              <Image source={{uri:s.pic}} style={styles.sourceImage}/>
            </TouchableOpacity>
          ))}
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  discover: {
    padding: 10,
    alignItems: "center",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 8,
    marginHorizontal: 5,
    borderBottomColor: "#007FFF",
    borderBottomWidth: 5,
    alignSelf: "flex-start",
    borderRadius: 10,
  },
  category: {
    height: 130,
    margin: 10,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  categoryImage: {
    height: "60%",
    width: "100%",
    resizeMode: "contain",
  },
  name: {
    fontSize: 14,
    textTransform: "capitalize",
  },
  sources: {
    flexDirection: "row",
    flexWrap: "wrap",
    width:'100%',
    justifyContent: "space-around",
    paddingVertical: 10,
  },
  sourceContainer: {
    height: 160,
    width: "40%",
    borderRadius: 10,
    margin: 15,
    backgroundColor: "#cc313d",
  },
  sourceImage: {
    height: "100%",
    borderRadius: 10,
    resizeMode: "contain",
  },
});


export default DiscoverScreen;