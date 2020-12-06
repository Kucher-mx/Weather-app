import {useReducer, useContext} from 'react';
import weatherReducer from './weatherReducer';
import {weatherContext} from './weatherContext';
import axios from 'axios';
import {GET_WEATHER, SET_LOADING, CHANGE_DAY, GET_WEATHER_BY_CITY, IS_ERROR, CLEAR_WEATHER} from '../actionTypes';
import { CoordsContext } from '../coordsContext/CoordsContext';
import { InputContext } from '../inputContext/InputContext';

const WeatherState = ({children}) => {
    const initialState = {
        cards: [],
        current: {},
        daily: [],
        timeZone: null,
        loading: true,
        min: null,
        max: null,
        isError: false,
    };
    const [state, dispatch] = useReducer(weatherReducer, initialState);
    const {coordsState} = useContext(CoordsContext);
    const {inputState} = useContext(InputContext);

    const getWeather = async (link) => {
        dispatch({type: SET_LOADING});
        try{
            const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordsState.lat}&lon=${coordsState.lon}&units=metric&exclude=alerts,minutely&appid=${coordsState.api_key}`;
            
            const res = await axios.get(coordsState.lon && coordsState.lat ? url : link);
            dispatch({type: GET_WEATHER, payload: res.data})
          } catch (e){
            dispatch({type: IS_ERROR});
          }
    }

    const getWeatherByCity = async () => {
        dispatch({type: SET_LOADING});
        try{
            const cityLink = `https://api.openweathermap.org/data/2.5/weather?q=${inputState.inputValue}&units=metric&appid=${coordsState.api_key}`
            const res = await axios.get(cityLink);
            const cityWeather = {
                current: {
                    humidity: res.data.main.humidity,
                    temp: res.data.main.temp,
                    weather: res.data.weather,
                },
                min: res.data.main.temp_min,
                max: res.data.main.temp_max,
                place: `${res.data.sys.country} ${res.data.name}`,
            }
            dispatch({type: GET_WEATHER_BY_CITY, payload: cityWeather})
          } catch (e){
            dispatch({type: IS_ERROR});
          }
    }

    const setLoading = () => {
        dispatch({type: SET_LOADING});
    }

    const clearWeather = () => {
        dispatch({type: CLEAR_WEATHER});
    }

    const changeDay = (idx) => {
        const newDay = {
            ...state.daily[idx],
            temp: state.daily[idx].temp.day,
            min: state.daily[idx].temp.min.toFixed(1),
            max: state.daily[idx].temp.max.toFixed(1),
            timeZone: 'In your city',
        }
        dispatch({type: CHANGE_DAY, payload: newDay})
    }

    return (
        <weatherContext.Provider value={{
            state, getWeather, setLoading, changeDay, getWeatherByCity, clearWeather
        }}>
            {children}
        </weatherContext.Provider>
    )
}

export default WeatherState;