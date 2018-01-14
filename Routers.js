import React from 'react';

import Splash from './src/modules/splash/containers/splashScreen';
import Login from './src/modules/login/containers/loginScreen';
import Home from './src/modules/home/containers/homeScreen';
import ListNewsScreen from './src/modules/news/containers/listNewsScreen';
import consts from './src/config/constants';

import { Router, Stack, Scene } from 'react-native-router-flux';

export default props => (
  <Router>
    <Stack key="root" >
      <Scene key={consts.LIST_NEWS_SCENE} component={ListNewsScreen} title="List News" />
      <Scene key={consts.HOME_SCENE} component={Home} hideNavBar />
      <Scene key={consts.LOGIN_SCENE} component={Login} title="Login" hideNavBar />
    </Stack>
  </Router>
)
