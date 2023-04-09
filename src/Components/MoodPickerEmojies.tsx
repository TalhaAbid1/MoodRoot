import React from "react";
import { View, Text, StyleSheet, Pressable, ToastAndroid, Image, } from "react-native";
import { MoodOptionType } from "../types";
import { theme } from "../theme";
import Reanimated, {useAnimatedStyle, withTiming} from "react-native-reanimated";

const AnimatedPressable = Reanimated.createAnimatedComponent(Pressable)

type MoodPickerProps = {
    getMoodList: (moodOption: MoodOptionType) => void;
}

const moodOptions: MoodOptionType[] = [
    { emoji: '🧑‍💻', description: 'Studious' },
    { emoji: '🤔', description: 'Pensive' },
    { emoji: '😊', description: 'Happy' },
    { emoji: '🥳', description: 'Celebratory' },
    { emoji: '😇', description: 'Blessed' },
    { emoji: '😤', description: 'Frustrated' },
    { emoji: '😢', description: 'Sad' },
    { emoji: '😭', description: 'Cry' },
    { emoji: '💔', description: 'Broken' },
    { emoji: '❤', description: 'Love' },
];

const butterfliesImage = require('../../assets/images/butterflies.png');


export const MoodPickerEmojies: React.FC<MoodPickerProps> = ({ getMoodList }) => {
    const [selectedMood, setSelectedMood] = React.useState<MoodOptionType>();
    const [hasSelectedMood, setHasSelectedMood] =  React.useState<boolean>(false)

    const animateStyle = useAnimatedStyle(()=>({
        opacity : selectedMood ? withTiming(1) : withTiming(0.5),
        transform:[{scale: selectedMood ? withTiming(1.2) : withTiming(1), }]
    }),[selectedMood])

    const updateAndClear = React.useCallback(() => {
        if (selectedMood) {
            getMoodList(selectedMood)
            setSelectedMood(undefined)
            ToastAndroid.show( selectedMood.emoji + ' Added.', ToastAndroid.SHORT);
            setHasSelectedMood(true)  
        }
        else{
            ToastAndroid.show('PLease, Select Mood.', ToastAndroid.SHORT);
        }
    }, [selectedMood,getMoodList])

    if (hasSelectedMood) {
        return (
            <View style={styles.container}>
                <Image style={styles.Butterflies} source={butterfliesImage}/>
                <Pressable style={styles.button} onPress={()=>{
                    setHasSelectedMood(false)
                }}>
                    <Text style={styles.buttonText}>Choose Another!</Text>
                </Pressable>
            </View>            
        )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>How's your mood right now?</Text>
            <View style={styles.moodList}>
                {moodOptions.slice().reverse().map(option => (
                    <View key={option.emoji}>
                        <Pressable
                            onPress={() => setSelectedMood(option)}
                            style={[
                                styles.moodItem,
                                option.emoji === selectedMood?.emoji
                                    ? undefined
                                    : styles.selectedMoodItem,
                            ]}>
                            <Text style={styles.moodText}>{option.emoji}</Text>
                        </Pressable>
                        <Text style={styles.descriptionText}>
                            {selectedMood?.emoji === option.emoji ? option.description : ' '}
                        </Text>
                    </View>
                ))}
            </View>
            <AnimatedPressable style={[styles.button , animateStyle]} onPress={updateAndClear}>
                <Text style={styles.buttonText}>Choose</Text>
            </AnimatedPressable>
        </View>
    );
}

const styles = StyleSheet.create({
    moodText: {
        fontSize: 30,
    },
    moodList: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap:'wrap'
    },
    moodItem: {
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
    },
    selectedMoodItem: {
        borderWidth: 2,
        backgroundColor: theme.colorParentBlue,
        borderColor: theme.colorWhite,
    },
    descriptionText: {
        color: theme.colorWhite,
        fontFamily: theme.fontFamilyBold,
        fontSize: 13,
        textAlign: 'center',
        marginBottom:10,
    },
    container: {
        borderWidth: 2,
        borderColor: theme.colorParentBlue,
        margin: 10,
        borderRadius: 10,
        padding: 20,
        backgroundColor: 'rgba(1, 25, 64,0.5)',
    },
    heading: {
        fontSize: 23,
        fontFamily: theme.fontFamilyRegular,
        letterSpacing: 1,
        textAlign: 'center',
        marginBottom: 20,
        color: theme.colorWhite,
    },
    button: {
        backgroundColor: theme.colorParentBlue,
        width: 150,
        borderRadius: 20,
        marginTop: 20,
        alignSelf: 'center',
        padding: 10,
        elevation:10,
    },
    buttonText: {
        color: theme.colorWhite,
        textAlign: 'center',
        fontFamily: theme.fontFamilyBold,
    },
    Butterflies:{
        alignSelf:'center',
    },
})
