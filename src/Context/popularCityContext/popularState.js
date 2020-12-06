import React, {useContext, useReducer, useEffect} from 'react';
import { PopularContext } from './popularContext';
import { popularReducer } from './popularReducer';
import {ADD_CITY, REMOVE_CITY} from '../actionTypes';
import axios from 'axios';
import { CoordsContext } from '../coordsContext/CoordsContext';
const PopularState = ({children}) => {
    const cities = [
        {name: 'London'},
        {name: 'Kyiv'},
        {name: 'Vinnytsia'},
        {name: 'Tokyo'},
        {name: 'Shanghai'},
        {name: 'Moscow'},
    ];
    const initialState = {
        cities: [],
    }
    const [popularState, dispatch] = useReducer(popularReducer, initialState);
    const {coordsState} = useContext(CoordsContext);
    let ct = {};
    const getCityWeather = async (city, id) => {
        try{
            const cityLink = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${coordsState.api_key}`;
            const res = await axios.get(cityLink);
            const cityWeather = {
                current: {
                    humidity: res.data.main.humidity,
                    temp: res.data.main.temp,
                    weather: res.data.weather,
                },
                id,
                min: res.data.main.temp_min,
                max: res.data.main.temp_max,
                place: `${res.data.sys.country} ${res.data.name}`,
            }
            ct[city] = cityWeather;
          } catch (e){
            console.log(e);
          }
    }

    useEffect(() => {
        cities.forEach((city, idx) => {
            getCityWeather(city.name, idx);
        });
        dispatch({type: ADD_CITY, payload: ct});
        // eslint-disable-next-line
    }, []);

    const addCity = (city) => {
        const newCities = popularState.cities.push(city);
        dispatch({type: ADD_CITY, payload: newCities})
    }

    const removeCity = (idx) => {
        const newCities = popularState.cities.splice(idx, 1);
        dispatch({type: REMOVE_CITY, payload: newCities})
    }
    return (
        <PopularContext.Provider value={{
            popularState, addCity, removeCity
        }}>
            {children}
        </PopularContext.Provider>
    )
}

export default PopularState;