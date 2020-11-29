import React, {useContext} from 'react';
import classes from './Card.module.css';
import pictures from '../icons/icons';
import { weatherContext } from '../../Context/weatherContext/weatherContext';

const Card = ({dayTime, temp, url, id}) => {
    const {changeDay} = useContext(weatherContext);
    return (
        <div className={classes.Card} id={id} onClick={() => changeDay(id)}>
            <div className="d-flex align-items-center flex-column pb-0 card-body">
                <h5 className={classes.Card_DayTime}>{dayTime}</h5>
                <h2 className={classes.Card_Temp}>{temp}°</h2>
            </div>
            <img className={classes.Card_Picture} src={pictures[url]} alt="Weather type" />
        </div>
    )
}

export default Card;