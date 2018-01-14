import React, { Component } from 'react';
import { TouchableHighlight, Image, View, Text  } from 'react-native';
import { Actions } from 'react-native-router-flux';
import consts from 'centup3/src/config/constants';

import styles from './styles/newslist.styles'

export default class ListNews extends Component {
  render(){
    return(
        <TouchableHighlight
          onPress={ () => { Actions[consts.NEWS_INFO_SCENE]() } }
          underlayColor='transparent' >
          <View style={ styles.newsList }>

            <View style={ styles.viewList1 }>
              <Image style={ styles.imgCircle } source={{ uri: this.props.data.thumbnailUrl }} />
            </View >

            <View style={ styles.viewList2 } >
              <Text style={ styles.textNews } >Descrição: { this.props.data.title }</Text>
              <Text style={ styles.textNews } >Link: { this.props.data.url }</Text>
            </View>

            <View style={ styles.viewList3 }>
              <Image style={ styles.imgArrow } source={require('../../../assets/imgs/img-arrow.png')} />
            </View>

          </View>
        </TouchableHighlight>
    )
  }
}
