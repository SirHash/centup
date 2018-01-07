import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Splash from './src/modules/splash/containers/splashScreen';
import Login from './src/modules/login/containers/loginScreen';
import Home from './src/modules/home/containers/homeScreen';
import ListNewsScreen from './src/modules/news/containers/listNewsScreen';


export default class App extends React.Component {
  render() {
    return (
      // <Splash />
      //<Login />
      //<Home />
      // <Login />
      <ListNewsScreen />
    );
  }
};
