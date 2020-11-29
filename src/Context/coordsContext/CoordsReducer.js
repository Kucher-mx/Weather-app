import { SET_COORDS, CLEAR_COORDS } from "../actionTypes";

export const CoordsReducer = (state, action) => {
    switch(action.type){
        case SET_COORDS:
            return {...state, lon: action.lon, lat: action.lat};
        case CLEAR_COORDS:
            return {...state, lon: null, lat: null};
        default:
            return state;
    }
}