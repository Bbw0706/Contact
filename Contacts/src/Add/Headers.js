import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';
import {TouchableOpacity} from "react-native"

const Headers = ({navigation, handleClick}) => (
  <Header style={{backgroundColor:"#1e88e5"}} androidStatusBarColor="#1e88e5">
    <Left>
      <Button transparent onPress={() => navigation.pop()}>
        <Icon name='arrow-back' />
      </Button>
    </Left>
    <Body style={{left : 60}}>
      <Title>Add Contact</Title>
    </Body>
    <Right>
      <TouchableOpacity onPress={() => handleClick()}>
        <Text style={{color: "#fff", top : 1, marginRight:10}}>Done</Text>
      </TouchableOpacity>
    </Right>
  </Header>
);

export default Headers