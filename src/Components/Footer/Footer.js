import React, {useContext} from 'react';
import classes from './Footer.module.css';
import {ThemeContext} from '../../Context/themeContext/themeContext';

const Footer = () => {
    const {themeState} = useContext(ThemeContext);
    const cls = [classes.Footer];
    if(themeState.themeEnabled){
        cls.push(classes.Dark);
    }
    return (
        <div className={cls.join(' ')}>
            <span href=''>Kucher-mx</span>
            <a href='https://github.com/Kucher-mx'> <img src='https://image.flaticon.com/icons/png/512/25/25231.png' alt='GitHub icon'/> </a>
        </div>
    )
}

export default Footer;