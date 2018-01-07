import React from 'react';
import { View, Text, Image, ImageBackground, TextInput, TouchableHighlight } from 'react-native';
import styles from './styles/login.style';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Sae } from 'react-native-textinput-effects';
import { Actions } from 'react-native-router-flux'

const saeInput = (
  <Sae
    label={'Email Address'}
    iconClass={FontAwesomeIcon}
    iconName={'pencil'}
    iconColor={'white'}
    // TextInput props
    autoCapitalize={'none'}
    autoCorrect={false}
  />
);

  export default class Login extends React.Component{

    render(){

      console.log(this.props);
      return(
      <ImageBackground
        source={ require('centup3/src/assets/imgs/bg-fundo.jpeg' )}
        style={ styles.bgImg }>
        <View style={ styles.containerTop } >
          <Image source={ require('centup3/src/assets/imgs/logo.png')}
            style={ styles.logoImg } />
          <Text
            style={ styles.textInit }>
            Welcome Back! We've missed you
          </Text>
        </View>
        <View style={ styles.containerFields } >
          <TextInput
            style={ styles.textFields }
            placeholder={this.saeInput}

            keyboardType='email-address'
            placeholderTextColor='gray'
            underlineColorAndroid='transparent'
          />
          <View>
            <TextInput
              style={ styles.textFields }
              secureTextEntry={ true }
              placeholder='Password'
              keyboardType='email-address'
              placeholderTextColor='gray'
            underlineColorAndroid='transparent' />
          </View>
        </View>
        <View style={ styles.containerBtns } >
          <TouchableHighlight
            onPress={ () => { Actions.listNewsScreen() } }
            style={ styles.btnLogin }>
            <Text style={ styles.btnText }>Login</Text>
          </TouchableHighlight>
          <View style={ styles.containerLinks } >
            <TouchableHighlight
              onPress={ () => { return null } }
            underlayColor='transparent'  >
              <Text >Login with Facebook</Text>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={ () => { return null } }
            underlayColor='transparent' >
              <Text style={ styles.textBold }>Forgot Password?</Text>
            </TouchableHighlight>
          </View>
        </View>


      </ImageBackground>
    )
  }
}
