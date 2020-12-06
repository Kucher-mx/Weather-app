import React, {useContext} from 'react';
import classes from './popularCard.module.css';
import pictures from '../icons/icons';
import { ThemeContext } from '../../Context/themeContext/themeContext';
import {Link} from 'react-router-dom';
const PopularCard = ({current, min, max, place, id}) => {
    console.log(current, min, max,place, id)
    const cls = [classes.Card];
    const {themeState} = useContext(ThemeContext);
    if(themeState.themeEnabled){
        cls.push(classes.Dark);
    }

    return (
        <div className={cls.join(' ')} id={id} >
            <div className={classes.Card_Body}>
                <Link to={'/popular/' + place.slice(3)} className={classes.Card_Place}>{place}</Link>
                {/* <h5 className={classes.Card_Place}>Place: {place}</h5> */}
                <h2 className={classes.Card_Temp}>{current.temp.toFixed(1)}°</h2>
                {/* <h5 className={classes.Min}>Min: {min}°</h5> &nbsp;
                <h5 className={classes.Max}>Max: {max}°</h5> */}
            </div>
            <img className={classes.Card_Picture} src={pictures[`pic${current.weather[0].icon.slice(0, -1)}`]} alt="Weather type" />
        </div>
    )
}

export default PopularCard;