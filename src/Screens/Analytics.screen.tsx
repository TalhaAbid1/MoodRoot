import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';

export const Analytics: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Analytics</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#FFCB4C',
  },
});
