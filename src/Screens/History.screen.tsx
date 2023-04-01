import React from 'react';
import { StyleSheet, ScrollView, View, TouchableOpacity, Text } from 'react-native';
import { MoodItemRow } from '../Components/MoodItemRow';
import { useAppContext } from '../context/App.Context.Provider';

export const History: React.FC = () => {
  const appContext = useAppContext();

  return (
    <View style={styles.container}>
      <Text style={styles.HistoryHead}>Mood History</Text>
      <ScrollView>
        {appContext.moodList.map(item=>
        <MoodItemRow item={item}  key={item.timeStamp}/>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    paddingTop:5,
    flex:1,
    backgroundColor:'#FFCB4C',
  },
  HistoryHead:{
    marginBottom:7,
    color:'#000',
    alignSelf:'center',
    fontWeight:'bold',
  },
});
