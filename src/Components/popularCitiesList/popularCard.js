import React, {useContext} from 'react';
import classes from './popularCard.module.css';
import pictures from '../icons/icons';
import { ThemeContext } from '../../Context/themeContext/themeContext';
import {Link} from 'react-router-dom';
const PopularCard = ({current, place, id}) => {
    const cls = [classes.Card];
    const {themeState} = useContext(ThemeContext);
    if(themeState.themeEnabled){
        cls.push(classes.Dark);
    }

    return (
        <div className={cls.join(' ')} id={id} >
            <div className={classes.Card_Body}>
                <Link to={'/popular/' + place.slice(3)} className={classes.Card_Place}>{place}</Link>
                <h2 className={classes.Card_Temp}>{current.temp.toFixed(1)}°</h2>
            </div>
            <img className={classes.Card_Picture} src={pictures[`pic${current.weather[0].icon.slice(0, -1)}`]} alt="Weather type" />
        </div>
    )
}

export default PopularCard;