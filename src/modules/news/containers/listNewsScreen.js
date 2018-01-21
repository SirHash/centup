import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import axios from "axios";

import ListNews from "./../components/listNews";
import ItemNews from "./../components/ItemNews";
import consts from 'centup3/src/config/constants';
import { Actions } from 'react-native-router-flux';

export default class ListNewsSreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      page: 1
    };
  }

  getData() {
    //console.log('https://jsonplaceholder.typicode.com/photos?_page=1');
    axios
      .get("https://jsonplaceholder.typicode.com/photos", {
        params: {
          _page: this.state.page
        }
      })
      .then(response => {
        this.setState({
          data: [...this.state.data, ...response.data],
          page: this.state.page + 1
        });
        console.log(this.state.page);
        alert(this.state.page);
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentWillMount() {
    this.getData();
  }
  render() {
    return (
      <View>
        <TouchableOpacity  onPress={ () => { Actions[consts.NEWS_INFO_SCENE]() }}>
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => <ItemNews item={item} />}
            keyExtractor={item => item.id}
            onEndReached={() => {
              this.getData();
            }}
          />
        </TouchableOpacity>
      </View>
    );
  } 
}
