import React from "react";
import {View, Text, StyleSheet, Pressable} from "react-native";
import { MoodOptionType } from "../types";

const moodOptions: MoodOptionType[] = [
    { emoji: '🧑‍💻', description: 'studious' },
    { emoji: '🤔', description: 'pensive' },
    { emoji: '😊', description: 'happy' },
    { emoji: '🥳', description: 'celebratory' },
    { emoji: '😤', description: 'frustrated' },
  ];

export const MoodPickerEmojies: React.FC =()=>{
    const[selectedMood , setSelectedMood] = React.useState<MoodOptionType>();
    return(
        <View style={styles.moodList}>
            {moodOptions.map((option)=>(
                <View>
                    <Pressable onPress={()=>{
                        setSelectedMood(option)}}
                        style={[styles.AllItems , selectedMood?.emoji === option.emoji? styles.TapedItem : undefined ]}>
                        <Text key={option.emoji} style={styles.moodEmojiText}>{option.emoji}</Text>
                    </Pressable>
                    <Text style={styles.moodDisText}>{selectedMood?.description === option.description?  option.description : undefined }</Text>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    moodEmojiText: {
        fontSize: 30,
    },
    moodDisText:{
        fontSize: 13,
        // color:'#454C74',
        color:'#fff',
        fontWeight:'bold',
        textAlign:'center',
    },
    moodList: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },
    AllItems:{
        height:70,
        width:70,
        justifyContent:'center',
        alignItems:'center'
    },
    TapedItem:{
        borderRadius:35,
        backgroundColor:'#454C74',
    }
})
