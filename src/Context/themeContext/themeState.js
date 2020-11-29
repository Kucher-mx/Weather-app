import React, { useReducer } from 'react'
import {ThemeContext} from './themeContext';
import {themeReducer} from './themeReducer';
import {TOOGLE_THEME} from '../actionTypes';

const ThemeState = ({children}) => {
    const initialState = {
        themeEnabled: false,
    }
    const [themeState, dispatch] = useReducer(themeReducer, initialState);


    const toggleTheme = () => {
        dispatch({type: TOOGLE_THEME});
    }

    return (
        <ThemeContext.Provider value={{
            toggleTheme, themeState,
        }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeState;