/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {createStore} from 'redux';
import { Provider } from 'react-redux';

import CounterApp from './components/CounterApp.js';

export default class App extends React.Component {
    render() {
        return(
            <Provider store={store}>
                <CounterApp/>
            </Provider>
        );
    }
}

const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'INCREASE_COUNTER':
      return {counter: state.counter + 1};
    case 'DECREASE_COUNTER':
      return {counter: state.counter - 1};
    case 'RESET':
      return {counter: 0};
    default:
      return state;
  }
};

const store = createStore(reducer);