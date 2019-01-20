import React, { Component } from 'react';
// import '../styles/App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import cookie from 'react-cookies';

import MainLayout from './MainLayout.js';
import HomePage from './HomePage.js';


// These are for redux.
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import request from 'superagent';

// This creates a store to hold app state data for redux.
import mainReducer from '../reducers/mainReducer.js';
const store = createStore(
    mainReducer,
);

// store.getState();

class App extends Component {
  constructor(){
    super()
    this.state = {
      state1:false,
    };
  }

// This controls what occurs before the page loads
  componentWillMount() {}
  render() {
    return (
      // Provides store data to all subcomponents
      <Provider store={store}>
        <div className="AppInsideProvider">
          <BrowserRouter>
            <MainLayout template={this.state.template}>
              <Switch>
                <Route exact path="/home/" render={(props) => ( <HomePage info={this.state.info}/> )}/>
              </Switch>
            </MainLayout>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
