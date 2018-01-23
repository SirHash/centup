import React from 'react';
import { View, Image } from 'react-native';
import styles from '../components/styles/home.style';

export default props => (
  <View style={styles.containerTopo}>
    <Image
      source={require('centup3/src/assets/imgs/logo.png')}
      style={styles.imgLogo} />
  </View>

)
