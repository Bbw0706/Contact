import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import {FlatList, Alert} from "react-native"

export default class ListItems extends Component {
  render() {
    const {
      handleName,
      handleEdit, 
      handleEmail, 
      handleNomor
      } = this.props;
    return (
    <List style={{marginTop:10}}>
      <FlatList
        data={this.props.data}
        keyExtractor={(item, index) => item._id}
        renderItem={({item, index}) => (
          <ListItem 
            style={{marginRight:20}}
            avatar 
            key={index}
            onPress = {() => this.props.navigation.navigate("Edit", {
                                                                      id : item._id,
                                                                      handleName,
                                                                      handleEdit,
                                                                      handleEmail,
                                                                      handleNomor
                                                                    })} 
            onLongPress={() => Alert.alert(
              'Are you sure',
              'you want to delete this contact ?',
              [
                {text: 'Cancel', onPress: () => null},
                {text: 'OK', onPress: () => this.props.handleDelete(item._id, index)},
              ],
              { cancelable: false }
            )}>
            <Left>
              <Thumbnail style={{backgroundColor:"#1e88e5"}} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Gnome-stock_person.svg/1024px-Gnome-stock_person.svg.png' }} />
            </Left>
            <Body>
              <Text>{item.nama}</Text>
              <Text note>{item.email.toLowerCase()}</Text>
              <Text note>{item.nomor}</Text>
            </Body>
          </ListItem>
        )}
      />
    </List>
    );
  }
}