import { useWindowDimensions } from 'react-native'
import React, { useContext, useState } from 'react'
import { SceneMap, TabView } from 'react-native-tab-view';
import DiscoverScreen from '../Screens/DiscoverScreen';
import NewsScreen from '../Screens/NewsScreen';
import TopNavigation from './TopNavigation';
import { NewsContext } from '../API/Context';


const NewsTab = () => {
  const layout = useWindowDimensions();

  const {index, setindex} = useContext(NewsContext);

  const [routes] = useState([
    {key:'first', title:'Discover'},
    {key:'second', title:'News'},
  ])


  const renderScene = SceneMap({
    first: DiscoverScreen,
    second: NewsScreen
  });

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setindex}
      initialLayout= {{width: layout.width}}
      renderTabBar={()=><TopNavigation index={index} setindex={setindex}/>}
    />
  )
}

export default NewsTab;