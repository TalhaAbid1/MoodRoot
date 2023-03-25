import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import { BottomTab } from './Screens/BottomTabNavigatior';

export const App: React.FC = () => {
  return (
    <NavigationContainer>
      <BottomTab/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
});
