import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Page from './Components/Page';
import WeatherState from './Context/weatherContext/weatherState';
import CoordsState from './Context/coordsContext/CoordsState';
import InputState from './Context/inputContext/InputState';
import ThemeState from './Context/themeContext/themeState';
function App() {
 
  return (
    <ThemeState>
      <InputState>
        <CoordsState>
          <WeatherState>
            <BrowserRouter>
              <Switch>
                <Route path="/" component={Page}></Route>
              </Switch>
            </BrowserRouter>
          </WeatherState>
        </CoordsState>
      </InputState>
    </ThemeState>
  );
}

export default App;
