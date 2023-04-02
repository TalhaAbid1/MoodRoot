export type MoodOptionType = {
    emoji: string;
    description: string;
};

export type MoodOptionWithTimeType={
    mood: MoodOptionType;
    timeStamp: number;
}
