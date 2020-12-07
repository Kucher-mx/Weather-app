import React, {useContext} from 'react';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer/Footer';
import { ThemeContext } from '../Context/themeContext/themeContext';
import {weatherContext} from '../Context/weatherContext/weatherContext';
import Error from './Error/Error';
import { PopularContext } from '../Context/popularCityContext/popularContext';

const PopularPage = ({match}) => {
    const {themeState} = useContext(ThemeContext);
    const {popularState} = useContext(PopularContext);
    const {state} = useContext(weatherContext);
    const cityInfo = popularState.cities[match.params.name];
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
            {state.isError ? <Error /> : 
                <>
                    <MainContent 
                        current={cityInfo.current} 
                        min={cityInfo.min} 
                        max={cityInfo.max} 
                        place={cityInfo.place}/>
                </>
            }
            
            <Footer />
        </div>
    )
}

export default PopularPage;