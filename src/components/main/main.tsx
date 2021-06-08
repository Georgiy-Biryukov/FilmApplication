import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
  } from "react-router-dom";

import About from '../../views/about/about';
import Films from '../../views/films/films';
import Favourite from '../../views/favorite/favourite';
import Contacts from '../../views/contacts/contacts';

function Main() {
    return (
        <div className="main">
             {/* <Switch>
            <Route path="/About">
              <About />
            </Route>
            <Route path="/Films">
              <Films />
            </Route>
            <Route path="/Favourite">
              <Favourite />
            </Route>
            <Route path="/Contacts">
              <Contacts />
            </Route>
            <Redirect to="/" />
          </Switch> */}
        </div>
    )
}

export default Main
