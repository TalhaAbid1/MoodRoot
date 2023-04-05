import React from 'react';
import { StyleSheet, View, Image, Pressable} from 'react-native';
import { MoodPickerEmojies } from '../Components/MoodPickerEmojies';  
import { useAppContext } from '../context/App.Context.Provider';
import { SelfCustomizedText } from '../Components/customText';
import { theme } from '../theme';

const urlImageHome = 'https://images.unsplash.com/photo-1541472555878-357a209eb293?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80';
export const Home: React.FC = () => {
  const setContext = useAppContext();

  return (
    <View style={styles.container}>
      <Image source={{uri:urlImageHome}} style={styles.ImageFitting} />
      <View style={[StyleSheet.absoluteFill , {justifyContent:'center'}]}>
        {/* Self Created Custom Text */}
        <SelfCustomizedText fontFamily={'bold'} style={styles.Heading}>Mood Root</SelfCustomizedText>
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
    position:'absolute',
    alignSelf:'center',
    color: theme.colorWhite,
    backgroundColor:'rgba(219, 204, 204,0.7)',      
    fontSize:23,
    top:13,
    paddingHorizontal:10,
    borderRadius:10,
    borderWidth:2,
    borderColor:theme.colorLavender,
    textAlign:'center',
    verticalAlign:'bottom',
  },
  ImageFitting:{
    flex:1,
    width: theme.maxWidth,
    height: theme.maxHeight,
  },
});
