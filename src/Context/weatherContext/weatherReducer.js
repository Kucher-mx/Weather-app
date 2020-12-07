import { 
    GET_WEATHER, 
    SET_LOADING, 
    CHANGE_DAY, 
    GET_WEATHER_BY_CITY, 
    CLEAR_WEATHER, 
    IS_ERROR
} from "../actionTypes";

const weatherReducer = (state, action) => {
    switch(action.type){
        case GET_WEATHER: 
            return {...state, 
                current: action.payload.current, 
                daily: action.payload.daily, 
                timeZone: action.city, 
                loading: false,
                min: action.payload.daily[0].temp.min.toFixed(1),
                max: action.payload.daily[0].temp.max.toFixed(1)};
        case GET_WEATHER_BY_CITY: 
            return {...state, 
                current: action.payload.current,
                timeZone: action.payload.place, 
                loading: false,
                min: action.payload.min.toFixed(1),
                max: action.payload.max.toFixed(1)};
        case CHANGE_DAY: 
            return {...state, 
                current: action.payload, 
                loading: false,
                min: action.payload.min,
                max: action.payload.max,
                timeZone: action.payload.timeZone};
        case SET_LOADING:
            return {...state, loading: true};
        case IS_ERROR:
            return {...state, isError: true, loading: false};
        case CLEAR_WEATHER:
            return {
                cards: [], current: {}, daily: [], timeZone: null, loading: true,
                min: null,  max: null, isError: false
            }
        default:
            return state;
    }
}

export default weatherReducer;