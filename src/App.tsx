import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { BottomTab } from './Screens/BottomTabNavigatior';

export const App: React.FC = () => {
  return (
    <>
    <StatusBar backgroundColor="#454C73" />
    <NavigationContainer>
      <BottomTab/>
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
});
