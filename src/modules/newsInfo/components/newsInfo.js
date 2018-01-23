import React, { Component } from "react";
import {
  TouchableHighlight,
  Image,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  AsyncStorage
} from "react-native";

import styles from "./styles/newsInfo.style.js";

export default class newsInfo extends Component {
  constructor(props) {
    super(props);
    this.state = { listFav: [], objNews: [] };
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.viewTop}>
            <View style={styles.navBar}>
              <View style={styles.centerContainer}>
                <Image
                  style={styles.logoImg}
                  source={require("centup3/src/assets/imgs/logo.png")}
                />
              </View>
              <View style={styles.rightContainer}>
                <TouchableOpacity onPress={this.saveData}>
                  <Image
                    style={styles.iconsTopo}
                    source={require("centup3/src/assets/imgs/star.png")}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={this.displayData}>
                  <Image
                    style={styles.iconsTopo}
                    source={require("centup3/src/assets/imgs/iconGo.png")}
                  />
                </TouchableOpacity>
              </View>
              {/* <Image style={styles.iconsTopo} source={require('centup3/src/assets/imgs/star.png')}/>
                            <Image style={styles.iconsTopo} source={require('centup3/src/assets/imgs/iconGo.png')}/> */}
            </View>
            <Text style={styles.txtTitulo}>
              Apple's advertising problems may not be with its ad agency
            </Text>
          </View>
          <View style={styles.viewSubtitle}>
            <Text style={styles.subtitle}>
              Some text as subtitle in newsInfo screen
            </Text>
            <Image
              style={styles.logoMiniImg}
              source={require("centup3/src/assets/imgs/logoMini.png")}
            />
          </View>

          <View style={styles.viewImg}>
            <Image
              source={require("centup3/src/assets/imgs/waterfall.jpg")}
              style={styles.imgNews}
            />
          </View>
          <View style={styles.viewUnderImg}>
            <Text style={styles.txtUnderImg}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam...
            </Text>
          </View>
          <View style={styles.viewBottom}>
            <Text style={styles.txtDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  }
  saveData() {
    // this.setState({ listFav : objNews})
    // AsyncStorage.setItem("idFavorito", JSON.stringify(listFav));
    let obj = { name: "CentupApp", email: "elefante@gmail", user: "Fabio" };
    alert("Dados salvos com sucesso jovem!");
    AsyncStorage.setItem("user", JSON.stringify(obj));
  }
  displayData = async () => {
    try {
    //   let obj = await AsyncStorage.getItem("idFavorito");
      let user = await AsyncStorage.getItem("user");
      let parsedData = JSON.parse(user);
    } catch (error) {
      alert("Não há dados salvos");
    }
  };
}
