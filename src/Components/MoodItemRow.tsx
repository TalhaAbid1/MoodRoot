import React from 'react';
import { View, Text, StyleSheet, Pressable, LayoutAnimation , ToastAndroid} from 'react-native';
import format from 'date-fns/format';
import { MoodOptionWithTimeType } from '../types';
import { theme } from '../theme';
import { useAppContext } from '../context/App.Context.Provider';
import {GestureHandlerRootView, PanGestureHandler } from "react-native-gesture-handler";
import Reanimated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withTiming, runOnJS } from 'react-native-reanimated';

type MoodItemRowProps = {
  item: MoodOptionWithTimeType,
};

export const MoodItemRow: React.FC<MoodItemRowProps> = ({ item }) => {
  
  const contextForDeleteFunction = useAppContext();
  
  const handleDelete = React.useCallback(()=>{
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    contextForDeleteFunction.handleDeleteMood(item);
    ToastAndroid.show(item.mood.emoji  + ' Deleted'  , ToastAndroid.SHORT);
  },[contextForDeleteFunction, item, LayoutAnimation])

  const deleteWithDelay = React.useCallback(()=>{
    setTimeout(() => {
      handleDelete();
    }, 500);
  },[handleDelete])

  const maxSwipValue = 80;
  const transformValueX = useSharedValue(0);
  const onGesterEvent = useAnimatedGestureHandler({
    onActive:(event)=>{
      transformValueX.value = event.translationX 
    },
    onEnd:(event)=>{
      if (Math.abs(event.translationX) > maxSwipValue) {
        transformValueX.value = withTiming(1000 * Math.sign(event.translationX))
        // If You Want To Call Javascript Code With Animation or Animation Hook You Must Use runOnJS
        runOnJS(deleteWithDelay)()
      }
      else{
        transformValueX.value = withTiming(0)
      }
    },
  },[])
  const rowStyle = useAnimatedStyle(()=>({
    transform:[{translateX:transformValueX.value}],
  }),[]) 

  return (
    <GestureHandlerRootView>
      <PanGestureHandler 
      // activeOffsetX={[-1,1]} activeOffsetY={[-1,1]}
       onGestureEvent={onGesterEvent}>
        <Reanimated.View style={[styles.moodItem , rowStyle]}>
          <View style={styles.iconAndDescription}>
            <Text style={styles.moodValue}>{item.mood.emoji}</Text>
            <Text style={styles.moodDescription}>{item.mood.description}</Text>
          </View>
          <Text style={styles.moodDate}>
            {format(new Date(item.timeStamp), "dd MMM, yyyy 'at' h:mm a")}
          </Text>
          <Pressable hitSlop={6} onPress={handleDelete} >
            <Text style={styles.deleteText}>Delete</Text>
          </Pressable>
        </Reanimated.View>
      </PanGestureHandler>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  moodValue: {
    textAlign: 'center',
    fontSize: 40,
    marginRight: 10,
  },
  moodDate: {
    textAlign: 'center',
    color: theme.colorLavender,
    fontFamily: theme.fontFamilyLight,
  },
  moodItem: {
    backgroundColor: 'rgba(0,0,0,0.8)',
    marginBottom: 10,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius:15,
    borderColor:theme.colorPurple,
    borderWidth:1,
  },
  moodDescription: {
    fontSize: 18,
    color: theme.colorPurple,
    fontFamily: theme.fontFamilyBold,
  },
  iconAndDescription: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deleteText:{
    color:theme.colorRed,
    fontFamily:theme.fontFamilyRegular,
    borderColor:theme.colorBlack,
    padding:1,
    borderWidth:1,
    borderRadius:7,
    textAlign:'center',
    verticalAlign:'bottom',
  },
});