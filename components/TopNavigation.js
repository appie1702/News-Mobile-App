import { View, Text,StyleSheet, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { AntDesign, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons'
import { NewsContext } from '../API/Context';


const TopNavigation = ({index, setindex}) => {
    const {fetchNews, setdark, dark} = useContext(NewsContext);

  return (
    <View style={{...styles.container, backgroundColor:dark?'#282c35':'white'}}>
      {index===0 ? (
        <TouchableOpacity style={styles.left} onPress={()=>setdark(!dark)}>
            <Text style={{...styles.text, color:dark?'lightgrey':'black'}}>
                <MaterialCommunityIcons
                    name='theme-light-dark'
                    size={24}
                    color='#007FFF'
                />
            </Text>
        </TouchableOpacity> )

        : 
        //all-news page
        (
            <TouchableOpacity style={styles.left} onPress={()=>setindex(index === 0 ? 1 : 0)}>
                 <SimpleLineIcons name='arrow-left' size={15} color='#007FFF'/>
                 <Text style={{...styles.text, color : dark ? 'lightgrey':'black'}}>Discover</Text>
            </TouchableOpacity>
        )}

        <Text style={{...styles.center, color:dark?'white':'black'}}>
            {index ? "All News" : "Discover"}
        </Text>

        { index ? (
            <TouchableOpacity style={styles.right} onPress={()=>fetchNews("general")}>
                <Text style={styles.text}>
                    <AntDesign name='reload1' size={24} color='#007FFF'/>
                </Text>
            </TouchableOpacity>
        ) : 
        (
            <TouchableOpacity
                style={styles.left}
                onPress={()=>fetchNews("general")}
            >
                <Text style={{...styles.text, color:dark?'white':'black'}}>All News</Text>
                <SimpleLineIcons name="arrow-right" size={15} color='#007FFF'/>
            </TouchableOpacity>
        )}
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent: 'space-between',
        padding: 10,
        alignItems: 'center',
        borderBottomColor:'black',
        borderBottomWidth:0.5,
    },
    left:{
        flexDirection:'row',
        alignItems:'center',
        width: 80,
        justifyContent:'space-between',
    },
    text:{
        fontSize: 16,
    },
    right: {
        width: 80,
        alignItems:'flex-end'
    },
    center:{
        paddingBottom: 6,
        borderBottomColor: '#007FFF',
        borderBottomWidth: 5,
        borderRadius: 10,
        fontSize: 16,
        fontWeight: '700'
    }
});

export default TopNavigation;