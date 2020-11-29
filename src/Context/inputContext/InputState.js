import {useReducer, useContext} from 'react';
import { SET_INPUT, CLEAR_INPUT } from '../actionTypes';
import {InputContext} from './InputContext';
import inputReducer from './InputReducer';

const InputState = ({children}) => {
    const initialState ={
        inputValue: null,
    }
    const [inputState, dispatch] = useReducer(inputReducer, initialState);

    const setValue = (value) => {
        dispatch({type: SET_INPUT, payload: value});
    }

    const clearValue = () => {
        dispatch({type: CLEAR_INPUT});
    }
    
    return (
        <InputContext.Provider value={{
            inputState, setValue, clearValue
        }}>
            {children}
        </InputContext.Provider>
    )
}

export default InputState;