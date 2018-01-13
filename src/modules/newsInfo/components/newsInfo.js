import React, { Component } from 'react';
import { TouchableHighlight, Image, View, Text  } from 'react-native';

import styles from './styles/newsInfo.styles'

export default class ListNews extends Component {
  render(){
    return(
          <View style={principal}>
              <Text style={txtTitulo}>Texto Apple</Text>
              <Text style={txtSubtitulo}>conteudo</Text>
              <Text style={}>Rodape</Text>
          </View>
      )
  }
}
