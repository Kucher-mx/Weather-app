import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navigation.module.css';
import { ThemeContext } from '../../Context/themeContext/themeContext';
import pictures from '../icons/icons';

const links = [
    {text: "Main Page", to: "/"},
    {text: "Popular Cities", to: "/popular"},
    {text: pictures.dark, to: "/", id: 'dark'},
    {text: pictures.light, to: "/", id: 'light'},
]

const NavLinks = () => {
    const {toggleTheme, themeState} = useContext(ThemeContext);
    const cls = [classes.Link];
    if(themeState.themeEnabled){
        cls.push(classes.Dark);
    }
    const renderLinks = (linksArr) => {
        return linksArr.map((link, idx) => {
            if(link.id){
                if((themeState.themeEnabled === false && link.id === 'dark') || (themeState.themeEnabled === true && link.id === 'light')){
                    return (
                        <li key={idx}>
                            <NavLink href={link.to} 
                            to={link.to} 
                            className={cls.join(' ')}
                            onClick={(e) => {
                                console.log('theme:', themeState);
                                toggleTheme();
                            }}><img src={link.text} 
                            style={{
                                width: '25px',
                                backgroundColor: '#f1f1f1',
                                borderRadius: '5px',
                                padding: '3px',
                                boxSizing: 'border-box',
                            }} 
                            alt='nav icon' /></NavLink>
                        </li> 
                    )
                } 
            } else {
                return (
                    <li key={idx}>
                        <NavLink href={link.to} to={link.to} className={cls.join(' ')}>{link.text}</NavLink>
                    </li> 
                )
            }
        })
    }
    return (
        <ul className={classes.List}>
        {renderLinks(links)}
        </ul>
    )
}

export default NavLinks;