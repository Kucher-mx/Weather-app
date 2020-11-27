import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Page from './Components/Page';
import WeatherState from './Context/weatherContext/weatherState';
function App() {
 
  return (
    <WeatherState>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Page}></Route>
        </Switch>
      </BrowserRouter>
    </WeatherState>
  );
}

export default App;
