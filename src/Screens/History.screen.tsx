import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';

export const History: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>History</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#FFCB4C',
},
});
