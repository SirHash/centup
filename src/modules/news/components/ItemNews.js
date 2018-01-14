import React, { Component } from 'react';
import { View, Text, Image, TouchableHighlight, } from 'react-native';

export default class ItemNews extends Component {
  render() {
    return (
      <View key={this.props.item.id}>
        <Image
          source={{uri:this.props.item.thumbnailUrl}}
          style={{width:80,height: 80}}/>
        <Text>{this.props.item.title}</Text>
        <TouchableHighlight>
          <Text>  >  </Text>
        </TouchableHighlight>
      </View>
    );
  }
}
