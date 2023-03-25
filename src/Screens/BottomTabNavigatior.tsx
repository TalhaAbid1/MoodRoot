import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "./Home.screen";
import { History } from "./History.screen";
import { Analytics } from "./Analytics.screen";

const BottomTabsNavigator = createBottomTabNavigator();

export const BottomTab: React.FC = () =>{
    return(
        <BottomTabsNavigator.Navigator screenOptions={{ headerShown: false }}>
            <BottomTabsNavigator.Screen name="Home" component={Home}/>
            <BottomTabsNavigator.Screen name="History" component={History}/>
            <BottomTabsNavigator.Screen name="Analytics" component={Analytics}/>
        </BottomTabsNavigator.Navigator>
    );
}
