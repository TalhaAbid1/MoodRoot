import React, {createContext} from "react";
import { MoodOptionType, MoodOptionWithTimeType } from "../types";
import { AppContextType, AppData, Props } from "./Context.Type";
import AsyncStorage from "@react-native-async-storage/async-storage";

const storageInDeviceKey = 'moodroot-app-data';

const setAppData = async (appdata: AppData):Promise<void> => {
    // try {
        await AsyncStorage.setItem(storageInDeviceKey , JSON.stringify(appdata))
    // } catch (error) {console.log("Here Is AN Error For ABID By SET function : " + error)}
}

const getAppData =async (): Promise<AppData | null> => {
    try {
        const isGet = await AsyncStorage.getItem(storageInDeviceKey);
        // Following If Is A Check Whether There IS Data Available Or Not 
        // &
        // If Available Just Bring It, Convert It By JSON.parse() And return It 
        if (isGet) {
            return(JSON.parse(isGet))
        }
    } catch (error) {console.log("Here Is An Error For ABID By GET Function : " + error)}

    return null;
}

const AppContext = createContext<AppContextType>({
    moodList: [],
    selectedMoodList: () => {},
    handleDeleteMood: () => {}
});

export const AppProvider: React.FC<Props> = ({children}) => {
    
    const[moodList, setMoodList] = React.useState<MoodOptionWithTimeType[]>([]);
  
    const selectedMoodList = React.useCallback((moodSelected: MoodOptionType) =>{
    setMoodList(current =>{
        const newMoodListValue = [
            ...current ,
            {mood: moodSelected , timeStamp: Date.now()},
        ];
        setAppData({moodList:newMoodListValue})
        return newMoodListValue;
    })
    },[])

    const handleDeleteMood = React.useCallback((moodDeleted : MoodOptionWithTimeType)=>{
        setMoodList(current=>{
            const updateAfterDeletion = current.filter(Selectedvalue => Selectedvalue.timeStamp !== moodDeleted.timeStamp )
            setAppData({moodList : updateAfterDeletion})
            return updateAfterDeletion;
        })
    },[])
    
    React.useEffect(()=>{
        const fetchAppData = async () => {
            const initialEffectData = await getAppData();
            if(initialEffectData){
                setMoodList(initialEffectData.moodList)
            }
        };

        fetchAppData();
    },[])

    return( 
        <AppContext.Provider value={{moodList , selectedMoodList , handleDeleteMood}}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => React.useContext(AppContext);



// --------------------------------------------------------------------------------------

// // if You are Willing To Assign Value To greeting you must Follow The Following Steps 

// import React from "react";

// type DataType = {
//     name: string,
//     email: string,
//     // can Add Function
//     function?: ()=> void
// }

// const data: DataType = {
//     name : '',
//     email: '',
// }

// export const AppContext = React.createContext(data);

// export const useAppContext = () => React.useContext(AppContext);

// // Go To App.js OR where Ever You Want To set Value 
// import AppContext From '../Context/FileName';

// const [authUserName, setAuthUserName] = useState('');
// const [authUserEmail, setAuthUserEmail] = useState('');

// <AppContext.Provider
// value={{
//   name: authUserName,
//   email: authUserEmail,
// }}>

// // Navigation Screens Include Bottom Navigation

// </AppContext.Provider>



// --------------------------------------------------------------------------------

// // Then GO to File Where It is Required To Use 
// // And Call This Way

// import {useAppContext} from '../Context/FileName';

// const userContext = useAppContext();

// <Text>Hi, {userContext.name ? userContext.name : 'Save-E User'}{' '} </Text>

