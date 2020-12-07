import React, {useEffect, useContext} from 'react';
import Header from './Header';
import MainContent from './MainContent';
import CardBlocks from './CardBlocks';
import Footer from './Footer/Footer';
import {weatherContext} from '../Context/weatherContext/weatherContext';
import Loader from './Loader/loader';
import Error from './Error/Error';
import { CoordsContext } from '../Context/coordsContext/CoordsContext';
import { ThemeContext } from '../Context/themeContext/themeContext';

const Page = () => {
    const API_Key = '9cb8f2750fe354ef6c28a6a0ed376d27';
    const {getWeather, state, setLoading} = useContext(weatherContext);
    const {setCoords} = useContext(CoordsContext);
    const {themeState} = useContext(ThemeContext);
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
    useEffect(() => {
        setLoading();
        // if(Object.keys(navigator.geolocation).length !== 0){
            navigator.geolocation.getCurrentPosition(function(position) {
                setCoords(position.coords.longitude, position.coords.latitude);
                const link = `https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&exclude=alerts,minutely&appid=${API_Key}`;
                getWeather(link);
              });
        // } else {
        //     const lat = '50.43';
        //     const lon = '30.51';
        //     const link = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=alerts,minutely&appid=${API_Key}`;
        //     getWeather(link, 'UA Kiev');
        //     setCoords(lon, lat);
        // }
        // eslint-disable-next-line
    }, []);
    
    return (
        <div style={{
            backgroundColor: color,
            height: '100vh',
            position: 'relative',
            transition: '.3s all ease-in'
        }}>
            <Header/>
            { state.loading ? <Loader /> : state.isError ? <Error /> : 
                <>
                    <MainContent 
                        current={state.current} 
                        min={state.min} 
                        max={state.max} 
                        place={state.timeZone}/>
                    <div style={yourCityStyle}>Weather in your city</div>
                    <CardBlocks 
                        days={[
                            state.daily[1],
                            state.daily[2],
                            state.daily[3],
                            state.daily[4],
                            state.daily[5]
                        ]}
                    />
                </>
            }
            
            <Footer />
        </div>
    )
}

export default Page;