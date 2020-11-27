import React from 'react';
import classes from './loader.module.css';

const Loader = () => {
    return (
        <div className={classes.LWrapper}>
            <div className={classes.loader}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>  
        </div>
    )
}

export default Loader;