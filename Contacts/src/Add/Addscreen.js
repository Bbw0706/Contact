import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Button, Text, Label, Thumbnail } from 'native-base';

import Headers from "./Headers.js"

export default class Addscreen extends Component {
  render() {
    const {
          handleName,
          handlePostClick, 
          handleEmail, 
          handleNomor
          } = this.props.navigation.state.params
    return (
      <Container>
        <Headers navigation={this.props.navigation} handlePostClick={handlePostClick}/>
        <Content>
          <Thumbnail style={{marginTop : 20,marginBottom:10, alignSelf:"center", backgroundColor:"#1e88e5"}} source={{uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Gnome-stock_person.svg/1024px-Gnome-stock_person.svg.png"}} />
          <Form style={{marginRight:20, marginLeft:5}}>
            <Item floatingLabel>
              <Label>Nama</Label>
              <Input onChangeText={handleName} required/>
            </Item>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input onChangeText={handleEmail} required/>
            </Item>
            <Item floatingLabel>
              <Label>Nomor</Label>
              <Input onChangeText={handleNomor} required/>
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}