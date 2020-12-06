import React, {useContext} from 'react';
import classes from './Error.module.css';
import { ThemeContext } from '../../Context/themeContext/themeContext';

const Error = () => {
    const {themeState} = useContext(ThemeContext);
    return (
        <div className={classes.Error}>
            <h1 style={{
                color: !themeState.themeEnabled ? '#2D3540' : '#F1F1F1',
            }}>
                Oops, it's an error there :(
            </h1>
        </div>
    )
}

export default Error;