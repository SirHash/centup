import React, { Component } from 'react';
import { View, Text, Image, TouchableHighlight, TouchableOpacity} from 'react-native';
import consts from 'centup3/src/config/constants';
import { Actions } from 'react-native-router-flux';

export default class ItemNews extends Component {
  render() {
    return (
      <View key={this.props.item.id}>
        <TouchableOpacity  onPress={ () => { Actions[consts.NEWS_INFO_SCENE]() }}>
        <Image
          source={{uri:this.props.item.thumbnailUrl}}
          style={{width:80,height: 80}}/>
          </TouchableOpacity>
        <Text>{this.props.item.title}</Text>        
          <Text>  >  </Text>      
      </View>
    );
  }
}
