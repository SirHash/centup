import React, { Component } from 'react';
import { View, Text, TouchableHighlight, ScrollView, StyleSheet, Dimensions } from 'react-native';
import styles from '../components/styles/home.style';
import { Actions } from 'react-native-router-flux';
import consts from 'centup3/src/config/constants';

import ItemSlider from "../components/itemSlider";

export default class Slider extends Component{
  constructor(props){
    super(props);
    console.log(styles.navigator);
  }
  scrollToItem(n){
    //console.log(n);    
  }
  render(){
    return(
      <View style={styles.containerSlider}>
        <View style={styles.contentSlider}>
          <ScrollView
            contentContainerStyle={styles.spaceSlider}
            horizontal={true}
            snapToInterval={Dimensions.get('window').width}
            showsHorizontalScrollIndicator={false}
            onScroll={n => { this.scrollToItem(n) }}
            pagingEnabled>
            <ItemSlider 
              urlImg={require('centup3/src/assets/imgs/earth.png')}
              title="Título 1"
              text="Centup is a simple button that encourages you a bla bla bla bla bla bla bla bla bla bla bal bla bla bla bla bla bal bla bla bla bal" />
            <ItemSlider 
              urlImg={require('centup3/src/assets/imgs/earth.png')}
              title="Título 2"
              text="Centup is a simple button that encourages you a bla bla bla bla bla bla bla bla bla bla bal bla bla bla bla bla bal bla bla bla bal" />
            <ItemSlider 
              urlImg={require('centup3/src/assets/imgs/earth.png')}
              title="Título 3"
              text="Centup is a simple button that encourages you a bla bla bla bla bla bla bla bla bla bla bal bla bla bla bla bla bal bla bla bla bal" />
          </ScrollView>
        </View>
        <View style={styles.containerNavigatorSlider}>                  
          <View style={styles.navigator} />
          <View style={styles.navigator} />          
          <View style={styles.navigator} />
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
  }
}
