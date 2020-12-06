import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Page from './Components/Page';
import PopularCities from './Components/PopularCities';
import WeatherState from './Context/weatherContext/weatherState';
import CoordsState from './Context/coordsContext/CoordsState';
import InputState from './Context/inputContext/InputState';
import ThemeState from './Context/themeContext/themeState';
import PopularState from './Context/popularCityContext/popularState';
import PopularPage from './Components/popular_page';
function App() {
 
  return (
    
    <ThemeState>
      <InputState>
        <CoordsState>
          <PopularState>
            <WeatherState>
              <BrowserRouter>
                <Switch>
                  <Route path="/" component={Page} exact></Route>
                  <Route path="/popular/:name" component={PopularPage}></Route>
                  <Route path="/popular" component={PopularCities}></Route>
                </Switch>
              </BrowserRouter>
            </WeatherState>
          </PopularState>
        </CoordsState>
      </InputState>
    </ThemeState>
    
  );
}

export default App;
