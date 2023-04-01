import React from 'react';
import { StyleSheet, View,} from 'react-native';
import { MoodPickerEmojies } from '../Components/MoodPickerEmojies';  
import { useAppContext } from '../context/App.Context.Provider';

export const Home: React.FC = () => {
  const setContext = useAppContext();

  return (
    <View style={styles.container}>
      <MoodPickerEmojies getMoodList={setContext.selectedMoodList}/>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignContent:'center',
        backgroundColor:'#FFCB4C',
    },
});
