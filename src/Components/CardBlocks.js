import React from 'react';
import Card from './Card/Card';
import classes from './Styles/CardBlocks.module.css';

const CardBlocks = ({day, morning, evening, night, tomorrow}) => {
    const cards = [
        {dayTime: 'Morning', temp: morning, url: 'https://icons-for-free.com/iconfiles/png/512/cloud+day+forecast+lightning+shine+storm+sun+weather+icon-1320183295537909806.png'},
        {dayTime: 'Day', temp: day, url: 'https://icons-for-free.com/iconfiles/png/512/cloud+day+forecast+lightning+shine+storm+sun+weather+icon-1320183295537909806.png'},
        {dayTime: 'Evening', temp: evening, url: 'https://icons-for-free.com/iconfiles/png/512/cloud+day+forecast+lightning+shine+storm+sun+weather+icon-1320183295537909806.png'},
        {dayTime: 'Night', temp: night, url: 'https://icons-for-free.com/iconfiles/png/512/cloud+day+forecast+lightning+shine+storm+sun+weather+icon-1320183295537909806.png'},
        {dayTime: 'Tomorrow', temp: tomorrow, url: 'https://icons-for-free.com/iconfiles/png/512/cloud+day+forecast+lightning+shine+storm+sun+weather+icon-1320183295537909806.png'},
    ], cls = [classes.CardBlocks, 'container'];

    const renderCards = (cardsArr) => {
        return cardsArr.map((card, idx) => {
            return (
                <li key={idx}>
                    <Card dayTime={card.dayTime} temp={card.temp.toFixed(1)} url={card.url}/>
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