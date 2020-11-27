import {useReducer} from 'react';
import weatherReducer from './weatherReducer';
import {weatherContext} from './weatherContext';
import axios from 'axios';
import {GET_WEATHER, SET_LOADING} from '../actionTypes';

const WeatherState = ({children}) => {
    const initialState = {
        cards: [],
        current: [],
        loading: true
    };
    const [state, dispatch] = useReducer(weatherReducer, initialState);

    const getWeather = async (link) => {
        try{
            const res = await axios.get(link);
            console.log(res);
            dispatch({type: GET_WEATHER, payload: res.data})
          } catch (e){
            console.log(e);
          }
    }

    const setLoading = () => {
        dispatch({type: SET_LOADING});
    }

    return (
        <weatherContext.Provider value={{
            state, getWeather, setLoading,
        }}>
            {children}
        </weatherContext.Provider>
    )
}

export default WeatherState;