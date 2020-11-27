import React from 'react';
import classes from './Footer.module.css';

const Footer = () => {
    return (
        <div className={classes.Footer}>
            <span href=''>Kucher-mx</span>
            <a href='https://github.com/Kucher-mx'> <img src='https://image.flaticon.com/icons/png/512/25/25231.png' alt='GitHub icon'/> </a>
        </div>
    )
}

export default Footer;