import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.scss';
import Home from './pages/Home';
import SearchPage from './pages/SearchPage';
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from './reducer';

const App = () => {

  const [{ user }, dispatch] = useStateValue();


  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: actionTypes.SET_USER,
          user: authUser,
        });
      }
    });
  }, []);

  return (
    <div>
      <Router>
        <Switch>
          <Route path='/search'>
            <SearchPage />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
