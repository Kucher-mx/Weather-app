import React, {useEffect, useContext} from 'react';
import Header from './Header';
import MainContent from './MainContent';
import CardBlocks from './CardBlocks';
import Footer from './Footer/Footer';
import {weatherContext} from '../Context/weatherContext/weatherContext';
import Loader from './Loader/loader';

const Page = () => {
    const API_Key = '9cb8f2750fe354ef6c28a6a0ed376d27';
    const {getWeather, state, setLoading} = useContext(weatherContext);
    
    useEffect(() => {
        setLoading();
        navigator.geolocation.getCurrentPosition(function(position) {
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
            <Header />
            { state.loading ? <Loader /> : 
                <>
                    <MainContent current={state.current.current} 
                    min={state.current.daily[0].temp.min.toFixed(1)} 
                    max={state.current.daily[0].temp.max.toFixed(1)} 
                    place={state.current.timezone}/>
                    <CardBlocks 
                    morning={state.current.daily[0].temp.morn}
                    day={state.current.daily[0].temp.day}
                    evening={state.current.daily[0].temp.eve}
                    night={state.current.daily[0].temp.night}
                    tomorrow={state.current.daily[1].temp.day}/>
                </>
            }
            
            <Footer />
        </div>
    )
}

export default Page;