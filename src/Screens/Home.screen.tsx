import React from 'react';
import { StyleSheet, View, } from 'react-native';
import { MoodPickerEmojies } from '../Components/MoodPickerEmojies';

export const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <MoodPickerEmojies/>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignContent:'center',
        backgroundColor:'teal',
    },
});
