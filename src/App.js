import React from 'react';
import Layout from "./components/Layout/Layout";
import Navbar from "./components/Navbar/Navbar";
import Fav from "./components/Fav/Fav";
import Comic from './components/Comic/Comic';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Redux
import { Provider } from "react-redux";
import store from "./store";



function App() {

  return (
    <Router>
      <Provider store={store}>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Layout}/>
          <Route exact path='/favorites' component={Fav}/>
          <Route exact path='/comic/:id' component={Comic}/>
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;
