import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { AppProvider } from './context/App.Context.Provider';
// import { AppContext } from './context/App.Context.Provider';
import { BottomTab } from './Screens/BottomTabNavigatior';

export const App: React.FC = () => {
  return (
    <>
    {/* If You Want  To Add Custom Value, Uncomment Following One as Well As comment The AppProvider In './context/App.Context.Provider' And comment the AppProvider*/}
    {/* <AppContext.Provider value={{greating:'ABID DEVELOVER'}}> */}
    <AppProvider>
      <StatusBar backgroundColor="#454C73" />
      <NavigationContainer>
        <BottomTab/>
      </NavigationContainer>
    </AppProvider>
    {/* </AppContext.Provider> */}
    </>
  );
}

const styles = StyleSheet.create({
});
