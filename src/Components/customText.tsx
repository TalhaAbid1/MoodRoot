import React from 'react';
import { Text, TextProps } from 'react-native';
import { theme } from '../theme';

type AppTextType = TextProps & {
    fontFamily?: 'bold' | 'regular' | 'light';
    fontSize?: 10 | 15 | 18;
};

export const SelfCustomizedText: React.FC<AppTextType> = ({children , fontFamily, style, ...props}) => {
    const fontStyle = React.useMemo(() => {
        if (fontFamily === 'bold') {    
            return { fontFamily: theme.fontFamilyBold };
        }
        else if (fontFamily === 'regular') {    
            return { fontFamily: theme.fontFamilyRegular };
        }
        else if (fontFamily === 'light') {    
            return { fontFamily: theme.fontFamilyLight };
        }
    }, [fontFamily]);
        
        return(
            <Text { ...props } style = {[style , fontStyle]}>{ children }</Text >
        );
}
