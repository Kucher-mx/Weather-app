import React from 'react';
import classes from './Card.module.css';

const Card = ({dayTime, temp, url}) => {
    return (
        <div className={classes.Card}>
            <div className="d-flex align-items-center flex-column pb-0 card-body">
                <h5 className={classes.Card_DayTime}>{dayTime}</h5>
                <h2 className={classes.Card_Temp}>{temp}°</h2>
            </div>
            <img className={classes.Card_Picture} src={url} alt="Weather type picture" />
        </div>
    )
}

export default Card;