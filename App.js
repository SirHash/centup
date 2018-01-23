import React from 'react';

import reducers from './src/redux/reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Router from './Routers';
import './ReactotronConfig';
import Reactotron from 'reactotron-react-native';


export default class App extends React.Component {
  render() {    
    return (
      <Provider store={createStore(reducers, {})}>
        <Router/>
      </Provider>
    );
  }
};












//🐴 Tenho que certeza que não me viu!!!, mas eu to aí.
//Teste Git zsfkjsdfhsd
