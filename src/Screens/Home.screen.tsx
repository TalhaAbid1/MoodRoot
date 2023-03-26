import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { MoodItemRow } from '../Components/MoodItemRow';
import { MoodPickerEmojies } from '../Components/MoodPickerEmojies';
import { MoodOptionType, MoodOptionWithTimeType } from '../types';

export const Home: React.FC = () => {
  const[moodList, setMoodList] = React.useState<MoodOptionWithTimeType[]>([]);
  
  const selectedMoodList = React.useCallback((moodSelected: MoodOptionType) =>{
    setMoodList(current => [...current , {mood: moodSelected , timeStamp: Date.now()}])   
  },[])

  return (
    <View style={styles.container}>
      <MoodPickerEmojies getMoodList={selectedMoodList}/>
      <ScrollView>
        {moodList.map(item=>
        <MoodItemRow item={item}  key={item.timeStamp}/>
        )}
      </ScrollView>
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
