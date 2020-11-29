import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navigation.module.css';

const links = [
    {text: "Main Page", to: "/"},
    {text: "Popular Cities", to: "/popular"},
    {text: "Light Theme", to: "/light"},
]

const NavLinks = () => {
    const renderLinks = (linksArr) => {
        return linksArr.map((link, idx) => {
            return (
                <li key={idx}>
                    <NavLink href={link.to} to={link.to} className={classes.Link}>{link.text}</NavLink>
                </li> 
            )
        })
    }
    return (
        <ul className={classes.List}>
        {renderLinks(links)}
        </ul>
    )
}

export default NavLinks;