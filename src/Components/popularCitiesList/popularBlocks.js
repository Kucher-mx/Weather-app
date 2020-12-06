import React from 'react';
import PopularCard from './popularCard';
import classes from './popularCard.module.css';


const PopularCardBlocks = ({cities}) => {

    let cls = [classes.CardBlocks, 'container'];
    const cityNames = Object.keys(cities);

    const renderCards = (cityArr) => {
        return cityArr.map((cityName, idx) => {
            const city = cities[cityName];
            return (
                <li key={idx}>
                    <PopularCard current={city.current} min={city.min} max={city.max} place={city.place} id={idx+1}/>
                </li>
            )
        })
    }
    return (
        <div className={cls.join(' ')}>
            <ul>
                {renderCards(cityNames)}
            </ul>
        </div>
    )
}

export default PopularCardBlocks;