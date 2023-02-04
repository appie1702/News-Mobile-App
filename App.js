import { SafeAreaView, StatusBar } from 'react-native';
import React, { useContext } from 'react';
import NewsTab from './components/NewsTabs';
import Context,{ NewsContext } from './API/Context';



function App() {
  const {dark} = useContext(NewsContext);
  StatusBar.setBarStyle('light-content', true);
  return (
    <SafeAreaView style={{flex:1, backgroundColor : dark? '#282C35':'white', marginTop:StatusBar.currentHeight}}>
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