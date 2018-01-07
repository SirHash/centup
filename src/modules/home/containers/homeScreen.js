import React from 'react';
import { View, ImageBackground } from 'react-native';
import Topo from '../components/Topo';
import Slider from '../components/Slider';
import styles from '../components/styles/home.style';

export default props => (
  <View style={styles.containerScreen}>
    <Topo />
    <Slider />
  </View>
)
