import { View, Text, TextInput, StyleSheet, TouchableOpacity, Modal } from 'react-native'
import React, { useContext, useState } from 'react'
import { NewsContext } from '../API/Context'
import { Entypo, AntDesign } from '@expo/vector-icons';
import SingleNews from './SingleNews';
const Search = () => {
    const {news:{articles},fetchSearchNews,searchnews,setsearchnews,dark} = useContext(NewsContext); 
    const [modalVisibility, setmodalVisibility] = useState(false);
    const [currentNews, setcurrentNews] = useState();
    const [search_q, setsearch_q] = useState("")

    
    const handleModal = (n)=>{
        setmodalVisibility(true);
        setcurrentNews(n);
    }

    const handletext = (text) => {
        if(text===""){
        setsearchnews([]);
        }
        else{
            setsearch_q(text);
        }
    }

    
  return (
    <View style={{width:'100%', position:'relative'}}>
        <View style={{flex:1, flexDirection:'row',justifyContent:'space-evenly'}}>
            <TextInput 
                style={{
                    ...styles.search, 
                    backgroundColor:dark ? 'black':'#C7C6C6', 
                    color: dark ? 'white':'black',
                    }}
                onChangeText={(text)=>handletext(text)}
                placeholder="Search for News"
                placeholderTextColor={dark?'white':'black'}
            />
            <TouchableOpacity style={{...styles.searchIcon, backgroundColor:dark ? 'black':'#C7C6C6'}} onPress={()=>fetchSearchNews(search_q)}>
                <AntDesign name="search1" size={24}  color={dark? "white":"black"} />
            </TouchableOpacity>
        </View>
        <View style={styles.searchResults}>
            {searchnews['articles']?.slice(0,8).map((n)=>(
                
                <TouchableOpacity
                    key={n.title}
                    activeOpacity={0.7}
                    onPress = {()=>handleModal(n)}
                >
                    <Text
                        style={{...styles.singleResult,
                            backgroundColor:'black',
                            color:'white'
                        }}
                    >
                        {n.title}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>

        <Modal 
            animationType='slide'
            transparent={true}
            visible={modalVisibility}
            onRequestClose={()=>{
                setmodalVisibility(!modalVisibility);
            }}
        >
            <TouchableOpacity
                onPress={()=>setmodalVisibility(!modalVisibility)}
                style={{
                    position:'absolute',
                    zIndex:2,
                    right:0,
                    margin:20,
                    marginTop:40
                }}
            >
                <Entypo name="circle-with-cross" size={30} color="white"/>
            </TouchableOpacity>

            <View style={{height:"100%", transform:[{scaleY:-1}]}}>
                <SingleNews item={currentNews}/>
            </View>
            
        </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
    search:{
        height:40,
        paddingVertical:10,
        paddingHorizontal: 15,
        borderRadius:5,
        fontSize: 15,
        marginBottom: 15,
        flex:1,
        marginRight:15,
    },
    searchResults:{
        position:'absolute',
        zIndex: 1,
        top: 50,
    },
    singleResult:{
        borderRadius: 5,
        padding: 10,
        margin: 0.5,
        shadowColor:'black',
        elevation: 5,
    },
    searchIcon:{
        height:40,
        paddingTop:8,
        paddingHorizontal:10,
        backgroundColor:'black',
        borderRadius:8,

    },

})

export default Search;