import React from 'react';
import { StyleSheet, View , Image , Text} from 'react-native';
import { VictoryPie } from 'victory-native';
import groupBy from 'lodash/groupBy';
import { theme } from '../theme';
import { useAppContext } from '../context/App.Context.Provider';

const urlImageAnalytics = 'https://images.unsplash.com/photo-1610987039121-d70917dcc6f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80';
export const Analytics: React.FC = () => {
  const appContext = useAppContext();

  const data = Object.entries(groupBy(appContext.moodList, 'mood.emoji')).map(
    ([key, value]) => ({
      x: key,
      y: value.length,
    }),
  );

  return (
    <View style={styles.container}>
      <Image source={{uri:urlImageAnalytics}} style={styles.ImageFitting}/>
      <View style={[StyleSheet.absoluteFill , {alignItems:'center'}]}>
        <View style={styles.BlurBackgroung}>
          <Text style={styles.HistoryHead}>Mood History Chart</Text>
          <VictoryPie
            labelRadius={90}
            labels={({ datum }) => datum.x}
            radius={150}
            innerRadius={10}
            cornerRadius={({ datum }) => datum.y * 30}
            colorScale={[
              theme.colorRed,
              theme.colorBlue,
              theme.colorYellow,
              theme.colorDarkPink,
              theme.colorGreen,
              theme.colorLavender,
              theme.colorWhite,
              theme.colorOrange,
              theme.colorBlack,
              theme.colorPurple,
            ]}
            style={{ labels: { fontSize: 18 } ,  }}
            data={data}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ImageFitting:{
    flex:1,
    width: theme.maxWidth,
    height: theme.maxHeight,
  },
  BlurBackgroung:{
    backgroundColor:'rgba(59,71,63,0.4)',
    height:theme.maxHeight,
    width:theme.maxWidth,
  },
  HistoryHead:{
    marginVertical:7,
    marginBottom:30,
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
});