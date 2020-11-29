import React, {useEffect, useContext} from 'react';
import Header from './Header';
import MainContent from './MainContent';
import CardBlocks from './CardBlocks';
import Footer from './Footer/Footer';
import {weatherContext} from '../Context/weatherContext/weatherContext';
import Loader from './Loader/loader';
import { CoordsContext } from '../Context/coordsContext/CoordsContext';

const Page = () => {
    const API_Key = '9cb8f2750fe354ef6c28a6a0ed376d27';
    const {getWeather, state, setLoading} = useContext(weatherContext);
    const {coordsState, setCoords} = useContext(CoordsContext);
    // console.log('context',useContext(CoordsContext))
    console.log(state);
    useEffect(() => {
        setLoading();
        navigator.geolocation.getCurrentPosition(function(position) {
            setCoords(position.coords.longitude, position.coords.latitude);
            console.log(coordsState);
            const link = `https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&exclude=alerts,minutely&appid=${API_Key}`;
            getWeather(link);
        });
       
        // eslint-disable-next-line
    }, []);
    
    return (
        <div style={{
            backgroundColor: '#C8EBFF',
            height: '100vh',
            position: 'relative',
        }}>
            <Header/>
            { state.loading ? <Loader /> : 
                <>
                    <MainContent 
                        current={state.current} 
                        min={state.min} 
                        max={state.max} 
                        place={state.timeZone}/>
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