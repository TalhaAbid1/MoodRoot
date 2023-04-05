import React from 'react';
import { StyleSheet, ScrollView, View, Text, Image } from 'react-native';
import { MoodItemRow } from '../Components/MoodItemRow';
import { useAppContext } from '../context/App.Context.Provider';
import { theme } from '../theme';

const urlImageHistory = 'https://images.unsplash.com/photo-1594560562525-c691e827ca01?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80';

export const History: React.FC = () => {
  const appContext = useAppContext();

  return (
    <View style={styles.container}>
      <Image source={{uri:urlImageHistory}} style={styles.ImageFitting}/>
      <View style={[StyleSheet.absoluteFill , {justifyContent:'center'}]}>
        <Text style={styles.HistoryHead}>Mood History</Text>
        <ScrollView>
          {appContext.moodList.slice(0).reverse().map(item=>
          <MoodItemRow item={item}  key={item.timeStamp}/>
          )}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  HistoryHead:{
    marginVertical:7,
    color:theme.colorWhite,
    alignSelf:'center',
    fontSize:20,
    fontFamily:theme.fontFamilyBold,
    paddingHorizontal:10,
    borderRadius:10,
    borderWidth:1,
    borderColor:theme.colorLavender,
    textAlign:'center',
    verticalAlign:'middle',
    backgroundColor:'rgba(0,0,0,0.7)',
  },
  ImageFitting:{
    flex:1,
    height:theme.maxHeight,
    width:theme.maxWidth,
  },
});
