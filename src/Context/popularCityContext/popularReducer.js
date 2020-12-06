import { ADD_CITY, REMOVE_CITY } from "../actionTypes";

export const popularReducer = (state, action) => {
    switch(action.type) {
        case ADD_CITY: 
            return {...state, cities: action.payload};
        case REMOVE_CITY: 
            return {...state, cities: action.payload};
        default:
            return state;
    }
}