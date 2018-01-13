import React from 'react';

import Splash from './src/modules/splash/containers/splashScreen';
import Login from './src/modules/login/containers/loginScreen';
import Home from './src/modules/home/containers/homeScreen';
import ListNewsScreen from './src/modules/news/containers/listNewsScreen';

import { Router, Stack, Scene } from 'react-native-router-flux';

export default props => (
  <Router>
    <Stack key="root" >
      <Scene key="home" component={Home} hideNavBar />
      <Scene key="login" component={Login} title="Login" hideNavBar />
      <Scene key="listNewsScreen" component={ListNewsScreen} initial title="Lista de Notícias" />
      {/* <Scene key="register" component={Splash} title="Splash" /> */}
      {/* <Scene key="register" component={News} title="News" /> */}
    </Stack>
  </Router>
)
