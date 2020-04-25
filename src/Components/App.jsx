import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Home from './Home';
import Form from './Form';
import { env } from '../config';


function App() {

    return(
        <Router>
          <Switch>
            {/* <Route path="/contacto">
              <Form env={env}/>
            </Route> */}
            <Route path="/">
              <Home />
            </Route>
          </Switch>
      </Router>
    )
}

export default App;