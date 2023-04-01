import React, {createContext} from "react";
import { MoodOptionType, MoodOptionWithTimeType } from "../types";
import { AppContextType, Props } from "./Context.Type";

export const AppContext = createContext<AppContextType>({
    moodList: [],
    selectedMoodList: () => {}
});

export const AppProvider: React.FC<Props> = ({children}) => {
    
    const[moodList, setMoodList] = React.useState<MoodOptionWithTimeType[]>([]);
  
    const selectedMoodList = React.useCallback((moodSelected: MoodOptionType) =>{
    setMoodList(current => [...current , {mood: moodSelected , timeStamp: Date.now()}])   
    },[])
    
    return( 
        <AppContext.Provider value={{moodList , selectedMoodList}}>
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

