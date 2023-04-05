import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { theme } from '../theme';

const urlImageAnalytics = 'https://images.unsplash.com/photo-1543946207-39bd91e70ca7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80';

export const Analytics: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image source={{uri:urlImageAnalytics}} style={styles.ImageFitting}/>
      <View style={[StyleSheet.absoluteFill , {alignItems:'center'}]}>
        <Text>Analytics</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  ImageFitting:{
    flex:1,
    width: theme.maxWidth,
    height: theme.maxHeight,
  },
});
