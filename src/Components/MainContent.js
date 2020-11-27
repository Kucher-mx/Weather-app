import React from 'react';
import classes from './Styles/MainContent.module.css';

const MainContent = ({current, min ,max, place}) => {
    const date = new Date();
    const cls = [classes.Main, 'container'];

    return (
        <div className={cls.join(' ')}>
                <div className={classes.BText}>Weather in: {place}</div>
                <div className={classes.MText}>As of: {`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`}</div>
                <div className={classes.Temperature}>{current.temp.toFixed(0)}°</div>
                <div className={classes.BText}>{current.weather[0].main}</div>
                <div className={classes.MText}>Humidity: {current.humidity}%</div>
                <div className={classes.WeatherTypePic}>
                    <img className={classes.Picture} src="https://icons-for-free.com/iconfiles/png/512/cloud+day+forecast+lightning+shine+storm+sun+weather+icon-1320183295537909806.png" alt="Weater Type"/>
                    <div className={classes.TempM}>Min: {min}°| Max: {max}°</div>
                </div>
        </div>
    )
}

export default MainContent;