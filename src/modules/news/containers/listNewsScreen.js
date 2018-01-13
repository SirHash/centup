//@flow
import React from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { List, ListItem, SearchBar } from "react-native-elements";
import axios from 'axios';

import ListNews from './../components/listNews'

export default class ListNewsSreen extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      data: [],
      loading: false,
      page: 1,
      seed: 1,
      error: null,
      refresing: false
    };
  }

  componentWillMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    const { page, seed } = this.state;
    const url = `https://jsonplaceholder.typicode.com/photos?_page=${page}`;
    this.setState({ loading: true });


    axios.get(url)
      // .then(res => res.json())
      .then(data => {
        this.setState(
        {
          data: page === 1 ? data : [...this.state.data],
          // error: res.error || null,
          loading: false,
          refreshing: false
        });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };

  handleRefresh = () => {
    this.setState(
      {
        page: 1,
        seed: this.state.id + 1,
        refreshing: true
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };

  handleLoadMore = () => {
    this.setState(
      {
        page: this.state.page + 1
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%"
        }}
      />
    );
  };

  renderHeader = () => {
    return <SearchBar placeholder="Type Here..." lightTheme round />;
  };

  renderFooter = () => {
    if (!this.state.loading) return null;

    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE"
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  render() {
      return (
        <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => (
              <ListItem
                roundAvatar
                title={`${item.title}`}
                subtitle={item.url}
                avatar={{ uri: item.picture.thumbnail }}
                containerStyle={{ borderBottomWidth: 0 }}
              />
            )}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={this.renderSeparator}
            ListHeaderComponent={this.renderHeader}
            ListFooterComponent={this.renderFooter}
            onRefresh={this.handleRefresh}
            refreshing={this.state.refreshing}
            onEndReached={this.handleLoadMore}
            onEndReachedThreshold={50}
          />
        </List>
      );
    }
  }

    //Funciona legal, mais carrega todo o obj
    // render() {
    //     return(
    //       <ScrollView>
    //         {
    //           obj.map( data => (<ListNews data ={ data } key={ data.id }></ListNews>))
    //         }
    //       </ScrollView>
    //     )
    //   }

    //Trava devido a quantidade de dados
    // render() {
    //     return(
    //
    //       <ScrollView >
    //         {
    //           this.state.listNews.map( data => (<ListNews data={ data } key={ data.id }></ListNews>))
    //         }
    //       </ScrollView>
    //     )
    //   }
