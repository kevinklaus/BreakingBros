import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Navigation from './components/Navigation.js';
import DummyPage from './components/DummyPage';
import LandingPage from './components/LandingPage';
import { ThemeProvider } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';
import deepOrange from '@material-ui/core/colors/deepOrange';
import { createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
  palette: {
    primary: deepOrange,
    secondary: orange,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className="App">
          <Navigation></Navigation>
          <Route exact path='/' component={LandingPage}/>
          <Route path='/dummy' component={DummyPage}/>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
