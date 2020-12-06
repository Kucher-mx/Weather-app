import React, {useContext} from 'react';
import Header from './Header';
import Footer from './Footer/Footer';
// import {weatherContext} from '../Context/weatherContext/weatherContext';
// import Loader from './Loader/loader';
import { ThemeContext } from '../Context/themeContext/themeContext';
import { PopularContext } from '../Context/popularCityContext/popularContext';
import PopularCardBlocks from '../Components/popularCitiesList/popularBlocks';

const PopularCities = () => {
    // const API_Key = '9cb8f2750fe354ef6c28a6a0ed376d27';
    // const {state} = useContext(weatherContext);
    const {themeState} = useContext(ThemeContext);
    const {popularState} = useContext(PopularContext);
    let color = '#F1F1F1';
    let yourCityStyle = {
        textAlign: 'center',
        color: '#2D3540',
        textTransform: 'uppercase',
        marginTop: '10px',
    }
    if(themeState.themeEnabled){
        color = '#2D3540';
        yourCityStyle.color = '#F1F1F1';
    }
    
    return (
        <div style={{
            backgroundColor: color,
            height: '100vh',
            position: 'relative',
            transition: '.3s all ease-in'
        }}>
            <Header/>
            {/* { state.loading ? <Loader /> :  */}
                <>
                    <div style={yourCityStyle}>Weather in popular cities</div>
                    <PopularCardBlocks cities={popularState.cities} />
                </>
            {/* } */}
            
            <Footer />
        </div>
    )
}

export default PopularCities;