import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "./Home.screen";
import { History } from "./History.screen";
import { Analytics } from "./Analytics.screen";
// import { Svg, Path, Circle } from 'react-native-svg';
import { AnalyticsIcon, HistoryIcon, HomeIcon } from "../Components/SvgIcons";

const BottomTabsNavigator = createBottomTabNavigator();

export const BottomTab: React.FC = () => {
  return (
    <BottomTabsNavigator.Navigator screenOptions={({route})=>({
      tabBarActiveTintColor: '#F9B510',
      tabBarInactiveTintColor: '#fff',
      tabBarHideOnKeyboard: true,
      tabBarShowLabel:false,
      headerShown: false,
      tabBarStyle: {
        backgroundColor: '#454c73',
        paddingTop:5,
        height:50,
        paddingBottom: 3,
      },
      tabBarIcon:({focused})=>{
        if (route.name === 'Home') {
            return(
              <HomeIcon focused={focused}/>
            )
          }
        else if (route.name === 'History') {
            return(
              <HistoryIcon focused={focused}/>
            )
          }
        else if (route.name === 'Analytics') {
          return(
            <AnalyticsIcon focused={focused}/>
          )
        }
      }
    })}>
      <BottomTabsNavigator.Screen name="Home" component={Home} 
      // options={{
      //   tabBarIcon: ({focused}) => (
      //     <HomeIcon focused={focused}/>
      //     )
      // }}
       />
      <BottomTabsNavigator.Screen name="History" component={History} 
      // options={{
      //    tabBarIcon: ({focused}) => (
      //     <HistoryIcon focused={focused}/>
      //     )
      // }}
       />
      <BottomTabsNavigator.Screen name="Analytics" component={Analytics} 
      // options={{
      //    tabBarIcon: ({focused}) => (
      //     <AnalyticsIcon focused={focused}/>
      //     )
      // }}
       />
    </BottomTabsNavigator.Navigator>
  );
}
