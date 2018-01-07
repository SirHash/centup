import React from 'react';
import { View , Text, Image, ImageBackground } from 'react-native';
import styles from './styles/splash.style';

export default props => (
  <View>
    <ImageBackground
      source={ require('centup3/src/assets/imgs/bg-fundo.jpeg' )}
      style={styles.bgImg}>
      <Image
        source={require('centup3/src/assets/imgs/logo.png' )}
        style={styles.logoImg} />
      <Text style={styles.text}>
        Support content creators and charitis with the click of a button
      </Text>
    </ImageBackground>
  </View>
)
