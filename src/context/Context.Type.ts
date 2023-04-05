import { MoodOptionWithTimeType , MoodOptionType } from "../types";

export type AppContextType = {
    moodList: MoodOptionWithTimeType[];
    selectedMoodList:(mood: MoodOptionType )=> void;
    handleDeleteMood:(mood:  MoodOptionWithTimeType)=> void;
}

export type Props = {
    children: React.ReactNode;
}

export type AppData = {
    moodList: MoodOptionWithTimeType[];
}