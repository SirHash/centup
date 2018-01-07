import React from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import styles from './styles/newslist.styles'

export default class ListNews extends React.Component {

  render() {
    return (
      <View>
        <TouchableHighlight onPress={ () => { return null } } underlayColor='transparent' >
          <View style={ styles.viewNews } >
            <Image style={ styles.imgCircle } source={require('../../../assets/imgs/img-circle.png')} />
            <Text style={styles.textNews} >I'm the ListNewsScreen component</Text>
            <Image style={ styles.imgArrow } source={require('../../../assets/imgs/img-arrow.png')} />
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={ () => { return null } } underlayColor='transparent' >
          <View style={ styles.viewNews } >
            <Image style={ styles.imgCircle } source={require('../../../assets/imgs/img-circle.png')} />
            <Text style={styles.textNews} >I'm the ListNewsScreen component</Text>
            <Image style={ styles.imgArrow } source={require('../../../assets/imgs/img-arrow.png')} />
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={ () => { return null } } underlayColor='transparent' >
          <View style={ styles.viewNews } >
            <Image style={ styles.imgCircle } source={require('../../../assets/imgs/img-circle.png')} />
            <Text style={styles.textNews} >I'm the ListNewsScreen component</Text>
            <Image style={ styles.imgArrow } source={require('../../../assets/imgs/img-arrow.png')} />
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={ () => { return null } } underlayColor='transparent' >
          <View style={ styles.viewNews } >
            <Image style={ styles.imgCircle } source={require('../../../assets/imgs/img-circle.png')} />
            <Text style={styles.textNews} >I'm the ListNewsScreen component</Text>
            <Image style={ styles.imgArrow } source={require('../../../assets/imgs/img-arrow.png')} />
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={ () => { return null } } underlayColor='transparent' >
          <View style={ styles.viewNews } >
            <Image style={ styles.imgCircle } source={require('../../../assets/imgs/img-circle.png')} />
            <Text style={styles.textNews} >I'm the ListNewsScreen component</Text>
            <Image style={ styles.imgArrow } source={require('../../../assets/imgs/img-arrow.png')} />
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={ () => { return null } } underlayColor='transparent' >
          <View style={ styles.viewNews } >
            <Image style={ styles.imgCircle } source={require('../../../assets/imgs/img-circle.png')} />
            <Text style={styles.textNews} >I'm the ListNewsScreen component</Text>
            <Image style={ styles.imgArrow } source={require('../../../assets/imgs/img-arrow.png')} />
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={ () => { return null } } underlayColor='transparent' >
          <View style={ styles.viewNews } >
            <Image style={ styles.imgCircle } source={require('../../../assets/imgs/img-circle.png')} />
            <Text style={styles.textNews} >I'm the ListNewsScreen component</Text>
            <Image style={ styles.imgArrow } source={require('../../../assets/imgs/img-arrow.png')} />
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}
