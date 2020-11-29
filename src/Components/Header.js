import React, {useContext} from 'react';
import NavLinks from './HeaderCmps/NavLinks';
import classes from './Styles/Header.module.css';
import { Link } from 'react-router-dom';
import NavInput from './HeaderCmps/Input';
import {weatherContext} from '../Context/weatherContext/weatherContext';

const Header = (link) => {
    // console.log(classes);
    const {getWeather} = useContext(weatherContext);
    const cls = [classes.Header, 'navbar navbar-expand-lg'];
    return (
        <nav className={cls.join(' ')}>
            <div className='container'>
                <Link className={classes.logo} href="/" to="/" onClick={() => getWeather(link)}>Weather-App</Link>
                <NavLinks />
                <NavInput />
            </div>
        </nav>
    )
}

export default Header;