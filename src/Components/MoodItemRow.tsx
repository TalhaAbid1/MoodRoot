import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import format from 'date-fns/format';
import { MoodOptionWithTimeType } from '../types';
import { theme } from '../theme';

type MoodItemRowProps = {
  item: MoodOptionWithTimeType,
};

export const MoodItemRow: React.FC<MoodItemRowProps> = ({ item }) => {
  return (
    <View style={styles.moodItem}>
      <View style={styles.iconAndDescription}>
        <Text style={styles.moodValue}>{item.mood.emoji}</Text>
        <Text style={styles.moodDescription}>{item.mood.description}</Text>
      </View>
      <Text style={styles.moodDate}>
        {format(new Date(item.timeStamp), "dd MMM, yyyy 'at' h:mm a")}
      </Text>
    </View>
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
    fontFamily: theme.fontFamilyRegular,
  },
  moodItem: {
    backgroundColor: '#ffe7b0',
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
});