import React, {useContext} from 'react';
import classes from './Navigation.module.css';
import { InputContext } from '../../Context/inputContext/InputContext';
import { weatherContext } from '../../Context/weatherContext/weatherContext';


const NavInput = () => {
    const {setValue} = useContext(InputContext);
    const {getWeatherByCity} = useContext(weatherContext);
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            getWeatherByCity()
            }}>
            <input text="text" 
            placeholder="Enter your city" 
            className={classes.Input} 
            onChange={(e) => setValue(e.target.value)}
            />
        </form>
    )
}

export default NavInput;