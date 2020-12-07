import React from 'react';
import Card from './Card/Card';
import classes from './Styles/CardBlocks.module.css';


const CardBlocks = ({days}) => {
    console.log(days)
    const arr = ['Sunday', 'Monday', 'Tuesday', 'Wensday', 'Thursday', 'Friday', 'Saturday'];

    let cards = [], cls = [classes.CardBlocks, 'container'];
    days.forEach((day) => {
        const date = new Date(day.dt * 1000);
        let dayInfo = {
            dayTime: `${arr[date.getDay()]} ${date.getDate()}.${date.getMonth()}`,
            temp: day.temp.day,
            url: `pic${day.weather[0].icon.slice(0, -1)}`,
        }
        cards.push(dayInfo);
    });


    const renderCards = (cardsArr) => {
        return cardsArr.map((card, idx) => {
            return (
                <li key={idx}>
                    <Card dayTime={card.dayTime} temp={card.temp.toFixed(1)} url={card.url} id={idx+1}/>
                </li>
            )
        })
    }
    return (
        <div className={cls.join(' ')}>
            <ul>
                {renderCards(cards)}
            </ul>
        </div>
    )
}

export default CardBlocks;