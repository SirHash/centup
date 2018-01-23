import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ItemSlider = props => {
    return (
        <View style={styles.itemSlider}>
          <Image
            source={props.urlImg}
            style={styles.imgSlider} />
          <Text style={styles.titleSlider}>
            {props.title}
          </Text>
          <Text style={styles.textSlider}>
            {props.text}
          </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    itemSlider:{
        flex: 1,
        flexDirection: 'column',
        padding: 38,
        alignItems: 'center'
      },
      imgSlider:{
        width: 150,
        height: 150,
      },
      titleSlider:{
        marginTop: 30,
        fontSize: 22,
        fontWeight: '300',
        color: '#5defdd'
      },
      textSlider:{
        fontSize: 14,
        fontWeight: '200',
        color: '#9e9e9e',
        textAlign: 'center',
      },
});

export default ItemSlider;
