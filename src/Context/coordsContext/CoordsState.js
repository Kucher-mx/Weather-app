import {CoordsContext} from './CoordsContext';
import {CoordsReducer} from './CoordsReducer';
import { useReducer } from 'react';
import { SET_COORDS, CLEAR_COORDS } from '../actionTypes';

const CoordsState = ({children}) => {
    const initialState = {
        lon: null,
        lat: null,
        api_key: '9cb8f2750fe354ef6c28a6a0ed376d27',
    }
    const [coordsState, dispatch] = useReducer(CoordsReducer, initialState);

    const setCoords = (lon, lat) => {
        dispatch({type: SET_COORDS, lon,lat});
    }

    const clearCoords = () => {
        dispatch({type: CLEAR_COORDS});
    }

    return (
        <CoordsContext.Provider value={{
            coordsState, setCoords, clearCoords
        }}>
            {children}
        </CoordsContext.Provider>
    )
}

export default CoordsState;