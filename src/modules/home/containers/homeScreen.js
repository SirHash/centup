import React from 'react';
import { View, ImageBackground, StatusBar } from 'react-native';
import Topo from '../components/Topo';
import Slider from './Slider';
import styles from '../components/styles/home.style';

export default props => (
  <View style={styles.containerScreen}>
    <StatusBar
      backgroundColor='#f4ddbb'
      barStyle="default" />
    <Topo />
    <Slider />
  </View>
)
