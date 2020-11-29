import React, {useContext} from 'react';
import classes from './Navigation.module.css';
import { InputContext } from '../../Context/inputContext/InputContext';
import { weatherContext } from '../../Context/weatherContext/weatherContext';


const NavInput = () => {
    const {inputState, setValue, clearValue} = useContext(InputContext);
    const {getWeatherByCity} = useContext(weatherContext);
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            getWeatherByCity();
            clearValue();
            console.log(e);
            }}>
            <input text="text" 
            placeholder="Enter your city" 
            className={classes.Input} 
            onChange={(e) => setValue(e.target.value)}
            value={inputState.inputValue}
            />
        </form>
    )
}

export default NavInput;