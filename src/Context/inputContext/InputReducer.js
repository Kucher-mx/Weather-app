import { SET_INPUT, CLEAR_INPUT } from "../actionTypes";

const inputReducer = (state, action) => {
    switch(action.type){
        case SET_INPUT: 
            return {...state, inputValue: action.payload};
        case CLEAR_INPUT:
            return {...state, inputValue: null};
        default:
            return state;
    }
}

export default inputReducer;