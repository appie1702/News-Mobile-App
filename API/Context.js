import axios from "axios";
import React,{ createContext, useEffect, useState } from "react";
import { getNewsAPI, getSearchNewsAPI, getSourceApi } from "./api";
export const  NewsContext = createContext();


const Context = ({children}) => {
    const [news, setnews] = useState([]);
    const [category, setcategory] = useState("general");
    const [index, setindex] = useState(0);
    const [source, setsource] = useState();
    const [searchnews, setsearchnews] = useState({articles:[]})
    const [dark, setdark] = useState(false);

    const fetchNews = async(reset=category) => {
        const {data} = await axios.get(getNewsAPI(reset));
        setnews(data);
        setindex(1);
    }
 
    const fetchSearchNews = async(text) => {
        try{
            const {data} = await axios.get(getSearchNewsAPI(text));
            setsearchnews(data);
            
        }catch(err){
            console.log(err);
        }
    }

    const fetchNewsFromSource = async(source) =>{
        try{
            const {data} = await axios.get(getSourceApi(source));
            setnews(data);
            setindex(1);
        }catch(error){
            console.log(error);
        }
    }

    return <NewsContext.Provider value={{
        news,
        category,
        index,
        source,
        searchnews,
        dark,
        setindex,
        setcategory,
        setsource,
        fetchNews,
        fetchNewsFromSource,
        fetchSearchNews,
        setsearchnews,
        setdark,
    }}>
        {children}
    </NewsContext.Provider>
};

export default Context;