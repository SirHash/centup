import React from 'react';
import { View, Image, Text, TouchableHighlight, ScrollView, StatusBar } from 'react-native';
import styles from '../components/styles/home.style';
import { Actions } from 'react-native-router-flux';
import consts from 'centup3/src/config/constants';

export default props => (
  <View style={styles.containerSlider}>
    <StatusBar
      backgroundColor='#f4ddbb'
      barStyle="default" />
    <View style={styles.contentSlider}>
      <ScrollView
        contentContainerStyle={styles.spaceSlider}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        <View style={styles.itemSlider}>
          <Image
            source={require('centup3/src/assets/imgs/earth.png')}
            style={styles.imgSlider} />
          <Text style={styles.titleSlider}>
            Support Great Content
          </Text>
          <Text style={styles.textSlider}>
            Centup is a simple button that encourages you a bla bla bla bla bla bal
            bla bla bla bla bla bal bla bla bla bla bla bal bla bla bla bal
          </Text>
        </View>
        <View style={styles.itemSlider}>
          <Image
            source={require('centup3/src/assets/imgs/earth.png')}
            style={styles.imgSlider} />
          <Text style={styles.titleSlider}>
            Support Great Content
          </Text>
          <Text style={styles.textSlider}>
            Centup is a simple button that encourages you a bla bla bla bla bla bal
            bla bla bla bla bla bal bla bla bla bla bla bal bla bla bla bal
          </Text>
        </View>
      </ScrollView>
    </View>
    <View style={styles.containerNavigatorSlider}>
      <TouchableHighlight>
        <View style={{backgroundColor: 'blue',borderRadius: 7,
        width: 7, height: 7,margin: 1}}>
        </View>
      </TouchableHighlight>
      <TouchableHighlight>
        <View style={{backgroundColor: 'gray',borderRadius: 7,
        width: 7, height: 7,margin: 1}}>
        </View>
      </TouchableHighlight>
    </View>
    <View style={styles.containerBtnSignUp}>
      <TouchableHighlight style={styles.btnSignUp}>
        <View>
          <Text style={styles.txtBtnSignUp}>Sign Up</Text>
        </View>
      </TouchableHighlight>
      <View style={styles.containerSecondaryBtns}>
        <TouchableHighlight style={styles.btnLogin} onPress={ () => { Actions[consts.LOGIN_SCENE]()/* Atributos de objetos podem ser utilizados como vetores*/ } }>
          <View>
            <Text style={styles.txtBtnLogin}>Login</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight style={styles.btnSignUpLater}>
          <View>
            <Text style={styles.txtBtnSignUpLater}>Sign Up Later</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  </View>
)
