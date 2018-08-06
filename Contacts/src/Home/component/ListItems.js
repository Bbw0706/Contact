import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import {FlatList} from "react-native"

export default class ListItems extends Component {
  render() {
    return (
    <List>
      <FlatList
        data={this.props.data}
        keyExtractor={(item, index) => item._id}
        renderItem={({item, index}) => (
          <ListItem avatar key={index}>
            <Left>
              <Thumbnail style={{backgroundColor:"#1e88e5"}} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Gnome-stock_person.svg/1024px-Gnome-stock_person.svg.png' }} />
            </Left>
            <Body>
              <Text>{item.nama}</Text>
              <Text note>{item.email}</Text>
              <Text note>{item.nomor}</Text>
            </Body>
          </ListItem>
        )}
      />
    </List>
    );
  }
}