import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { AppProvider } from './context/App.Context.Provider';
import { BottomTab } from './Screens/BottomTabNavigatior';
import SplashScreen from 'react-native-splash-screen';
// import { AppContext } from './context/App.Context.Provider';

// Followign 6 Lines Are Necessary To Include If You Need TO add "LayoutAnimation From React-native" in Android 
import { Platform, UIManager } from 'react-native';
if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

export const App: React.FC = () => {
  React.useEffect(()=>{
    SplashScreen.hide();
  },[]) 
  return (
    <>
    {/* If You Want  To Add Custom Value, Uncomment Following One as Well As comment The AppProvider In './context/App.Context.Provider' And comment the AppProvider*/}
    {/* <AppContext.Provider value={{greating:'ABID DEVELOVER'}}> */}
    <AppProvider>
      <StatusBar backgroundColor='#1D84B5' />
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
