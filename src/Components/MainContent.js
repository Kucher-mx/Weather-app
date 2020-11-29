import React from 'react';
import classes from './Styles/MainContent.module.css';
import pictures from './icons/icons';

const MainContent = ({current, min ,max, place}) => {
    
    const date = new Date();
    const cls = [classes.Main, 'container'];
    const picId = current.weather[0].icon.slice(0, -1);
    const hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    const seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();

    return (
        <div className={cls.join(' ')}>
                <div className={classes.BText}>Weather in: {place}</div>
                <div className={classes.MText}>As of: {`${hours}:${minutes}:${seconds}`}</div>
                <div className={classes.Temperature}>{current.temp.toFixed(1)}°</div>
                <div className={classes.BText}>{current.weather[0].main}</div>
                <div className={classes.MText}>Humidity: {current.humidity}%</div>
                
                <div className={classes.WeatherTypePic}>
                    <img className={classes.Picture} src={pictures[`pic${picId}`]} alt="Weater Type"/>
                    <div className={classes.TempM}>Min: {min}°| Max: {max}°</div>
                </div>
        </div>
    )
}

export default MainContent;