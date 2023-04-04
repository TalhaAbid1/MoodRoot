import React from 'react';
import { StyleSheet, View, Image, Text} from 'react-native';
import { MoodPickerEmojies } from '../Components/MoodPickerEmojies';  
import { useAppContext } from '../context/App.Context.Provider';
import { theme } from '../theme';
import { SelfCustomizedText } from '../Components/customText';

const urlImage = 'https://images.unsplash.com/photo-1474540412665-1cdae210ae6b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1766&q=80';
export const Home: React.FC = () => {
  const setContext = useAppContext();

  return (
    <View style={styles.container}>
      <Image source={{uri:urlImage}} style={styles.ImageFitting} />
      <View style={[StyleSheet.absoluteFill , {justifyContent:'center'}]}>
        {/* Self Created Custom Text */}
        <SelfCustomizedText fontFamily={'bold'} style={styles.Heading} >ABID</SelfCustomizedText>
        <MoodPickerEmojies getMoodList={setContext.selectedMoodList}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignContent:'center',
    },
    Heading:{
      alignSelf:'center',
      color: '#fff',
      fontSize:50,
      marginBottom:10,
      padding:10,
    },
    ImageFitting:{
      flex:1,
      width: theme.maxWidth,
      height: theme.maxHeight,
    },
});
