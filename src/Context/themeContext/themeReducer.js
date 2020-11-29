import { TOOGLE_THEME } from "../actionTypes";

export const themeReducer = (state, action) => {
    switch(action.type){
        case TOOGLE_THEME:
            return {...state, themeEnabled: !state.themeEnabled};
        default:
            return state;
    }
}