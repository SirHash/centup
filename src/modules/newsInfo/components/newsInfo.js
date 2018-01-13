import React, { Component } from 'react';
import { TouchableHighlight, Image, View, Text, ScrollView } from 'react-native';

import styles from './styles/newsInfo.style.js'

export default class newsInfo extends Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.divGlobal}>
                    <View style={styles.divTopo}>
                        <View style={styles.viewLogo}>
                            <Image style={styles.logoImg} source={require('centup3/src/assets/imgs/logo.png')}  />
                            <Image style={styles.iconsTopo} source={require('centup3/src/assets/imgs/star.png')}/>
                            <Image style={styles.iconsTopo} source={require('centup3/src/assets/imgs/iconGo.png')}/>
                        </View>                        
                        <Text style={styles.txtTitulo}>Apple's advertising problems may not be with its ad agency</Text>
                    </View>
                    <View style={styles.divSubtitle}>
                        <Text style={styles.subtitle}>Some text as subtitle in newsInfo screen</Text>
                        <Image source={require('centup3/src/assets/imgs/logoMini.png')} style={styles.logoMiniImg} />
                    </View>

                    <View style={styles.divImg}>
                        <Image source={require('centup3/src/assets/imgs/waterfall.jpg')} style={styles.imgNews} />
                    </View>
                    <View style={styles.viewUnderImg}>
                        <Text style={styles.txtUnderImg}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...
                    </Text>
                    </View>
                    <View style={styles.viewBottom}>
                        <Text style={styles.txtDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </Text>
                    </View>
                </View>
            </ScrollView>

        )
    }
}
