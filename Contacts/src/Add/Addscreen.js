import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Button, Text, Label } from 'native-base';

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
          <Form style={{marginRight:20, marginLeft:5}}>
            <Item stackedLabel>
              <Label>Nama</Label>
              <Input onChangeText={handleName} required/>
            </Item>
            <Item stackedLabel>
              <Label>Email</Label>
              <Input onChangeText={handleEmail} required/>
            </Item>
            <Item stackedLabel>
              <Label>Nomor</Label>
              <Input onChangeText={handleNomor} required/>
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}