import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Header from './components/header/header';
import store from "./store/store";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import About from '../src/views/about/about';
import Films from '../src/views/films/films';
import Favourite from '../src/views/favorite/favourite';
import Contacts from '../src/views/contacts/contacts';

function App() {
  return (
    <div className="App">
        <Provider store={store}>
           <Router>
           <Header/>
           <Switch>
            <Route path="/About" exact component={About}/>
            <Route path="/Films" exact component={Films}/>
            <Route path="/Favourite" exact component={Favourite}/>
            <Route path="/Contacts" exact component={Contacts}/>
          </Switch>
           </Router>
        </Provider>
    </div>
  );
}

export default App;
