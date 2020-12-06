import React, {useContext} from 'react';
import NavLinks from './HeaderCmps/NavLinks';
import classes from './Styles/Header.module.css';
import { Link } from 'react-router-dom';
import NavInput from './HeaderCmps/Input';
import {weatherContext} from '../Context/weatherContext/weatherContext';
import { ThemeContext } from '../Context/themeContext/themeContext';

const Header = (link) => {
    const {clearWeather, getWeather} = useContext(weatherContext);
    const {themeState} = useContext(ThemeContext);
    const cls = [classes.Header, 'navbar navbar-expand-lg'];
    if(themeState.themeEnabled){
        cls.push(classes.Dark);
    }
    return (
        <nav className={cls.join(' ')}>
            <div className='container'>
                <Link className={classes.logo} href="/" to="/" onClick={() => {
                    clearWeather();
                    getWeather(link);
                    }}>Weather-App</Link>
                <NavLinks />
                <NavInput />
            </div>
        </nav>
    )
}

export default Header;