import { SafeAreaView, StatusBar } from 'react-native';
import React, { useContext } from 'react';
import NewsTab from './components/NewsTabs';
import Context,{ NewsContext } from './API/Context';



function App() {

  {/*
  package.json newer dependencies:-
  "@expo/vector-icons": "^13.0.0",
    "@expo/webpack-config": "^0.17.2",
    "axios": "^1.3.0",
    "expo": "~42.0.0",
    "expo-status-bar": "~1.4.2",
    "react": "18.1.0",
    "react-dom": "18.1.0",
    "react-native": "https://github.com/expo/react-native/archive/sdk-42.0.0.tar.gz",
    "react-native-pager-view": "6.0.1",
    "react-native-snap-carousel": "^3.9.1",
    "react-native-tab-view": "^3.3.4",
    "react-native-web": "~0.18.7","*/}

  const {dark} = useContext(NewsContext);
  StatusBar.setBarStyle('dark-content', true);
  return (
    <SafeAreaView style={{flex:1, backgroundColor : dark? '#282C35':'white'}}>
        <NewsTab/>
    </SafeAreaView>
  );
}

export default ()=>{
  return(
  <Context>
    <App/>
  </Context>
  )
}