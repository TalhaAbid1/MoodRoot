import React from "react";
import {Text} from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "./Home.screen";
import { History } from "./History.screen";
import { Analytics } from "./Analytics.screen";

const BottomTabsNavigator = createBottomTabNavigator();

export const BottomTab: React.FC = () =>{
    return(
        <BottomTabsNavigator.Navigator screenOptions={{
            tabBarActiveTintColor: '#FFCB4C',
            tabBarInactiveTintColor: '#fff',
            tabBarHideOnKeyboard: true,
            tabBarLabelStyle: {
              fontSize: 13,
              fontWeight:"bold",
            },
            headerShown: false,
            tabBarStyle: {
              backgroundColor: '#454c73',
              height: 50,
              paddingBottom: 3,
              elevation:10,
            },
          }}>
            <BottomTabsNavigator.Screen name="Home" component={Home} options={{ tabBarIcon:()=>(<Text>🏡</Text>) }}/>
            <BottomTabsNavigator.Screen name="History" component={History} options={{ tabBarIcon:()=>(<Text>🔎</Text>) }}/>
            <BottomTabsNavigator.Screen name="Analytics" component={Analytics} options={{ tabBarIcon:()=>(<Text>📊</Text>) }}/>
        </BottomTabsNavigator.Navigator>
    );
}
